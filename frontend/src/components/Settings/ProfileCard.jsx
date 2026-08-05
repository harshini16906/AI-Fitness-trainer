import { motion } from 'framer-motion';

export default function ProfileCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="flex flex-col gap-6 rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Profile Overview</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Personal information</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">Edit Profile</button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10">Change Photo</button>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_1.3fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-5">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" alt="Profile" className="h-48 w-full rounded-[1.5rem] object-cover" />
            <div className="mt-5 space-y-2">
              <p className="text-sm text-slate-400">Premium Member</p>
              <h4 className="text-xl font-semibold text-white">Harshini R.</h4>
              <p className="text-sm text-slate-400">Fitness Champion • AI Enthusiast</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Full Name', value: 'Harshini Raj' },
              { label: 'Username', value: '@harshini_ai' },
              { label: 'Email', value: 'harshini@example.com' },
              { label: 'Phone Number', value: '+1 (555) 302-9112' },
              { label: 'Date of Birth', value: '12 April 1994' },
              { label: 'Gender', value: 'Female' },
              { label: 'Height', value: '171 cm' },
              { label: 'Weight', value: '63 kg' },
              { label: 'Fitness Goal', value: 'Lean Strength' },
            ].map((field) => (
              <div key={field.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{field.label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{field.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400">Save your profile updates later in a fully integrated settings flow.</p>
        <button className="rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(59,130,246,0.25)] transition hover:scale-[1.01]">Save Changes</button>
      </div>
    </motion.div>
  );
}
