// Placeholder exercise card for workout-related views.
export default function ExerciseCard() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Upper Body Flow</h3>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">30 min</span>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        A polished placeholder for future workout cards and AI-generated routines.
      </p>
    </div>
  );
}
