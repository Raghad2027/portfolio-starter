import { notFound } from "next/navigation";
import { cv } from "@/data/cv";
import { tr } from "@/lib/i18n";
import ProjectView from "@/views/ProjectView";

// A static site must know every project page at build time.
// This builds one page per project in data/cv.js.
export function generateStaticParams() {
  return cv.projects.map((p) => ({ slug: p.slug }));
}

// Any slug that is not in cv.js shows the 404 page.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = cv.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: tr(project.name, "ar"), description: tr(project.summary, "ar") };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params; // params is a Promise in Next.js 15+
  const project = cv.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectView project={project} locale="ar" />;
}
