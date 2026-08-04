import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend } from 'recharts';
import { motion } from 'framer-motion';

const weekly = [
  { day: 'Mon', workouts: 2, calories: 320 },
  { day: 'Tue', workouts: 1, calories: 210 },
  { day: 'Wed', workouts: 2, calories: 400 },
  { day: 'Thu', workouts: 1, calories: 180 },
  { day: 'Fri', workouts: 2, calories: 360 },
  { day: 'Sat', workouts: 3, calories: 520 },
  { day: 'Sun', workouts: 0, calories: 0 }
];

const monthly = Array.from({ length: 12 }).map((_, i) => ({ month: `M${i+1}`, calories: Math.round(800 + Math.random()*1200) }));

const pie = [
  { name: 'Cardio', value: 40 },
  { name: 'Strength', value: 30 },
  { name: 'Flexibility', value: 15 },
  { name: 'Balance', value: 15 }
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#06B6D4'];

export default function AnalyticsChart() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <h4 className="text-sm font-semibold text-slate-200">Analytics</h4>
      <div className="mt-3 space-y-4">
        <div className="rounded-lg bg-slate-950/30 p-3">
          <h5 className="text-sm text-slate-300">Weekly Workout Progress</h5>
          <div style={{ width: '100%', height: 160 }}>
            <ResponsiveContainer>
              <BarChart data={weekly}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="workouts" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg bg-slate-950/30 p-3">
          <h5 className="text-sm text-slate-300">Monthly Calories Burned</h5>
          <div style={{ width: '100%', height: 160 }}>
            <ResponsiveContainer>
              <LineChart data={monthly}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="calories" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-950/30 p-3">
            <h5 className="text-sm text-slate-300">Exercise Distribution</h5>
            <div style={{ width: '100%', height: 160 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                    {pie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/30 p-3">
            <h5 className="text-sm text-slate-300">Workout Time Trend</h5>
            <div style={{ width: '100%', height: 160 }}>
              <ResponsiveContainer>
                <AreaChart data={monthly}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Area type="monotone" dataKey="calories" stroke="#8B5CF6" fill="#7c3aed33" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
