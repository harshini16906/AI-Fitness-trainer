import { motion } from 'framer-motion';

export default function GoalProgressCard({ title, current, target, percent }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition-all hover:border-cyan-400/30 hover:bg-slate-900/80">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-white">{current}</p>
        </div>
        <p className="text-sm font-semibold text-cyan-300">{percent}%</p>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-900">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-3 text-sm text-slate-400">Target: {target}</p>
    </motion.div>
  );
}
