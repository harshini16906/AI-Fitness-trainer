import Sidebar from '../../components/Dashboard/Sidebar';
import TopNavbar from '../../components/Dashboard/TopNavbar';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileStatsCard from '../../components/Profile/ProfileStatsCard';
import PersonalInfoCard from '../../components/Profile/PersonalInfoCard';
import BodyMetricsCard from '../../components/Profile/BodyMetricsCard';
import GoalProgressCard from '../../components/Profile/GoalProgressCard';
import AchievementGallery from '../../components/Profile/AchievementGallery';
import AIFitnessInsights from '../../components/Profile/AIFitnessInsights';
import ActivityTimeline from '../../components/Profile/ActivityTimeline';
import MotivationCard from '../../components/Profile/MotivationCard';
import QuickActions from '../../components/Profile/QuickActions';
import WorkoutCharts from '../../components/Profile/WorkoutCharts';

const stats = [
  { icon: '🔥', title: 'Calories Burned', value: '18.4k', label: 'This month', accent: 'from-orange-500 to-amber-400' },
  { icon: '💪', title: 'Workouts Completed', value: '42', label: 'Live streak', accent: 'from-cyan-500 to-blue-500' },
  { icon: '🏆', title: 'Current Streak', value: '12d', label: 'Days active', accent: 'from-violet-500 to-fuchsia-500' },
  { icon: '⏱', title: 'Workout Hours', value: '48h', label: 'Total logged', accent: 'from-emerald-500 to-lime-500' },
  { icon: '📈', title: 'Fitness Score', value: '92', label: 'AI rating', accent: 'from-sky-500 to-cyan-500' },
  { icon: '🎯', title: 'Goals Completed', value: '16', label: 'Target wins', accent: 'from-fuchsia-500 to-violet-500' },
];

export default function Profile() {
  return (
    <div className="min-h-[calc(100vh-8rem)] rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-950/80 p-4 shadow-[0_0_80px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-72">
          <Sidebar activeItem="Profile" />
        </div>

        <div className="flex-1">
          <TopNavbar />
          <div className="space-y-6">
            <ProfileHeader />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {stats.map((item) => (
                <ProfileStatsCard key={item.title} icon={item.icon} title={item.title} value={item.value} label={item.label} accent={item.accent} />
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <PersonalInfoCard />
                <WorkoutCharts />
              </div>
              <div className="space-y-4">
                <BodyMetricsCard />
                <AIFitnessInsights />
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
              <AchievementGallery />
              <div className="space-y-4">
                <ActivityTimeline />
                <MotivationCard />
              </div>
            </div>

            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
