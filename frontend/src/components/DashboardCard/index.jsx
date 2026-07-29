// Placeholder dashboard card for overview panels.
export default function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{title}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{value}</h3>
      <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}
