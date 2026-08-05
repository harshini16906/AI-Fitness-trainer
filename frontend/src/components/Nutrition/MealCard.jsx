import { motion } from 'framer-motion';

export default function MealCard({ meal }) {
  return (
    <motion.div whileHover={{ y: -4, boxShadow: '0 24px 80px rgba(59,130,246,0.16)' }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-cyan-500 to-emerald-500" />
        <div>
          <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">{meal.id}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{meal.title}</h3>
        </div>
      </div>
      <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
        <div>Calories: {meal.calories}</div>
        <div>Protein: {meal.protein}g</div>
        <div>Carbs: {meal.carbs}g</div>
        <div>Fat: {meal.fat}g</div>
        <div>Prep: {meal.time}</div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-900">View Recipe</button>
        <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Mark Completed</button>
      </div>
    </motion.div>
  );
}
