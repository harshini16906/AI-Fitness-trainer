import { useState } from 'react';

export default function FoodJournalTable() {
  const [search, setSearch] = useState('');
  const entries = [
    { meal: 'Breakfast', item: 'Berry Oatmeal Bowl', calories: 420, protein: 18, time: '08:10', status: 'Completed' },
    { meal: 'Lunch', item: 'Grilled Salmon Salad', calories: 585, protein: 42, time: '12:45', status: 'Completed' },
    { meal: 'Snack', item: 'Greek Yogurt Parfait', calories: 210, protein: 16, time: '15:30', status: 'Pending' },
    { meal: 'Dinner', item: 'Quinoa Veggie Bowl', calories: 520, protein: 22, time: '19:20', status: 'Pending' }
  ];

  const filtered = entries.filter((entry) => entry.item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Food Journal</h3>
          <p className="text-sm text-slate-400">Track every meal and nutrition detail.</p>
        </div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search meals" className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-200 outline-none placeholder:text-slate-500" />
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-200">
          <thead className="text-slate-400">
            <tr>
              <th className="py-3">Meal</th>
              <th className="py-3">Item</th>
              <th className="py-3">Calories</th>
              <th className="py-3">Protein</th>
              <th className="py-3">Time</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry, index) => (
              <tr key={index} className="border-t border-white/10">
                <td className="py-3 text-slate-100">{entry.meal}</td>
                <td className="py-3 text-slate-100">{entry.item}</td>
                <td className="py-3 text-slate-300">{entry.calories}</td>
                <td className="py-3 text-slate-300">{entry.protein}g</td>
                <td className="py-3 text-slate-300">{entry.time}</td>
                <td className="py-3"><span className={`rounded-full px-3 py-1 text-xs ${entry.status === 'Completed' ? 'bg-emerald-500 text-slate-900' : 'bg-yellow-500 text-slate-950'}`}>{entry.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
        <span>Showing {filtered.length} entries</span>
        <div className="flex items-center gap-2">
          <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Sort</button>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Filter</button>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Page 1</button>
        </div>
      </div>
    </div>
  );
}
