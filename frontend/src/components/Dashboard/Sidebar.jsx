import { motion } from 'framer-motion';
import { FiActivity, FiAward, FiBarChart2, FiClock, FiHome, FiLogOut, FiMoon, FiSettings, FiStar, FiTarget, FiHeart, FiZap } from 'react-icons/fi';

const menuItems = [
  { label: 'Dashboard', icon: FiHome, href: '/dashboard' },
  { label: 'Workouts', icon: FiTarget, href: '/workout' },
  { label: 'AI Coach', icon: FiStar, href: '/dashboard' },
  { label: 'Nutrition', icon: FiHeart, href: '/nutrition' },
  { label: 'Progress', icon: FiBarChart2, href: '/progress' },
  { label: 'Achievements', icon: FiAward, href: '/dashboard' },
  { label: 'Reports', icon: FiClock, href: '/dashboard' },
  { label: 'Settings', icon: FiSettings, href: '/settings' },
];

export default function Sidebar({ activeItem = 'Dashboard', collapsed = false, onToggle }) {
  return (
    <aside className={`flex flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-xl transition-all ${collapsed ? 'w-20' : 'w-full lg:w-72'}`}>
      <div>
        <div className="flex items-center justify-between px-2 py-2">
          {!collapsed ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">AI Coach</p>
              <p className="mt-1 text-xs text-slate-400">Performance OS</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
              <FiActivity />
            </div>
          )}
          <button onClick={onToggle} className="hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 lg:block">
            <FiZap />
          </button>
        </div>

        <nav className="mt-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            return (
              <motion.a
                key={item.label}
                whileHover={{ x: 2, scale: 1.01 }}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${isActive ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.16)]' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
              >
                <Icon className={`text-lg ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                {!collapsed ? <span>{item.label}</span> : null}
              </motion.a>
            );
          })}
        </nav>
      </div>

      <div className={`rounded-[1.4rem] border border-white/10 bg-white/5 p-3 ${collapsed ? 'hidden' : 'block'}`}>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-2 text-white">
            <FiMoon />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Always ready</p>
            <p className="text-xs text-slate-400">Your next breakthrough is one tap away.</p>
          </div>
        </div>
      </div>

      <button className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-400 transition hover:text-slate-200">
        <FiLogOut />
        {!collapsed ? 'Logout' : null}
      </button>
    </aside>
  );
}
