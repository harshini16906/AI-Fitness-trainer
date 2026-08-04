export default function AchievementCard({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/8 bg-gradient-to-br from-purple-700/20 to-slate-900/10 p-3 text-center">
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 shadow-inner" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="text-xs text-slate-300">{subtitle}</div>
    </div>
  );
}
