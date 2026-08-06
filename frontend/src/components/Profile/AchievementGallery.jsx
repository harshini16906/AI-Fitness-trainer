import { motion } from 'framer-motion';

const achievements = [
  { emoji: '🥇', label: 'First Workout', description: 'Completed first full session', date: 'Jan 12, 2026' },
  { emoji: '🔥', label: '7-Day Streak', description: 'Worked out 7 days straight', date: 'Feb 18, 2026' },
  { emoji: '💪', label: '100 Push-ups', description: 'Reached 100 push-up milestone', date: 'Mar 09, 2026' },
  { emoji: '🏃', label: 'Cardio Champion', description: 'Completed 5 cardio sessions', date: 'Apr 03, 2026' },
  { emoji: '🥗', label: 'Healthy Eating', description: 'Followed nutrition goals 10 days', date: 'May 14, 2026' },
  { emoji: '🎯', label: 'Goal Crusher', description: 'Surpassed monthly target', date: 'Jun 28, 2026' },
];

export default function AchievementGallery() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Achievement Gallery</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Premium badges earned</h2>
        <p className="mt-2 text-sm text-slate-400">Celebrate milestones with elegant achievement cards.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -4 }}
            className="group rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-5 transition hover:border-cyan-400/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-500 text-2xl text-white shadow-lg">
                {item.emoji}
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <p className="text-sm text-slate-400">{item.date}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
