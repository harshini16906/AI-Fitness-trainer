import { useNavigate } from 'react-router-dom';
import { FiBell, FiMenu, FiSearch, FiSettings, FiSun } from 'react-icons/fi';

export default function TopNavbar({ onMenuToggle, darkMode, onDarkModeToggle }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 mb-6 rounded-[2rem] border border-white/10 bg-slate-900/70 px-4 py-3 shadow-[0_0_60px_rgba(59,130,246,0.1)] backdrop-blur-xl sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button onClick={onMenuToggle} className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300 lg:hidden">
            <FiMenu />
          </button>
          <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 sm:flex sm:items-center sm:gap-3">
            <FiSearch className="text-slate-400" />
            <input placeholder="Search plans, workouts, goals" className="w-48 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={onDarkModeToggle} className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-cyan-300">
            {darkMode ? <FiSun /> : <FiBell />}
          </button>
          <button onClick={() => navigate('/settings')} className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-cyan-300">
            <FiSettings />
          </button>
          <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 font-semibold text-white">H</div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Harshini</p>
              <p className="text-xs text-slate-400">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
