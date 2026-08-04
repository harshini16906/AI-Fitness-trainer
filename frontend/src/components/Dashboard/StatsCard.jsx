import { motion } from 'framer-motion';

export default function StatsCard({ icon: Icon, title, value, subtitle, accent }) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        </div>
        <div className={`rounded-2xl p-3 ${accent}`}>
          <Icon className="text-xl text-white" />
        </div>
      </div>
    </motion.div>
  );
}
