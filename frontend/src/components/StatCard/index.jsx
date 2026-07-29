// Statistics card with animated value reveal and premium glassmorphism styling.
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StatCard({ value, label, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const end = Number(value);
    const duration = 1200;
    const startTime = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplayValue(Math.round(end * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-[1.75rem] border border-white/10 bg-white/8 p-8 text-center shadow-[0_0_60px_rgba(59,130,246,0.12)] backdrop-blur-2xl"
    >
      <p className="text-4xl font-semibold text-white sm:text-5xl">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
    </motion.div>
  );
}
