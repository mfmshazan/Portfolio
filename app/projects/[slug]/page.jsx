import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt, FaAndroid } from "react-icons/fa";
import { projects, getProject } from "@/constants/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Shazan Faslan`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = project.details || {};
  const overview = Array.isArray(details.overview)
    ? details.overview
    : details.overview
    ? [details.overview]
    : [project.description];

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-4xl px-6 pb-28 pt-32 md:px-12">
        {/* Back */}
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 font-primary text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-emerald-400"
        >
          <FiArrowLeft /> Back to projects
        </Link>

        {/* Header */}
        <p className="mt-10 flex items-center gap-3 font-primary text-xs uppercase tracking-[0.35em] text-emerald-400">
          <span className="h-px w-10 bg-emerald-400" />
          Project {project.number}
        </p>
        <h1 className="mt-5 font-display text-[13vw] leading-[0.9] md:text-[6vw]">
          {project.title}
        </h1>

        {/* Links */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-black transition-all hover:bg-emerald-400"
            >
              Live <FaExternalLinkAlt />
            </a>
          )}
          {project.apks?.map((apk) => (
            <a
              key={apk.label}
              href={apk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-emerald-400 hover:text-emerald-400"
            >
              <FaAndroid /> {apk.label}
            </a>
          ))}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-emerald-400 hover:text-emerald-400"
            >
              Code <FaGithub />
            </a>
          )}
        </div>

        {/* Cover */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
          <img src={project.image} alt={project.title} className="w-full object-cover" />
        </div>

        {/* Overview */}
        <div className="mt-14">
          <h2 className="mb-5 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
            <span className="text-emerald-400">/</span> Overview
          </h2>
          <div className="space-y-5 text-white/70">
            {overview.map((para, i) => (
              <p key={i} className="font-primary text-sm leading-relaxed md:text-base">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Features */}
        {details.features?.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
              <span className="text-emerald-400">/</span> Key Features
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {details.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                  <span className="text-sm text-white/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech */}
        <div className="mt-14">
          <h2 className="mb-5 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
            <span className="text-emerald-400">/</span> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 font-primary text-xs text-emerald-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Role */}
        {details.role && (
          <div className="mt-14">
            <h2 className="mb-5 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
              <span className="text-emerald-400">/</span> My Role
            </h2>
            <p className="max-w-2xl leading-relaxed text-white/70 md:text-lg">
              {details.role}
            </p>
          </div>
        )}

        {/* Gallery */}
        {details.gallery?.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
              <span className="text-emerald-400">/</span> Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.gallery.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]"
                >
                  <img src={src} alt={`${project.title} ${i + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom back */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 font-primary text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-emerald-400"
          >
            <FiArrowLeft /> Back to all projects
          </Link>
        </div>
      </article>
    </main>
  );
}
