export default function ReminderCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
      <h4 className="text-sm font-semibold text-slate-200">Today's Reminder</h4>
      <p className="mt-2 text-sm text-slate-300">Complete your hydration goal and stretch for 5 minutes after your workout.</p>
      <div className="mt-3">
        <button className="rounded-2xl bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-900">Snooze</button>
      </div>
    </div>
  );
}
