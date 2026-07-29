// Premium sticky navbar for the landing experience.
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiActivity } from 'react-icons/fi';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '#features' },
  { name: 'Workouts', path: '/workout' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Pricing', path: '/register' },
  { name: 'Testimonials', path: '#testimonials' },
  { name: 'Contact', path: '/profile' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-slate-950/70 shadow-[0_0_30px_rgba(59,130,246,0.12)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 p-2">
            <FiActivity className="text-cyan-300" />
          </span>
          AI Fitness Trainer
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.path} href={link.path} className="relative text-sm text-slate-300 transition hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300">
            Login
          </Link>
          <Link to="/register" className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:opacity-90">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
