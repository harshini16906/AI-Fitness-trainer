import { motion } from 'framer-motion';

export default function MotivationCard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-white/10 p-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
      <h4 className="text-sm font-semibold text-white">Daily Motivation</h4>
      <p className="mt-2 text-sm text-white/90">Great job! You're only two workouts away from your weekly goal. Stay consistent!</p>
    </motion.div>
  );
}
