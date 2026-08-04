import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const weeklyData = [
  { day: 'Mon', workouts: 4, calories: 780 },
  { day: 'Tue', workouts: 6, calories: 920 },
  { day: 'Wed', workouts: 5, calories: 860 },
  { day: 'Thu', workouts: 7, calories: 1040 },
  { day: 'Fri', workouts: 6, calories: 910 },
  { day: 'Sat', workouts: 8, calories: 1180 },
  { day: 'Sun', workouts: 5, calories: 760 },
];

const pieData = [
  { name: 'Strength', value: 35 },
  { name: 'Cardio', value: 25 },
  { name: 'Yoga', value: 20 },
  { name: 'Stretching', value: 20 },
];

const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];

export default function ProgressChart({ type = 'bar' }) {
  if (type === 'line') {
    return (
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <LineChart data={weeklyData}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line type="monotone" dataKey="calories" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'pie') {
    return (
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
              {pieData.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <BarChart data={weeklyData}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="workouts" radius={[10, 10, 4, 4]} fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
