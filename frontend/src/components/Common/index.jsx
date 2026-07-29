// Shared common UI primitives for the app foundation.
export function SectionTitle({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {description ? <p className="mt-2 text-sm text-slate-400">{description}</p> : null}
    </div>
  );
}

export function Panel({ children, className = '' }) {
  return <div className={`rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl ${className}`}>{children}</div>;
}
