import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const options = {
  goal: ['Weight Loss', 'Muscle Gain', 'General Fitness', 'Improve Endurance'],
  duration: ['30 min', '45 min', '60 min', '75 min'],
  time: ['Morning', 'Afternoon', 'Evening', 'Night'],
  level: ['Beginner', 'Intermediate', 'Advanced'],
};

export default function FitnessPreferences() {
  const [goal, setGoal] = useState('General Fitness');
  const [days, setDays] = useState(4);
  const [duration, setDuration] = useState('45 min');
  const [time, setTime] = useState('Morning');
  const [level, setLevel] = useState('Intermediate');
  const [steps, setSteps] = useState(9000);
  const [water, setWater] = useState(2.5);
  const [calories, setCalories] = useState(2100);

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Fitness Preferences</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Your performance blueprint</h3>
        <p className="mt-2 text-sm text-slate-400">Fine-tune your workout rhythm, recovery, and daily targets.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-4 rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Primary Goal</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {options.goal.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGoal(item)}
                  className={`rounded-3xl border px-4 py-3 text-sm transition ${
                    goal === item ? 'border-cyan-400/30 bg-cyan-500/10 text-white' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-cyan-400/20 hover:bg-slate-900/80'
                  }`}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Workout Days</p>
              <input type="range" min="1" max="7" value={days} onChange={(e) => setDays(Number(e.target.value))} className="mt-4 w-full" />
              <p className="mt-2 text-sm font-semibold text-white">{days} days/week</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Workout Duration</p>
              <select value={duration} onChange={(e) => setDuration(e.target.value)} className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none">
                {options.duration.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Preferred Time</p>
              <select value={time} onChange={(e) => setTime(e.target.value)} className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none">
                {options.time.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Experience Level</p>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none">
                {options.level.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Daily Targets</p>
            <p className="mt-2 text-sm text-slate-400">Set meaningful targets that support your fitness journey.</p>
          </div>
          <div className="grid gap-4">
            <label className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-sm text-slate-400">Daily Step Goal</span>
              <input type="range" min="3000" max="15000" step="500" value={steps} onChange={(e) => setSteps(Number(e.target.value))} className="mt-4 w-full" />
              <p className="mt-2 text-sm font-semibold text-white">{steps.toLocaleString()} steps</p>
            </label>
            <label className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-sm text-slate-400">Water Intake Goal</span>
              <input type="range" min="1" max="5" step="0.25" value={water} onChange={(e) => setWater(Number(e.target.value))} className="mt-4 w-full" />
              <p className="mt-2 text-sm font-semibold text-white">{water} L</p>
            </label>
            <label className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <span className="text-sm text-slate-400">Calorie Goal</span>
              <input type="range" min="1500" max="3200" step="100" value={calories} onChange={(e) => setCalories(Number(e.target.value))} className="mt-4 w-full" />
              <p className="mt-2 text-sm font-semibold text-white">{calories} kcal</p>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
