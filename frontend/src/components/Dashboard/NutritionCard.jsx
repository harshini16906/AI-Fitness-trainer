import { motion } from 'framer-motion';

const items = [
  { label: 'Calories Consumed', value: '2,180 kcal', progress: 72 },
  { label: 'Protein Intake', value: '142g', progress: 86 },
  { label: 'Water Intake', value: '2.4L', progress: 80 },
  { label: 'Remaining Calories', value: '620 kcal', progress: 40 },
];

export default function NutritionCard() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Nutrition summary</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Aligned with your goals</h3>
        </div>
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">Balanced</div>
      </div>

      <div className="mt-5 space-y-4">
        {items.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-400">{item.label}</span>
              <span className="text-slate-200">{item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" style={{ width: `${item.progress}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
