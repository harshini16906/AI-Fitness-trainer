import { motion } from 'framer-motion';

export default function LanguageSettings() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Language & Region</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Localization settings</h3>
        <p className="mt-2 text-sm text-slate-400">Choose how dates, units, and currency are displayed.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {[
          { label: 'Language', value: 'English (US)', options: ['English (US)', 'Spanish', 'French'] },
          { label: 'Time Zone', value: 'GMT+5:30', options: ['GMT+5:30', 'GMT+0', 'GMT-4'] },
          { label: 'Measurement Units', value: 'Kilograms / Centimeters', options: ['Kilograms / Centimeters', 'Pounds / Feet'] },
          { label: 'Date Format', value: 'DD/MM/YYYY', options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'] },
          { label: 'Time Format', value: '24h', options: ['24h', '12h'] },
          { label: 'Currency', value: 'USD', options: ['USD', 'EUR', 'GBP'] },
        ].map((field) => (
          <div key={field.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
            <p className="text-sm font-semibold text-white">{field.label}</p>
            <select className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none">
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
