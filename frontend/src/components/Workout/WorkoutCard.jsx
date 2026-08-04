import { motion } from 'framer-motion';
import { FiClock, FiBarChart2 } from 'react-icons/fi';

export default function WorkoutCard({ exercise, onSelect, active }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className={`group relative rounded-2xl border border-white/6 p-4 transition-shadow ${active ? 'ring-2 ring-cyan-400/30' : 'hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)]'} bg-gradient-to-br from-white/2 to-transparent`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 flex-none rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500/60 shadow-md" />
          <div>
            <h3 className="text-sm font-semibold text-white">{exercise.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{exercise.target}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-300">
              <span className="rounded-full bg-white/5 px-2 py-1">{exercise.difficulty}</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1"><FiClock /> {exercise.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="text-sm font-semibold text-white">{exercise.calories} kcal</div>
          <button onClick={onSelect} className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-900">Start</button>
        </div>
      </div>
    </motion.div>
  );
}
