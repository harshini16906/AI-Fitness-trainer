import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const macros = [
  { label: 'Protein', value: 73, goal: '150g', consumed: '110g' },
  { label: 'Carbs', value: 60, goal: '300g', consumed: '180g' },
  { label: 'Healthy Fats', value: 67, goal: '90g', consumed: '60g' },
  { label: 'Fiber', value: 55, goal: '30g', consumed: '16g' },
  { label: 'Sugar', value: 48, goal: '36g', consumed: '17g' },
  { label: 'Sodium', value: 70, goal: '2300mg', consumed: '1600mg' }
];

export default function MacroProgress() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">Macronutrients</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Macro Balance</h3>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {macros.map((macro) => (
          <div key={macro.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-center">
            <div className="mx-auto h-24 w-24">
              <CircularProgressbar value={macro.value} text={`${macro.value}%`} styles={buildStyles({ pathColor: '#3B82F6', textColor: '#fff', trailColor: '#334155' })} />
            </div>
            <p className="mt-4 text-sm text-slate-300">{macro.label}</p>
            <p className="mt-2 text-sm text-slate-400">{macro.consumed} / {macro.goal}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
