import { motion } from 'framer-motion';

const achievements = [
  { title: 'First Workout', desc: 'Completed your first guided session', icon: '🏅' },
  { title: '7-Day Streak', desc: 'Maintained your streak for a full week', icon: '🔥' },
  { title: '100 Push-ups', desc: 'Reached a new personal milestone', icon: '💯' },
  { title: 'Healthy Week', desc: 'Balanced meals all week long', icon: '🥗' },
];

export default function AchievementCard() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Achievements</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Recent milestones</h3>
        </div>
        <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-2 text-sm text-fuchsia-300">4 unlocked</div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div whileHover={{ y: -3, scale: 1.01 }} key={achievement.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-2xl">{achievement.icon}</div>
            <p className="mt-3 text-sm font-semibold text-white">{achievement.title}</p>
            <p className="mt-1 text-sm text-slate-400">{achievement.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
