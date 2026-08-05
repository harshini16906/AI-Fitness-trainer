import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNavbar from '../../components/Dashboard/TopNavbar';
import WorkoutCard from '../../components/Workout/WorkoutCard';
import ExerciseDetails from '../../components/Workout/ExerciseDetails';
import WebcamPreview from '../../components/Workout/WebcamPreview';
import WorkoutStats from '../../components/Workout/WorkoutStats';
import AICoachCard from '../../components/Workout/AICoachCard';
import RecommendedWorkoutCard from '../../components/Workout/RecommendedWorkoutCard';
import WorkoutHistoryTable from '../../components/Workout/WorkoutHistoryTable';
import AchievementCard from '../../components/Workout/AchievementCard';
import ReminderCard from '../../components/Workout/ReminderCard';
import QuickActions from '../../components/Workout/QuickActions';

const SAMPLE = [
  { id: 'pushups', name: 'Push-ups', difficulty: 'Intermediate', calories: 8, duration: '00:02:00', target: 'Chest' },
  { id: 'squats', name: 'Squats', difficulty: 'Beginner', calories: 10, duration: '00:03:00', target: 'Legs' },
  { id: 'lunges', name: 'Lunges', difficulty: 'Intermediate', calories: 9, duration: '00:02:30', target: 'Glutes' },
  { id: 'plank', name: 'Plank', difficulty: 'Advanced', calories: 6, duration: '00:01:30', target: 'Core' },
  { id: 'jumping', name: 'Jumping Jacks', difficulty: 'Beginner', calories: 12, duration: '00:02:00', target: 'Full Body' },
  { id: 'bicep', name: 'Bicep Curls', difficulty: 'Intermediate', calories: 7, duration: '00:02:30', target: 'Arms' },
  { id: 'mountain', name: 'Mountain Climbers', difficulty: 'Advanced', calories: 14, duration: '00:02:00', target: 'Full Body' },
  { id: 'burpees', name: 'Burpees', difficulty: 'Advanced', calories: 16, duration: '00:02:30', target: 'Full Body' }
];

export default function Workout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selected, setSelected] = useState(SAMPLE[0]);

  useEffect(() => {
    document.title = `${selected.name} • Workout — AI Fitness`;
  }, [selected]);

  return (
    <div className="min-h-[calc(100vh-8rem)] rounded-[1.6rem] border border-white/10 p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-slate-900/60 to-slate-800/40 shadow-[0_8px_60px_rgba(88,28,135,0.12)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-72">
          <Sidebar activeItem="Workout" collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((s) => !s)} />
        </div>

        <div className="flex-1">
          <TopNavbar onMenuToggle={() => setSidebarCollapsed((s) => !s)} />

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[1.4rem] border border-white/10 bg-slate-900/50 p-5 shadow-[0_0_50px_rgba(59,130,246,0.06)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Workout Studio</p>
                <h1 className="mt-2 text-2xl font-semibold text-white">Premium Workout</h1>
                <p className="mt-2 text-sm text-slate-400">Choose an exercise and let the AI coach guide you through a precise, safe session.</p>
              </div>
              <div className="flex gap-3">
                <QuickActions />
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SAMPLE.map((ex) => (
                  <WorkoutCard key={ex.id} exercise={ex} onSelect={() => setSelected(ex)} active={selected?.id === ex.id} />
                ))}
              </div>

              <ExerciseDetails exercise={selected} />

              <div className="mt-2 grid gap-4 lg:grid-cols-3">
                <AICoachCard />
                <ReminderCard />
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                  <h4 className="text-sm font-semibold text-slate-200">Achievements</h4>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <AchievementCard title="First Workout" subtitle="Congrats" />
                    <AchievementCard title="7-Day Streak" subtitle="Keep it up" />
                    <AchievementCard title="Cardio Champion" subtitle="High intensity" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <WebcamPreview exercise={selected} />
              <WorkoutStats />

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-slate-200">Recommended</h4>
                <div className="mt-3 flex gap-3 overflow-x-auto">
                  {SAMPLE.slice(0, 5).map((r) => (
                    <RecommendedWorkoutCard key={r.id} exercise={r} />
                  ))}
                </div>
              </div>

              <WorkoutHistoryTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
