import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaterTracker() {
  const [intake, setIntake] = useState(1800);
  const goal = 3000;
  const percent = Math.min(100, Math.round((intake / goal) * 100));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">Hydration Tracker</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Water Intake</h3>
        </div>
        <div className="rounded-3xl bg-white/5 px-3 py-2 text-sm text-slate-200">{percent}%</div>
      </div>
      <div className="mt-5 h-56 rounded-[2rem] bg-gradient-to-b from-cyan-500/20 to-slate-950/20 p-4">
        <div className="h-full rounded-[1.6rem] bg-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full rounded-b-[1.6rem] bg-cyan-500/50" style={{ height: `${percent}%` }} />
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <button onClick={() => setIntake((prev) => Math.min(goal, prev + 250))} className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">+250ml</button>
        <button onClick={() => setIntake((prev) => Math.min(goal, prev + 500))} className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900">+500ml</button>
        <button onClick={() => setIntake(0)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Reset</button>
      </div>
      <div className="mt-4 flex justify-between text-sm text-slate-300">
        <span>{intake} ml</span>
        <span>{goal} ml goal</span>
      </div>
    </motion.div>
  );
}
