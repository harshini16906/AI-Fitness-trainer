export default function PersonalRecordCard() {
  const records = [
    { title: 'Longest Workout', value: '1h 45m' },
    { title: 'Most Calories', value: '820 kcal' },
    { title: 'Best Streak', value: '21 days' }
  ];
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-200">Personal Records</h4>
      <div className="mt-3 grid gap-3">
        {records.map((r,i) => (
          <div key={i} className="rounded-lg bg-slate-950/30 p-3 flex items-center justify-between">
            <div className="text-sm text-slate-300">{r.title}</div>
            <div className="text-sm font-semibold text-white">{r.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
