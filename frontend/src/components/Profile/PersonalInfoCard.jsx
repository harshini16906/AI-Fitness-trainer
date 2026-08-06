import { motion } from 'framer-motion';

const personalFields = [
  { label: 'Full Name', value: 'Harshini Raj' },
  { label: 'Email Address', value: 'harshini@example.com' },
  { label: 'Mobile Number', value: '+1 (555) 302-9112' },
  { label: 'Date of Birth', value: '12 April 1994' },
  { label: 'Gender', value: 'Female' },
  { label: 'Height', value: '171 cm' },
  { label: 'Weight', value: '63 kg' },
  { label: 'BMI', value: '21.5' },
  { label: 'Blood Group', value: 'O+' },
  { label: 'Emergency Contact', value: '+1 (555) 765-4321' },
];

export default function PersonalInfoCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Personal Information</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Your account details</h2>
        <p className="mt-2 text-sm text-slate-400">Review and keep your core profile data up to date.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {personalFields.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
            <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
          Edit Information
        </button>
        <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
          Save Changes
        </button>
      </div>
    </motion.div>
  );
}
