// Simple responsive navbar for the premium fitness experience.
import { Link } from 'react-router-dom';
import { FiActivity, FiMenu } from 'react-icons/fi';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Workout', path: '/workout' },
  { name: 'Progress', path: '/progress' },
  { name: 'Nutrition', path: '/nutrition' },
  { name: 'Profile', path: '/profile' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 p-2">
            <FiActivity className="text-cyan-300" />
          </span>
          AI Fitness Trainer
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300">
            Login
          </Link>
          <button className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:opacity-90 md:flex">
            <FiMenu className="mr-2" />
            Start
          </button>
        </div>
      </nav>
    </header>
  );
}
