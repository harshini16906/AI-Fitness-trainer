// Premium AI fitness dashboard with modular cards, charts, and animated insights.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiClock, FiFire, FiHeart, FiPlay, FiTrendingUp } from 'react-icons/fi';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNavbar from '../../components/Dashboard/TopNavbar';
import StatsCard from '../../components/Dashboard/StatsCard';
import ProgressChart from '../../components/Dashboard/ProgressChart';
import GoalCard from '../../components/Dashboard/GoalCard';
import AICoachCard from '../../components/Dashboard/AICoachCard';
import NutritionCard from '../../components/Dashboard/NutritionCard';
import AchievementCard from '../../components/Dashboard/AchievementCard';
import ActivityTable from '../../components/Dashboard/ActivityTable';
import NotificationPanel from '../../components/Dashboard/NotificationPanel';

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-[calc(100vh-8rem)] rounded-[2rem] border border-white/10 p-3 sm:p-4 lg:p-5 ${darkMode ? 'bg-slate-950/50' : 'bg-slate-100/70'}`}>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-72">
          <Sidebar activeItem="Dashboard" collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((prev) => !prev)} />
        </div>

        <div className="flex-1">
          <TopNavbar onMenuToggle={() => setSidebarCollapsed((prev) => !prev)} darkMode={darkMode} onDarkModeToggle={() => setDarkMode((prev) => !prev)} />

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Welcome back</p>
                <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Welcome back, Harshini 👋</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Stay consistent today! Your AI Coach has prepared a personalized workout plan for your recovery and strength goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.button whileHover={{ scale: 1.02 }} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3 font-semibold text-slate-950">
                  <FiPlay /> Start Workout
                </motion.button>
                <motion.button whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white">
                  View Progress
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard icon={FiFire} title="Calories Burned" value="1,245 kcal" subtitle="Today’s energy output" accent="bg-gradient-to-br from-orange-500 to-amber-400" />
            <StatsCard icon={FiAward} title="Workouts Completed" value="28" subtitle="Across the last 30 days" accent="bg-gradient-to-br from-cyan-500 to-blue-500" />
            <StatsCard icon={FiClock} title="Workout Time" value="16 hrs" subtitle="Focused training time" accent="bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <StatsCard icon={FiTrendingUp} title="Current Streak" value="12 Days" subtitle="Consistency is thriving" accent="bg-gradient-to-br from-emerald-500 to-lime-500" />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Weekly progress</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Workout intensity overview</h3>
                </div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300">+18% vs last week</div>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 p-4">
                  <h4 className="text-sm font-semibold text-slate-200">Weekly Workout Progress</h4>
                  <ProgressChart type="bar" />
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 p-4">
                  <h4 className="text-sm font-semibold text-slate-200">Calories Burned Trend</h4>
                  <ProgressChart type="line" />
                </div>
              </div>
            </motion.div>

            <GoalCard />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <AICoachCard />
            <NutritionCard />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <AchievementCard />
            <NotificationPanel />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <ActivityTable />
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_55px_rgba(15,23,42,0.16)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Workout distribution</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Weekly mix</h3>
                </div>
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">Balanced split</div>
              </div>
              <div className="mt-4">
                <ProgressChart type="pie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
