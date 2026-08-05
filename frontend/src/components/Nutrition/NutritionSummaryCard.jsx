import { motion } from 'framer-motion';

export default function NutritionSummaryCard({ icon, label, value, suffix, progress }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 shadow-[0_20px_50px_rgba(59,130,246,0.12)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{value}{suffix}</h3>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl shadow-lg shadow-cyan-500/20">{icon}</div>
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/5">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-xs text-slate-400">{progress}% of goal</p>
    </motion.div>
  );
}
