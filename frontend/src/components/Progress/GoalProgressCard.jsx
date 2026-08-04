import { motion } from 'framer-motion';

export default function GoalProgressCard({ title, percent, current, target }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-400">{title}</div>
          <div className="mt-1 text-lg font-semibold text-white">{current} / {target}</div>
        </div>
        <div className="w-24 text-right">
          <div className="text-sm text-slate-400">{percent}%</div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/5">
            <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
