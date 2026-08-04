import { motion } from 'framer-motion';
import { FiCpu, FiPlay } from 'react-icons/fi';

export default function AICoachCard() {
  return (
    <div className="rounded-[1.6rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-slate-900/90 to-fuchsia-500/10 p-5 shadow-[0_0_70px_rgba(59,130,246,0.14)] backdrop-blur-xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-cyan-300">Today’s recommendation</p>
          <h3 className="mt-2 text-xl font-semibold text-white">AI Coach Insight</h3>
        </div>
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
          <FiCpu />
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">
        Focus on improving your squat posture today. Maintain a straight back and controlled movement for better muscle engagement.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <motion.button whileHover={{ scale: 1.02 }} className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium text-white">
          Ask AI Coach
        </motion.button>
        <motion.button whileHover={{ scale: 1.02 }} className="rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
          <span className="flex items-center gap-2"><FiPlay /> View Workout Plan</span>
        </motion.button>
      </div>
    </div>
  );
}
