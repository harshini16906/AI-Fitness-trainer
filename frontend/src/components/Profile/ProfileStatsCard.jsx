import { motion } from 'framer-motion';

export default function ProfileStatsCard({ icon, title, value, label, accent }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition-all hover:border-cyan-400/30 hover:bg-slate-900/80">
      <div className="flex items-center justify-between gap-4">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${accent} text-white shadow-lg`}>{icon}</div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{title}</p>
      </div>
      <div className="mt-6">
        <p className="text-4xl font-semibold text-white">{value}</p>
        <p className="mt-2 text-sm text-slate-400">{label}</p>
      </div>
    </motion.div>
  );
}
