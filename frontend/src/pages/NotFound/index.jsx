// 404 page placeholder for unmatched routes.
import { Link } from 'react-router-dom';
import { Panel } from '../../components/Common';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-16">
      <Panel>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-slate-400">The page you are looking for does not exist yet.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
          Return home
        </Link>
      </Panel>
    </div>
  );
}
