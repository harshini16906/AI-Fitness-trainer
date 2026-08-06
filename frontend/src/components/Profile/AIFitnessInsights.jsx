import { motion } from 'framer-motion';
import { FiRobot, FiArrowRight, FiHeart, FiShield } from 'react-icons/fi';

export default function AIFitnessInsights() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="flex flex-col gap-5 rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">AI Fitness Insights</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Your AI Coach Score</h2>
          </div>
          <div className="rounded-3xl bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200">Live AI Guidance</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-400">AI Fitness Score</p>
            <p className="mt-5 text-5xl font-semibold text-white">92 <span className="text-xl text-slate-400">/ 100</span></p>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Strength and recovery are on track. Focus on protein-rich meals and compound movements.</p>
              <p>Energy levels remain high; smart rest days will keep momentum steady.</p>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-400">Weekly Summary</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Excellent progress</h3>
              </div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-center leading-16 text-3xl text-white shadow-lg">🤖</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Recommendation</p>
                <p className="mt-2 text-sm text-white">Increase protein intake and keep strength training intensity steady.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Recovery Focus</p>
                <p className="mt-2 text-sm text-white">Stay hydrated and prioritize sleep to support muscle growth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
            Generate New Plan <FiArrowRight />
          </button>
          <button className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
            View Nutrition Advice <FiHeart />
          </button>
          <button className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
            Ask AI Coach <FiShield />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
