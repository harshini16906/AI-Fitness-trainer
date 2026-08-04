import { motion } from 'framer-motion';

export default function AICoachInsights() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-900/20 to-slate-900/10 p-4">
      <div className="flex items-start gap-3">
        <div className="h-14 w-14 flex-none rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 p-3 shadow-lg" />
        <div>
          <h4 className="text-sm font-semibold text-white">AI Insights</h4>
          <p className="mt-2 text-sm text-slate-300">You improved your workout consistency by 18% this week. Focus on stretching and hydration to maximize recovery.</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-2xl bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-900">View Recommendations</button>
            <button className="rounded-2xl bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-900">Generate Plan</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
