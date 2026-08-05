import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

export default function RecipeCard({ recipe }) {
  return (
    <motion.div whileHover={{ y: -4, boxShadow: '0 24px 80px rgba(59,130,246,0.16)' }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="h-32 rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500" />
      <div className="mt-4 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-white">{recipe.title}</h4>
          <p className="text-sm text-slate-400">{recipe.difficulty} • {recipe.time}</p>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200"><FiHeart /></button>
      </div>
      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <span>Calories: {recipe.calories}</span>
        <span>Protein: {recipe.protein}g</span>
      </div>
      <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900">View Recipe</button>
    </motion.div>
  );
}
