import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNavbar from '../../components/Dashboard/TopNavbar';
import ProgressSummaryCard from '../../components/Progress/ProgressSummaryCard';
import AnalyticsChart from '../../components/Progress/AnalyticsChart';
import GoalProgressCard from '../../components/Progress/GoalProgressCard';
import AchievementBadge from '../../components/Progress/AchievementBadge';
import WorkoutHistoryTable from '../../components/Progress/WorkoutHistoryTable';
import BodyMetricsCard from '../../components/Progress/BodyMetricsCard';
import CalendarWidget from '../../components/Progress/CalendarWidget';
import PersonalRecordCard from '../../components/Progress/PersonalRecordCard';
import AICoachInsights from '../../components/Progress/AICoachInsights';
import MotivationCard from '../../components/Progress/MotivationCard';

export default function Progress() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-[calc(100vh-8rem)] rounded-[1.6rem] border border-white/10 p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-slate-900/60 to-slate-800/40 shadow-[0_8px_60px_rgba(59,24,100,0.08)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-72">
          <Sidebar activeItem="Progress" collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((s) => !s)} />
        </div>

        <div className="flex-1">
          <TopNavbar onMenuToggle={() => setSidebarCollapsed((s) => !s)} />

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[1.4rem] border border-white/10 bg-slate-900/50 p-5 shadow-[0_0_50px_rgba(59,130,246,0.06)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Progress</p>
                <h1 className="mt-2 text-2xl font-semibold text-white">Your Fitness Journey</h1>
                <p className="mt-2 text-sm text-slate-400">Overview of analytics, body metrics and AI insights.</p>
              </div>
              <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.02 }} className="rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 font-semibold text-slate-900">Export Report</motion.button>
                <motion.button whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm">Share</motion.button>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            <ProgressSummaryCard icon="🔥" label="Calories" value={1245} suffix="kcal" accent="from-orange-400 to-amber-400" />
            <ProgressSummaryCard icon="💪" label="Workouts" value={28} suffix="" accent="from-cyan-400 to-blue-500" />
            <ProgressSummaryCard icon="⏱" label="Hours" value={16} suffix="h" accent="from-violet-500 to-fuchsia-500" />
            <ProgressSummaryCard icon="🏆" label="Streak" value={12} suffix=" days" accent="from-emerald-400 to-lime-400" />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-4">
              <AnalyticsChart />

              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <GoalProgressCard title="Daily Goal" percent={72} current="45 min" target="60 min" />
                <GoalProgressCard title="Weekly Goal" percent={54} current="3.8 hrs" target="7 hrs" />
                <GoalProgressCard title="Monthly Goal" percent={41} current="12 hrs" target="30 hrs" />
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <WorkoutHistoryTable />
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <BodyMetricsCard />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <PersonalRecordCard />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <AICoachInsights />
              <MotivationCard />
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-slate-200">Achievements</h4>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <AchievementBadge title="First Workout" date="2026-07-01" />
                  <AchievementBadge title="7-Day Streak" date="2026-07-25" />
                  <AchievementBadge title="Cardio Champion" date="2026-06-12" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <CalendarWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
