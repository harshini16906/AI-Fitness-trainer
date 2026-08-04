import { motion } from 'framer-motion';

export default function ProgressSummaryCard({ icon, label, value, suffix, accent }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className={`rounded-2xl border border-white/10 p-4 bg-gradient-to-br ${accent ? `${accent}` : 'from-white/2 to-transparent'}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-300">{label}</div>
          <div className="mt-2 text-2xl font-bold text-white">{value}{suffix}</div>
        </div>
        <div className="h-12 w-12 flex-none rounded-xl bg-white/5 flex items-center justify-center text-2xl">{icon}</div>
      </div>
    </motion.div>
  );
}
