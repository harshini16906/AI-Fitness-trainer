// Hero section placeholder with premium visual styling.
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl sm:p-10 lg:p-14"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
            AI-powered fitness coaching
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Train smarter with a futuristic fitness companion.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Personalized workouts, posture feedback, and progress tracking designed to feel effortless and premium.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
              Start Your Plan
            </button>
            <button className="rounded-full border border-white/10 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300">
              Explore Features
            </button>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-800 to-emerald-400/20 p-6">
          <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live Metrics</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-slate-300">Performance</span>
                <span className="font-semibold text-cyan-300">92%</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-slate-300">Recovery</span>
                <span className="font-semibold text-emerald-300">Excellent</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <span className="text-slate-300">Streak</span>
                <span className="font-semibold text-fuchsia-300">14 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
