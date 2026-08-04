const notifications = [
  { title: 'Workout reminder', body: 'Your morning mobility session starts in 30 minutes.' },
  { title: 'Goal achieved', body: 'You completed 8 workouts this week.' },
  { title: 'AI recommendation', body: 'Try a lighter recovery routine tonight.' },
  { title: 'Hydration reminder', body: 'You are 1.2L away from your daily target.' },
];

export default function NotificationPanel() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Notifications</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Stay on track</h3>
        </div>
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-sm text-amber-300">4 new</div>
      </div>

      <div className="mt-5 space-y-3">
        {notifications.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-sm text-slate-400">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
