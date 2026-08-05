import { motion } from 'framer-motion';

export default function GoalCard({ title, percent, current, target }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{current}</h3>
        </div>
        <div className="text-sm text-slate-200">{percent}%</div>
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/5">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-2 text-xs text-slate-400">Target: {target}</p>
    </motion.div>
  );
}
