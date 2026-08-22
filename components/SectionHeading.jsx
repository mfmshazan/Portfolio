const SectionHeading = ({ index, label, title }) => {
  return (
    <div className="mb-14 md:mb-20">
      <p className="reveal mb-4 flex items-center gap-3 font-primary text-xs uppercase tracking-[0.35em] text-emerald-400">
        <span className="h-px w-10 bg-emerald-400" />
        {index} / {label}
      </p>
      <h2 className="reveal font-display text-[13vw] leading-[0.85] text-white md:text-[6.5vw]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
