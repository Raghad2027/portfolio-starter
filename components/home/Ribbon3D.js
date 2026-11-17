"use client";

// The 3D piece of the hero: one calligraphy stroke, drawn in WebGL (three.js),
// flowing between her name in Latin and in Arabic. It is thick and thin like a
// reed-pen line, lapis on one face and gilt on the other, and it leans toward
// the pointer.
//
// It is decoration, so it is built to stay out of the way:
// - three.js is fetched only on the first pointer move, wheel, touch or key
//   press (dynamic import), so it never delays the page itself;
// - it stops drawing when it is off screen or the tab is hidden;
// - with "reduce motion" on, it draws one still frame.
import { useEffect, useRef } from "react";

const vertexShader = /* glsl */ `
  attribute float aT;
  attribute float aSide;
  uniform float uTime;
  uniform float uLength;
  uniform float uAmp;
  uniform float uWidth;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vT;

  const float TAU = 6.2831853;

  // The path of the pen through space.
  vec3 path(float t) {
    float x = (t - 0.5) * uLength;
    float y = uAmp * (0.78 * sin(t * TAU * 1.15 + uTime * 0.55) + 0.26 * sin(t * TAU * 2.7 - uTime * 0.35));
    float z = uAmp * 1.15 * cos(t * TAU * 1.6 + uTime * 0.42);
    return vec3(x, y, z);
  }

  void main() {
    vec3 c = path(aT);
    vec3 tangent = normalize(path(aT + 0.002) - c);
    vec3 n = normalize(cross(tangent, vec3(0.0, 1.0, 0.0)));
    vec3 b = normalize(cross(n, tangent));

    // The flat nib twists as it travels.
    float twist = aT * TAU * 1.5 + uTime * 0.3;
    vec3 nib = normalize(cos(twist) * b + sin(twist) * n);

    // Pen pressure: the stroke swells and thins, and tapers at both ends.
    float pressure = 0.28 + 0.72 * pow(abs(sin(aT * 3.14159 * 2.0 + 0.6)), 1.2);
    float taper = smoothstep(0.0, 0.07, aT) * smoothstep(1.0, 0.93, aT);

    vec3 p = c + nib * aSide * uWidth * pressure * taper;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vNormal = normalize(normalMatrix * cross(tangent, nib));
    vView = -mv.xyz;
    vT = aT;
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uFront;
  uniform vec3 uBack;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vT;

  void main() {
    vec3 n = normalize(vNormal);
    if (!gl_FrontFacing) n = -n;
    vec3 base = gl_FrontFacing ? uFront : uBack;

    vec3 light = normalize(vec3(0.35, 0.8, 0.7));
    float diffuse = 0.5 + 0.5 * max(dot(n, light), 0.0);
    vec3 halfway = normalize(light + normalize(vView));
    float shine = pow(max(dot(n, halfway), 0.0), 48.0) * 0.45;

    gl_FragColor = vec4(base * diffuse + shine, 1.0);
    #include <colorspace_fragment>
  }
`;

