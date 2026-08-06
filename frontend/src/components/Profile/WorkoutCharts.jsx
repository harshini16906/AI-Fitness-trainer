import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend } from 'recharts';
import { motion } from 'framer-motion';

const weekly = [
  { day: 'Mon', workouts: 2, calories: 320 },
  { day: 'Tue', workouts: 1, calories: 210 },
  { day: 'Wed', workouts: 2, calories: 400 },
  { day: 'Thu', workouts: 1, calories: 180 },
  { day: 'Fri', workouts: 2, calories: 360 },
  { day: 'Sat', workouts: 3, calories: 520 },
  { day: 'Sun', workouts: 1, calories: 220 },
];

const monthly = Array.from({ length: 12 }).map((_, i) => ({ month: `M${i + 1}`, calories: Math.round(900 + Math.random() * 900) }));

const pieData = [
  { name: 'Cardio', value: 38 },
  { name: 'Strength', value: 27 },
  { name: 'Flexibility', value: 18 },
  { name: 'Recovery', value: 17 },
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#06B6D4'];

export default function WorkoutCharts() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Workout Statistics</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Performance charts</h2>
        <p className="mt-2 text-sm text-slate-400">Interactive charts with your latest workout data.</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-4">
          <p className="text-sm text-slate-400">Weekly Workout Progress</p>
          <div className="mt-4 h-56 w-full">
            <ResponsiveContainer>
              <BarChart data={weekly}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="workouts" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-4">
            <p className="text-sm text-slate-400">Calories Burned</p>
            <div className="mt-4 h-44 w-full">
              <ResponsiveContainer>
                <LineChart data={monthly}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="calories" stroke="#10B981" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-4">
            <p className="text-sm text-slate-400">Monthly Activity</p>
            <div className="mt-4 h-44 w-full">
              <ResponsiveContainer>
                <AreaChart data={monthly}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Area type="monotone" dataKey="calories" stroke="#8B5CF6" fill="#7C3AED33" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-4">
          <p className="text-sm text-slate-400">Workout Distribution</p>
          <div className="mt-4 h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={4}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" wrapperStyle={{ color: '#94a3b8' }} />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
