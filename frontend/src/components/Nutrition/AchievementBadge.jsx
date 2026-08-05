export default function AchievementBadge({ badge }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-center backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-2xl shadow-lg shadow-cyan-500/20">{badge.icon}</div>
      <p className="mt-4 text-sm font-semibold text-white">{badge.title}</p>
      <div className="pointer-events-none absolute left-1/2 top-full z-10 hidden w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-3 text-left text-xs text-slate-200 shadow-xl group-hover:block">
        {badge.description}
      </div>
    </div>
  );
}
