import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const metrics = [
  { label: 'Current Weight', value: '63 kg', progress: 72, accent: '#3B82F6' },
  { label: 'Target Weight', value: '58 kg', progress: 58, accent: '#10B981' },
  { label: 'BMI', value: '21.5', progress: 65, accent: '#8B5CF6' },
  { label: 'Body Fat', value: '18%', progress: 42, accent: '#06B6D4' },
  { label: 'Muscle Mass', value: '42%', progress: 60, accent: '#22c55e' },
];

export default function BodyMetricsCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Body Metrics</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Strength & composition</h2>
        <p className="mt-2 text-sm text-slate-400">Visualize your key fitness metrics with clean progress indicators.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
              </div>
              <div className="h-24 w-24">
                <CircularProgressbar
                  value={metric.progress}
                  text={`${metric.progress}%`}
                  styles={buildStyles({
                    textSize: '32px',
                    pathColor: metric.accent,
                    textColor: '#fff',
                    trailColor: '#334155',
                  })}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
