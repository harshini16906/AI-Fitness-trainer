import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedValue({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const dur = 600;
    const stepTime = Math.max(10, Math.floor(dur / end || 1));
    const timer = setInterval(() => {
      start += Math.ceil(end / (dur / stepTime));
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else setDisplay(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span className="font-bold text-white">{display}{suffix}</span>;
}

export default function WorkoutStats() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <h4 className="text-sm font-semibold text-slate-200">Live Stats</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-slate-950/30 p-3 text-center">
          <div className="text-sm text-slate-400">Current Reps</div>
          <div className="mt-1 text-xl"><AnimatedValue value={12} /></div>
        </div>
        <div className="rounded-lg bg-slate-950/30 p-3 text-center">
          <div className="text-sm text-slate-400">Workout Timer</div>
          <div className="mt-1 text-xl"><AnimatedValue value={7} suffix=":15" /></div>
        </div>
        <div className="rounded-lg bg-slate-950/30 p-3 text-center">
          <div className="text-sm text-slate-400">Calories</div>
          <div className="mt-1 text-xl"><AnimatedValue value={64} suffix=" kcal" /></div>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-slate-950/30 p-3 text-center">
          <div className="text-sm text-slate-400">Heart Rate</div>
          <div className="mt-1 text-xl"><AnimatedValue value={88} suffix=" bpm" /></div>
        </div>
        <div className="rounded-lg bg-slate-950/30 p-3 text-center">
          <div className="text-sm text-slate-400">Accuracy</div>
          <div className="mt-1 text-xl"><AnimatedValue value={92} suffix=" %" /></div>
        </div>
        <div className="rounded-lg bg-slate-950/30 p-3 text-center">
          <div className="text-sm text-slate-400">Posture</div>
          <div className="mt-1 text-xl"><AnimatedValue value={83} suffix=" %" /></div>
        </div>
      </div>
    </motion.div>
  );
}
