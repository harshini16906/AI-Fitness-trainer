import { motion } from 'framer-motion';

const goals = [
  { label: 'Push-ups', value: 20, target: 20, color: 'from-cyan-500 to-emerald-500' },
  { label: 'Squats', value: 15, target: 20, color: 'from-emerald-500 to-lime-500' },
  { label: 'Plank', value: 45, target: 60, color: 'from-violet-500 to-fuchsia-500' },
  { label: 'Water Intake', value: 1800, target: 3000, unit: 'ml', color: 'from-sky-500 to-cyan-400' },
];

export default function GoalCard() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Today’s goals</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Momentum checklist</h3>
        </div>
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">82% complete</div>
      </div>

      <div className="mt-5 space-y-4">
        {goals.map((goal, index) => {
          const percent = Math.min(100, (goal.value / goal.target) * 100);
          return (
            <motion.div key={goal.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                <span>{goal.label}</span>
                <span className="text-slate-200">
                  {goal.value}
                  {goal.unit ? `/${goal.target} ${goal.unit}` : `/${goal.target}`}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className={`h-2 rounded-full bg-gradient-to-r ${goal.color}`} style={{ width: `${percent}%` }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
