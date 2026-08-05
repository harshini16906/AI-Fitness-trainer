import { motion } from 'framer-motion';

export default function MotivationCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-5 text-white shadow-[0_20px_60px_rgba(139,92,246,0.2)]">
      <h3 className="text-lg font-semibold">Daily Motivation</h3>
      <p className="mt-3 text-sm leading-6">Healthy eating is a form of self-respect. Stay consistent and your body will thank you.</p>
    </motion.div>
  );
}
