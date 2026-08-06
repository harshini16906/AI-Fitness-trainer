import { motion } from 'framer-motion';
import { FiEdit2, FiShare2, FiDownload, FiStar } from 'react-icons/fi';

export default function ProfileHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute -right-10 top-6 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-cyan-400/20 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                alt="Profile"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 h-11 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Premium Member</p>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Harshini Raj</h1>
              <p className="mt-2 text-sm text-slate-400">@harshini_ai · AI Fitness Enthusiast</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Member since', value: 'Jan 2024' },
              { label: 'Age', value: '29' },
              { label: 'Location', value: 'Bengaluru, India' },
              { label: 'Goal', value: 'Lean Strength' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:opacity-95">
              <FiEdit2 className="inline mr-2" /> Edit Profile
            </button>
            <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              <FiShare2 className="inline mr-2" /> Share Profile
            </button>
            <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              <FiDownload className="inline mr-2" /> Download Profile
            </button>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-cyan-500/15 bg-slate-900/70 p-6 shadow-[inset_0_0_40px_rgba(59,130,246,0.1)]">
          <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Fitness Goal</p>
              <p className="mt-3 text-2xl font-semibold text-white">Gain Strength</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-3xl bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <FiStar /> Premium
            </span>
          </div>

          <div className="mt-6 space-y-4 rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">AI Coach Summary</p>
            <p className="text-sm leading-6 text-slate-300">
              Your personalized training plan is optimizing strength and recovery. Keep the consistency high, and the AI score will rise weekly.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
