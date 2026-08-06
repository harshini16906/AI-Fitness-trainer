import { motion } from 'framer-motion';

export default function MotivationCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-slate-950/80 p-6 shadow-[0_30px_80px_rgba(59,130,246,0.18)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/70 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Motivation</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Consistency builds success</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Success is built through consistency. Every workout brings you closer to your goal, and every choice today defines your stronger tomorrow.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Mindset', value: 'Focused' },
          { label: 'Energy', value: 'High' },
          { label: 'Recovery', value: 'Optimal' },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
            <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
