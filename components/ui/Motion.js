"use client";

// Scroll and entrance motion (Framer Motion, lazy-loaded features).
// Everything moves along the reading direction, so it mirrors in Arabic.
// People who ask their device for reduced motion get no movement.
import { LazyMotion, MotionConfig, domAnimation, m, useScroll, useSpring } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

// A hairline that draws itself from the start edge when it scrolls into view.
export function DrawnRule({ className = "" }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <m.span
          aria-hidden="true"
          data-motion
          className={`block h-px origin-left bg-ink rtl:origin-right ${className}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        />
      </MotionConfig>
    </LazyMotion>
  );
}

// Slides its content in from the start or end edge once, on page load.
export function Slide({ as = "div", from = "start", pageDir = "ltr", delay = 0, children, ...rest }) {
  const Tag = m[as];
  const sign = (from === "start" ? -1 : 1) * (pageDir === "rtl" ? -1 : 1);
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Tag
          data-motion
          initial={{ x: sign * 44 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease, delay }}
          {...rest}
        >
          {children}
        </Tag>
      </MotionConfig>
    </LazyMotion>
  );
}

// A thin bar under the navbar that fills as the page is read.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-accent rtl:origin-right"
        style={{ scaleX }}
      />
    </LazyMotion>
  );
}
