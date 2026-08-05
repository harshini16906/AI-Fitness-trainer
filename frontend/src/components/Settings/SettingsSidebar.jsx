import { motion } from 'framer-motion';
import { FiUser, FiShield, FiSun, FiBell, FiTarget, FiClock, FiWatch, FiBarChart2, FiMessageSquare, FiLogOut } from 'react-icons/fi';

const sections = [
  { id: 'Profile', label: 'Profile', icon: FiUser },
  { id: 'Security', label: 'Security', icon: FiShield },
  { id: 'Appearance', label: 'Appearance', icon: FiSun },
  { id: 'Notifications', label: 'Notifications', icon: FiBell },
  { id: 'Fitness', label: 'Fitness Preferences', icon: FiTarget },
  { id: 'Language', label: 'Language & Region', icon: FiClock },
  { id: 'Devices', label: 'Connected Devices', icon: FiWatch },
  { id: 'Reports', label: 'Data & Reports', icon: FiBarChart2 },
  { id: 'Support', label: 'Help & Support', icon: FiMessageSquare },
  { id: 'Logout', label: 'Logout', icon: FiLogOut },
];

export default function SettingsSidebar({ selected, onSelect }) {
  return (
    <aside className="sticky top-6 hidden h-[calc(100vh-6rem)] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-4 shadow-[0_30px_80px_rgba(30,41,59,0.15)] backdrop-blur-xl lg:block">
      <div className="mb-8 rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-5 text-slate-300 shadow-[0_20px_60px_rgba(59,130,246,0.06)]">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Settings</p>
        <h2 className="mt-3 text-xl font-semibold text-white">Account Controls</h2>
        <p className="mt-2 text-sm text-slate-400">Manage your preferences, security, and account experience.</p>
      </div>
      <nav className="space-y-2">
        {sections.map((item) => {
          const Icon = item.icon;
          const active = selected === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`group flex w-full items-center gap-3 rounded-3xl border px-4 py-3 text-left transition ${
                active
                  ? 'border-cyan-400/30 bg-cyan-500/10 text-white shadow-[0_20px_60px_rgba(59,130,246,0.18)]'
                  : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-cyan-400/20 hover:bg-slate-900/80 hover:text-white'
              }`}>
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl transition ${active ? 'bg-cyan-500/15 text-cyan-300' : 'bg-white/5 text-slate-400 group-hover:bg-cyan-400/10 group-hover:text-cyan-300'}`}>
                <Icon className="text-lg" />
              </span>
              <span className="flex-1 text-sm font-medium">{item.label}</span>
              <motion.span whileHover={{ x: 3 }} className="text-slate-500 transition group-hover:text-cyan-300">
                ›
              </motion.span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
