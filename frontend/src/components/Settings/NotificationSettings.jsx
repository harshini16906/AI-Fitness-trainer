import { useState } from 'react';
import { motion } from 'framer-motion';

const notifications = [
  { id: 'workout', label: 'Workout Reminders' },
  { id: 'nutrition', label: 'Nutrition Reminders' },
  { id: 'hydration', label: 'Hydration Alerts' },
  { id: 'aiCoach', label: 'AI Coach Tips' },
  { id: 'email', label: 'Email Notifications' },
  { id: 'push', label: 'Push Notifications' },
  { id: 'achievement', label: 'Achievement Alerts' },
  { id: 'weekly', label: 'Weekly Reports' },
];

export default function NotificationSettings() {
  const [toggles, setToggles] = useState({
    workout: true,
    nutrition: true,
    hydration: true,
    aiCoach: true,
    email: false,
    push: true,
    achievement: true,
    weekly: false,
  });

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Notification Controls</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Stay informed with smart alerts</h3>
        <p className="mt-2 text-sm text-slate-400">Keep the right reminders active to optimize your workout and recovery schedule.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-4">
            <div>
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{toggles[item.id] ? 'Enabled' : 'Disabled'}</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={toggles[item.id]}
                onChange={() => setToggles((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                className="peer sr-only"
              />
              <div className="h-8 w-14 rounded-full bg-slate-700 transition peer-checked:bg-cyan-500"></div>
              <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-lg transition peer-checked:translate-x-6"></div>
            </label>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
