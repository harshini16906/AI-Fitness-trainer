import { motion } from 'framer-motion';
import { FiHeart, FiSave, FiPlay } from 'react-icons/fi';

export default function ExerciseDetails({ exercise }) {
  if (!exercise) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{exercise.name}</h2>
          <p className="mt-2 text-sm text-slate-400">Target: <span className="font-medium text-slate-100">{exercise.target}</span></p>
          <p className="mt-3 text-sm text-slate-300">A focused {exercise.target.toLowerCase()} exercise that helps improve strength and stability. Maintain proper form and controlled tempo.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 px-4 py-2 font-semibold text-slate-900"><FiPlay /> Start Workout</button>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"><FiSave /> Save</button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-slate-950/40 p-3 text-center">
          <div className="text-sm text-slate-400">Difficulty</div>
          <div className="mt-1 text-sm font-semibold text-white">{exercise.difficulty}</div>
        </div>
        <div className="rounded-lg bg-slate-950/40 p-3 text-center">
          <div className="text-sm text-slate-400">Estimated Calories</div>
          <div className="mt-1 text-sm font-semibold text-white">{exercise.calories} kcal / min</div>
        </div>
        <div className="rounded-lg bg-slate-950/40 p-3 text-center">
          <div className="text-sm text-slate-400">Duration</div>
          <div className="mt-1 text-sm font-semibold text-white">{exercise.duration}</div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-slate-950/30 p-3">
          <h4 className="text-sm font-semibold text-slate-200">Recommended Repetitions</h4>
          <p className="mt-2 text-sm text-slate-300">3 sets of 8-12 reps (adjust by difficulty)</p>
        </div>
        <div className="rounded-lg bg-slate-950/30 p-3">
          <h4 className="text-sm font-semibold text-slate-200">Safety Tips</h4>
          <ul className="mt-2 text-sm text-slate-300 list-disc list-inside">
            <li>Warm up before starting</li>
            <li>Keep a neutral spine</li>
            <li>Stop if you feel pain</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
