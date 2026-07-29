// Premium testimonial card for the landing page.
import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, name, role }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-[1.75rem] border border-white/10 bg-white/8 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-2xl"
    >
      <div className="mb-5 text-2xl text-cyan-300">★★★★★</div>
      <p className="text-lg leading-8 text-slate-300">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 font-semibold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </motion.article>
  );
}
