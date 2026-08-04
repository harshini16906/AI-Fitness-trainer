export default function QuickActions() {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-2xl bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-900">Start Workout</button>
      <button className="rounded-2xl bg-white/5 px-3 py-2 text-sm">Pause</button>
      <button className="rounded-2xl bg-white/5 px-3 py-2 text-sm">Finish</button>
      <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm">Download</button>
    </div>
  );
}
