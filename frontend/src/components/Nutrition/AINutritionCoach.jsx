import { motion } from 'framer-motion';

export default function AINutritionCoach() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/15 to-slate-950/40 p-5 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 p-3 shadow-lg shadow-cyan-500/20" />
        <div>
          <p className="text-sm text-slate-400">AI Nutrition Coach</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Today's AI Advice</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">You are slightly below your protein goal. Add Greek yogurt, eggs, or lentils to improve muscle recovery.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">Ask AI Coach</button>
        <button className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900">Generate Meal Plan</button>
        <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Nutrition Tips</button>
      </div>
    </motion.div>
  );
}
