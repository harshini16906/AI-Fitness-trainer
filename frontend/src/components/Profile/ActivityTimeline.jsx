import { motion } from 'framer-motion';

const timeline = [
  { icon: '✅', title: 'Completed Push-ups', description: '45 reps in a single set', time: 'Today · 08:30 AM' },
  { icon: '🔥', title: 'Burned 350 Calories', description: 'High intensity interval session', time: 'Today · 06:15 AM' },
  { icon: '💧', title: 'Water Goal Achieved', description: 'Reached 3L hydration target', time: 'Yesterday · 09:00 PM' },
  { icon: '🏆', title: 'Earned 7-Day Streak', description: 'Consistent training streak unlocked', time: 'Yesterday · 07:45 PM' },
  { icon: '📈', title: 'New Personal Record', description: 'Squat PB increased by 12kg', time: '2 days ago · 05:20 PM' },
];

export default function ActivityTimeline() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Activity Timeline</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Recent fitness moments</h2>
        <p className="mt-2 text-sm text-slate-400">Track your weekly progress through a clear activity feed.</p>
      </div>

      <div className="space-y-4">
        {timeline.map((item, idx) => (
          <motion.div key={item.title} whileHover={{ x: 6 }} className="flex gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-4 transition hover:bg-slate-900/80">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-500 text-xl text-white shadow-lg">{item.icon}</div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </div>
            <div className="text-sm text-slate-500">{item.time}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
