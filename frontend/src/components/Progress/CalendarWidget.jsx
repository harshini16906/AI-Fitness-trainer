export default function CalendarWidget() {
  const days = Array.from({ length: 30 }).map((_, i) => ({ day: i+1, done: Math.random() > 0.6 }));
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-200">Weekly Calendar</h4>
      <div className="mt-3 grid grid-cols-7 gap-2">
        {days.slice(0, 28).map(d => (
          <div key={d.day} className={`h-8 w-8 rounded-md ${d.done ? 'bg-emerald-500' : 'bg-white/5'} flex items-center justify-center text-xs text-white`}>{d.day}</div>
        ))}
      </div>
    </div>
  );
}
