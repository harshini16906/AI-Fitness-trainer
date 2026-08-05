import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const calories = [
  { day: 'Mon', value: 1800 },
  { day: 'Tue', value: 1950 },
  { day: 'Wed', value: 1700 },
  { day: 'Thu', value: 2050 },
  { day: 'Fri', value: 1900 },
  { day: 'Sat', value: 2100 },
  { day: 'Sun', value: 1650 }
];

const water = [
  { day: 'Mon', value: 2400 },
  { day: 'Tue', value: 2600 },
  { day: 'Wed', value: 1800 },
  { day: 'Thu', value: 3000 },
  { day: 'Fri', value: 2200 },
  { day: 'Sat', value: 2800 },
  { day: 'Sun', value: 2100 }
];

const protein = [
  { day: 'Mon', value: 110 },
  { day: 'Tue', value: 95 },
  { day: 'Wed', value: 120 },
  { day: 'Thu', value: 105 },
  { day: 'Fri', value: 115 },
  { day: 'Sat', value: 130 },
  { day: 'Sun', value: 98 }
];

const macros = [
  { name: 'Protein', value: 35 },
  { name: 'Carbs', value: 40 },
  { name: 'Fats', value: 20 },
  { name: 'Fiber', value: 5 }
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#06B6D4'];

export default function NutritionChart() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-xl">
      <div className="grid gap-5">
        <div className="rounded-3xl bg-slate-950/60 p-4">
          <p className="text-sm text-slate-400">Daily Calories</p>
          <div className="mt-3 h-48">
            <ResponsiveContainer>
              <BarChart data={calories}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Water Intake</p>
            <div className="mt-3 h-40">
              <ResponsiveContainer>
                <LineChart data={water}>
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Protein Intake</p>
            <div className="mt-3 h-40">
              <ResponsiveContainer>
                <AreaChart data={protein}>
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950/60 p-4">
          <p className="text-sm text-slate-400">Macro Distribution</p>
          <div className="mt-3 h-52">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={macros} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {macros.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
