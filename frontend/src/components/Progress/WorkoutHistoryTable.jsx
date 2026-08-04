import { useState } from 'react';

export default function WorkoutHistoryTable() {
  const [query, setQuery] = useState('');
  const rows = [
    { date: '2026-08-02', exercise: 'Push-ups', duration: '00:12:00', calories: 56, score: 92, status: 'Completed' },
    { date: '2026-07-31', exercise: 'Squats', duration: '00:18:00', calories: 78, score: 88, status: 'Completed' },
    { date: '2026-07-29', exercise: 'Burpees', duration: '00:08:00', calories: 62, score: 71, status: 'Missed' }
  ];

  const filtered = rows.filter(r => r.exercise.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Workout History</h4>
        <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200" />
      </div>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Exercise</th>
              <th className="py-2">Duration</th>
              <th className="py-2">Calories</th>
              <th className="py-2">Score</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="mt-2">
            {filtered.map((r, i) => (
              <tr key={i} className="border-t border-white/5">
                <td className="py-3 text-slate-100">{r.date}</td>
                <td className="py-3 text-slate-100">{r.exercise}</td>
                <td className="py-3 text-slate-300">{r.duration}</td>
                <td className="py-3 text-slate-300">{r.calories}</td>
                <td className="py-3 text-slate-300">{r.score}</td>
                <td className="py-3"><span className={`rounded-full px-3 py-1 text-xs ${r.status==='Completed' ? 'bg-emerald-500 text-slate-900' : 'bg-rose-500 text-white'}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
