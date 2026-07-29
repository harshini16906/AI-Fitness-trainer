// Professional multi-column footer for the premium product experience.
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">AI Fitness Trainer</p>
          <p className="mt-3 text-sm leading-7 text-slate-400">A beautifully designed AI fitness platform for smarter training and lasting progress.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Home</li>
            <li>Features</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Resources</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Newsletter</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">Stay inspired with product updates and new features.</p>
        </div>
      </div>
    </footer>
  );
}
