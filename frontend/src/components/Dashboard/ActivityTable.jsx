const activities = [
  { date: '12 Jul', exercise: 'Push-ups', duration: '25 min', calories: '180 kcal', status: 'Completed' },
  { date: '11 Jul', exercise: 'HIIT', duration: '35 min', calories: '320 kcal', status: 'Completed' },
  { date: '10 Jul', exercise: 'Yoga Flow', duration: '20 min', calories: '120 kcal', status: 'Completed' },
  { date: '09 Jul', exercise: 'Stretching', duration: '15 min', calories: '90 kcal', status: 'Planned' },
];

export default function ActivityTable() {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Recent activity</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Latest sessions</h3>
        </div>
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300">Live feed</div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Exercise</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Calories</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.date + activity.exercise} className="border-t border-white/10 bg-slate-950/30">
                <td className="px-4 py-3">{activity.date}</td>
                <td className="px-4 py-3">{activity.exercise}</td>
                <td className="px-4 py-3">{activity.duration}</td>
                <td className="px-4 py-3">{activity.calories}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs ${activity.status === 'Completed' ? 'bg-emerald-400/10 text-emerald-300' : 'bg-amber-400/10 text-amber-300'}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
