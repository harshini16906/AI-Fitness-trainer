import { motion } from 'framer-motion';

export default function RecommendedWorkoutCard({ exercise }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="min-w-[180px] rounded-xl border border-white/8 bg-slate-900/40 p-3">
      <div className="h-24 w-full rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400" />
      <h5 className="mt-2 text-sm font-semibold text-white">{exercise.name}</h5>
      <div className="mt-1 flex items-center justify-between text-xs text-slate-300">
        <span>{exercise.difficulty}</span>
        <span>{exercise.duration}</span>
      </div>
      <div className="mt-2">
        <button className="w-full rounded-2xl bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-900">Start</button>
      </div>
    </motion.div>
  );
}
