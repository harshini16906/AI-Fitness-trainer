// Progress page placeholder.
import { Panel } from '../../components/Common';
import ProgressCard from '../../components/ProgressCard';
import Charts from '../../components/Charts';

export default function Progress() {
  return (
    <div className="space-y-6">
      <Panel>
        <h1 className="text-3xl font-semibold text-white">Progress Insights</h1>
        <p className="mt-3 text-slate-400">A clear placeholder for visual progress summaries and goal tracking.</p>
      </Panel>
      <div className="grid gap-6 lg:grid-cols-2">
        <ProgressCard />
        <Charts />
      </div>
    </div>
  );
}
