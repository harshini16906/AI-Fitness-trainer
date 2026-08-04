export default function AchievementBadge({ title, date }) {
  return (
    <div className="group relative flex flex-col items-center gap-2 rounded-xl border border-white/8 bg-gradient-to-br from-purple-700/10 to-slate-900/5 p-3 text-center">
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 shadow-inner" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 rounded-md bg-slate-900/90 p-2 text-xs text-slate-200 group-hover:block">{title} — Earned {date}</div>
    </div>
  );
}
