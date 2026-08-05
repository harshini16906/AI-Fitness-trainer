import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNavbar from '../../components/Dashboard/TopNavbar';
import NutritionSummaryCard from '../../components/Nutrition/NutritionSummaryCard';
import MealCard from '../../components/Nutrition/MealCard';
import MacroProgress from '../../components/Nutrition/MacroProgress';
import WaterTracker from '../../components/Nutrition/WaterTracker';
import AINutritionCoach from '../../components/Nutrition/AINutritionCoach';
import RecipeCard from '../../components/Nutrition/RecipeCard';
import GoalCard from '../../components/Nutrition/GoalCard';
import NutritionChart from '../../components/Nutrition/NutritionChart';
import AchievementBadge from '../../components/Nutrition/AchievementBadge';
import FoodJournalTable from '../../components/Nutrition/FoodJournalTable';
import MotivationCard from '../../components/Nutrition/MotivationCard';

const mealPlan = [
  { id: 'breakfast', title: 'Berry Oatmeal Bowl', calories: 420, protein: 18, carbs: 54, fat: 12, time: '12 min' },
  { id: 'lunch', title: 'Grilled Salmon Salad', calories: 585, protein: 42, carbs: 30, fat: 28, time: '20 min' },
  { id: 'dinner', title: 'Quinoa Veggie Bowl', calories: 520, protein: 22, carbs: 68, fat: 18, time: '18 min' },
  { id: 'snacks', title: 'Greek Yogurt Parfait', calories: 210, protein: 16, carbs: 28, fat: 6, time: '8 min' }
];

const recipes = [
  { id: 1, title: 'Grilled Chicken Salad', difficulty: 'Easy', time: '25 min', calories: 380, protein: 34 },
  { id: 2, title: 'Vegetable Stir Fry', difficulty: 'Medium', time: '20 min', calories: 310, protein: 12 },
  { id: 3, title: 'Oats with Fruits', difficulty: 'Easy', time: '10 min', calories: 280, protein: 10 },
  { id: 4, title: 'Protein Smoothie', difficulty: 'Easy', time: '5 min', calories: 220, protein: 20 },
  { id: 5, title: 'Quinoa Bowl', difficulty: 'Medium', time: '22 min', calories: 450, protein: 18 },
  { id: 6, title: 'Paneer Wrap', difficulty: 'Medium', time: '15 min', calories: 360, protein: 24 }
];

const badges = [
  { id: 'streak', title: 'Healthy Eating Streak', description: 'Completed 10 days of clean meals.', icon: '🥗' },
  { id: 'hydration', title: 'Hydration Hero', description: 'Reached water goal for 7 days.', icon: '💧' },
  { id: 'calorie', title: 'Calorie Goal Achieved', description: 'Met calorie target for 5 days.', icon: '🔥' },
  { id: 'protein', title: 'Protein Master', description: 'Hit protein goals consistently.', icon: '🥩' },
  { id: 'balance', title: 'Balanced Diet', description: 'Balanced macros for the week.', icon: '🍎' }
];

export default function Nutrition() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-[calc(100vh-8rem)] rounded-[1.5rem] border border-white/10 p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-slate-950/80 to-slate-900/40 shadow-[0_12px_80px_rgba(59,130,246,0.08)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-72">
          <Sidebar activeItem="Nutrition" collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((s) => !s)} />
        </div>

        <div className="flex-1">
          <TopNavbar onMenuToggle={() => setSidebarCollapsed((s) => !s)} />

          <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/40 p-6 shadow-[0_0_60px_rgba(255,255,255,0.04)] backdrop-blur-xl">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.6fr_1fr]">
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Smart Nutrition Dashboard</p>
                  <h1 className="text-3xl font-semibold text-white">Fuel your body with personalized nutrition plans powered by Artificial Intelligence.</h1>
                  <p className="max-w-2xl text-sm leading-6 text-slate-400">Track calories, macros, hydration, and recommendations through a premium AI nutrition experience designed for your healthiest self.</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20">Generate AI Meal Plan</button>
                  <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">View Weekly Diet</button>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-slate-200 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                <div className="h-72 rounded-[1.3rem] bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-slate-950/10 p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/10 ring-1 ring-white/10" />
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Nutrition AI</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">AI Meal Optimization</h2>
                  <p className="mt-3 text-sm text-slate-300">Smart recommendations and macro-balanced meals for your goals.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            <NutritionSummaryCard icon="🔥" label="Calories Consumed" value={1500} suffix=" kcal" progress={75} />
            <NutritionSummaryCard icon="🎯" label="Daily Calorie Goal" value={2000} suffix=" kcal" progress={80} />
            <NutritionSummaryCard icon="🥩" label="Protein" value={110} suffix=" g" progress={73} />
            <NutritionSummaryCard icon="🍚" label="Carbs" value={180} suffix=" g" progress={60} />
            <NutritionSummaryCard icon="🥑" label="Healthy Fats" value={60} suffix=" g" progress={67} />
            <NutritionSummaryCard icon="💧" label="Water Intake" value={1.8} suffix=" L" progress={60} />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {mealPlan.map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <MacroProgress />
                <WaterTracker />
              </div>
            </div>

            <div className="space-y-6">
              <AINutritionCoach />
              <div className="grid gap-4">
                <GoalCard title="Calories Goal" percent={75} current="1500" target="2000 kcal" />
                <GoalCard title="Protein Goal" percent={72} current="110" target="150 g" />
                <GoalCard title="Water Goal" percent={60} current="1.8" target="3 L" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-6">
              <NutritionChart />
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Healthy Recipe Recommendations</h3>
                    <p className="mt-1 text-sm text-slate-400">Eat smart with chef-crafted nutritious meals.</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <h3 className="text-lg font-semibold text-white">Nutrition Achievements</h3>
                <div className="mt-4 grid gap-3">
                  {badges.map((badge) => (
                    <AchievementBadge key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>

              <FoodJournalTable />
              <MotivationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
