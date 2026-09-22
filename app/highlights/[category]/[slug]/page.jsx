import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { competitions, volunteering, getHighlight } from "@/constants/data";

export function generateStaticParams() {
  return [
    ...competitions.map((c) => ({ category: "competitions", slug: c.slug })),
    ...volunteering.map((v) => ({ category: "volunteering", slug: v.slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const item = getHighlight(category, slug);
  if (!item) return { title: "Not found" };
  return {
    title: `${item.title} — Shazan Faslan`,
    description: item.brief,
  };
}

const categoryLabel = {
  competitions: "Competition",
  volunteering: "Volunteering",
};

export default async function HighlightDetail({ params }) {
  const { category, slug } = await params;
  const item = getHighlight(category, slug);
  if (!item) notFound();

  const { details } = item;

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-4xl px-6 pb-28 pt-32 md:px-12">
        {/* Back */}
        <Link
          href="/#highlights"
          className="inline-flex items-center gap-2 font-primary text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-emerald-400"
        >
          <FiArrowLeft /> Back
        </Link>

        {/* Header */}
        <p className="mt-10 flex items-center gap-3 font-primary text-xs uppercase tracking-[0.35em] text-emerald-400">
          <span className="h-px w-10 bg-emerald-400" />
          {categoryLabel[category]} · {item.role} · {item.date}
        </p>
        <h1 className="mt-5 font-display text-[13vw] leading-[0.9] md:text-[6vw]">
          {item.title}
        </h1>

        {details?.summary && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {details.summary}
          </p>
        )}

        {/* Cover */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
          <img src={item.cover} alt={item.title} className="w-full object-cover" />
        </div>

        {/* Highlights list */}
        {details?.highlights?.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {details.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                <span className="text-sm text-white/70">{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        {details?.body?.length > 0 && (
          <div className="mt-14 space-y-6 text-white/70">
            {details.body.map((para, i) => (
              <p key={i} className="leading-relaxed md:text-lg">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Gallery */}
        {details?.gallery?.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {details.gallery.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]"
              >
                <img src={src} alt={`${item.title} ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* External link */}
        {details?.link && (
          <a
            href={details.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-primary text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-emerald-400 hover:text-emerald-400"
          >
            Learn more <FiArrowUpRight />
          </a>
        )}

        {/* Bottom back */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <Link
            href="/#highlights"
            className="inline-flex items-center gap-2 font-primary text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-emerald-400"
          >
            <FiArrowLeft /> Back to all activities
          </Link>
        </div>
      </article>
    </main>
  );
}
