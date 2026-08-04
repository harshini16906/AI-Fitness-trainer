import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BodyMetricsCard() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-lg bg-slate-950/30 p-3 text-center">
        <div className="text-sm text-slate-400">Current Weight</div>
        <div className="mt-1 text-2xl font-bold text-white">72 kg</div>
      </div>
      <div className="rounded-lg bg-slate-950/30 p-3 text-center">
        <div className="text-sm text-slate-400">BMI</div>
        <div className="mt-1" style={{ width: 80 }}>
          <CircularProgressbar value={24} text={`24`} styles={buildStyles({ textColor: '#fff', pathColor: '#8B5CF6' })} />
        </div>
      </div>
      <div className="rounded-lg bg-slate-950/30 p-3 text-center">
        <div className="text-sm text-slate-400">Body Fat</div>
        <div className="mt-1 text-2xl font-bold text-white">18%</div>
      </div>
    </div>
  );
}
