import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlay, FiBarChart2, FiHeart, FiSettings, FiDownload, FiShare2 } from 'react-icons/fi';

const actions = [
  { label: 'Start Workout', icon: FiPlay, variant: 'from-cyan-500 to-violet-500', to: '/workout' },
  { label: 'View Progress', icon: FiBarChart2, variant: 'from-emerald-500 to-cyan-500', to: '/progress' },
  { label: 'Nutrition Dashboard', icon: FiHeart, variant: 'from-violet-500 to-fuchsia-500', to: '/nutrition' },
  { label: 'Settings', icon: FiSettings, variant: 'from-blue-500 to-cyan-500', to: '/settings' },
  { label: 'Download Report', icon: FiDownload, variant: 'from-emerald-500 to-teal-500', to: '/profile' },
  { label: 'Share Profile', icon: FiShare2, variant: 'from-cyan-500 to-blue-500', to: '/profile' },
];

export default function QuickActions() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Quick Actions</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Jump to your core tools</h2>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <motion.div whileHover={{ y: -3 }} key={action.label}>
              <Link to={action.to} className="group flex items-center gap-4 rounded-[1.8rem] border border-white/10 bg-slate-900/60 px-5 py-4 text-left transition hover:border-cyan-400/30 hover:bg-slate-900/80">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${action.variant} text-white shadow-lg`}>
                  <Icon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{action.label}</p>
                  <p className="mt-1 text-xs text-slate-400">Tap to explore</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