export default function Ribbon3D({ className = "" }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let dispose = () => {};
    let cancelled = false;

    async function start() {
      const THREE = await import("three");
      if (cancelled) return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch {
        return; // No WebGL: the plain axis line stays visible instead.
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      const canvas = renderer.domElement;
      canvas.setAttribute("aria-hidden", "true");
      canvas.style.cssText = "display:block;width:100%;height:100%";
      host.appendChild(canvas);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 2, 0.1, 100);
      camera.position.z = 11;

      // A strip of triangles. The shader bends it into the ribbon.
      const segments = 420;
      const t = new Float32Array((segments + 1) * 2);
      const side = new Float32Array((segments + 1) * 2);
      const index = [];
      for (let i = 0; i <= segments; i++) {
        t[i * 2] = t[i * 2 + 1] = i / segments;
        side[i * 2] = -1;
        side[i * 2 + 1] = 1;
        if (i < segments) index.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array((segments + 1) * 6), 3));
      geometry.setAttribute("aT", new THREE.BufferAttribute(t, 1));
      geometry.setAttribute("aSide", new THREE.BufferAttribute(side, 1));
      geometry.setIndex(index);

      const uniforms = {
        uTime: { value: 0 },
        uLength: { value: 20 },
        uAmp: { value: 1 },
        uWidth: { value: 0.6 },
        uFront: { value: new THREE.Color() },
        uBack: { value: new THREE.Color() },
      };
      const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, side: THREE.DoubleSide });
      const ribbon = new THREE.Mesh(geometry, material);
      ribbon.frustumCulled = false;
      scene.add(ribbon);

      // Colors come from the theme, so dark mode recolors the ribbon too.
      const readColors = () => {
        const css = getComputedStyle(host);
        uniforms.uFront.value.set(css.getPropertyValue("--accent").trim() || "#2438a8");
        uniforms.uBack.value.set(css.getPropertyValue("--gilt").trim() || "#84651a");
      };
      readColors();
      const themeWatcher = new MutationObserver(() => {
        readColors();
        draw();
      });
      themeWatcher.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        // How much of the world the camera sees at the ribbon's depth.
        const viewHeight = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
        // A little shorter than the view, so both pointed ends of the stroke show.
        uniforms.uLength.value = viewHeight * camera.aspect * 0.97;
        uniforms.uAmp.value = viewHeight * 0.2;
        uniforms.uWidth.value = viewHeight * 0.12;
        draw();
      };

      const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const pointer = { x: 0, y: 0 };
      const onPointer = (e) => {
        pointer.x = e.clientX / window.innerWidth - 0.5;
        pointer.y = e.clientY / window.innerHeight - 0.5;
      };

      let frame = 0;
      let visible = true;
      const clock = new THREE.Clock();
      function draw() {
        renderer.render(scene, camera);
      }
      function tick() {
        frame = 0;
        if (!visible || document.hidden) return;
        // Time moves on its own, and a little faster while the page scrolls.
        uniforms.uTime.value = 1.4 + clock.getElapsedTime() * 0.7 + window.scrollY * 0.004;
        ribbon.rotation.x += (pointer.y * 0.5 - ribbon.rotation.x) * 0.05;
        ribbon.rotation.y += (pointer.x * 0.22 - ribbon.rotation.y) * 0.05;
        draw();
        frame = requestAnimationFrame(tick);
      }
      const wake = () => {
        if (!still && !frame) frame = requestAnimationFrame(tick);
      };

      uniforms.uTime.value = 1.4;
      const sizeWatcher = new ResizeObserver(resize);
      sizeWatcher.observe(host);
      const viewWatcher = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        wake();
      });
      viewWatcher.observe(host);
      document.addEventListener("visibilitychange", wake);
      if (!still) window.addEventListener("pointermove", onPointer, { passive: true });

      resize();
      host.dataset.ready = "true";
      wake();

      dispose = () => {
        cancelAnimationFrame(frame);
        themeWatcher.disconnect();
        sizeWatcher.disconnect();
        viewWatcher.disconnect();
        document.removeEventListener("visibilitychange", wake);
        window.removeEventListener("pointermove", onPointer);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        canvas.remove();
      };
    }

    // three.js is only fetched on the visitor's first sign of life: a pointer
    // move, wheel, touch or key press. The page itself loads without it.
    const firstSigns = ["pointermove", "wheel", "touchstart", "keydown"];
    const onFirstSign = () => {
      firstSigns.forEach((name) => window.removeEventListener(name, onFirstSign));
      start();
    };
    firstSigns.forEach((name) => window.addEventListener(name, onFirstSign, { passive: true }));

    return () => {
      cancelled = true;
      firstSigns.forEach((name) => window.removeEventListener(name, onFirstSign));
      dispose();
    };
  }, []);

  return <div ref={hostRef} className={`ribbon ${className}`} />;
}
