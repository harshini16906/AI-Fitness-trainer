// Dashboard page placeholder.
import { Panel } from '../../components/Common';
import DashboardCard from '../../components/DashboardCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Panel>
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
        <p className="mt-3 text-slate-400">A premium overview screen for upcoming analytics and training insights.</p>
      </Panel>
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardCard title="Training Load" value="78%" subtitle="Balanced and sustainable" />
        <DashboardCard title="Recovery" value="High" subtitle="Ready for your next session" />
        <DashboardCard title="Weekly Goal" value="4/5" subtitle="Progress is on track" />
      </div>
    </div>
  );
}
