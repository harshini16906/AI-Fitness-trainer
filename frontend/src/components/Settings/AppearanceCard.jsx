import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AppearanceCard() {
  const [theme, setTheme] = useState('Dark');
  const [accent, setAccent] = useState('cyan');
  const [fontSize, setFontSize] = useState('Medium');
  const [layout, setLayout] = useState('Comfortable');

  const accentOptions = [
    { id: 'cyan', label: 'Blue', color: 'from-cyan-500 to-blue-500' },
    { id: 'emerald', label: 'Green', color: 'from-emerald-500 to-teal-500' },
    { id: 'purple', label: 'Purple', color: 'from-violet-500 to-fuchsia-500' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Theme Selection</p>
          <div className="mt-5 space-y-3">
            {['Dark', 'Light', 'System'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTheme(option)}
                className={`w-full rounded-3xl border px-4 py-3 text-left transition ${
                  theme === option ? 'border-cyan-400/30 bg-cyan-500/10 text-white shadow-[0_20px_60px_rgba(59,130,246,0.15)]' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-cyan-400/20 hover:bg-slate-900/80'
                }`}>
                <p className="font-semibold">{option} Mode</p>
                <p className="mt-1 text-sm text-slate-400">Use the experience that suits your mood.</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Accent Color</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {accentOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setAccent(option.id)}
                className={`flex min-w-[120px] items-center justify-between rounded-3xl px-4 py-4 text-sm font-semibold transition ${
                  accent === option.id ? 'bg-white/10 text-white border border-cyan-400/20 shadow-[0_20px_60px_rgba(59,130,246,0.12)]' : 'bg-slate-950/60 text-slate-300 border border-white/10 hover:bg-slate-900/80'
                }`}>
                <span>{option.label}</span>
                <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${option.color}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Font & Layout</p>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm font-semibold text-white">Font Size</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {['Small', 'Medium', 'Large'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFontSize(size)}
                    className={`rounded-3xl border px-4 py-3 text-sm transition ${
                      fontSize === size ? 'border-cyan-400/30 bg-cyan-500/10 text-white' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-cyan-400/20 hover:bg-slate-900/80'
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Dashboard Layout</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {['Compact', 'Comfortable'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLayout(option)}
                    className={`rounded-3xl border px-4 py-3 text-sm transition ${
                      layout === option ? 'border-cyan-400/30 bg-cyan-500/10 text-white' : 'border-white/10 bg-slate-950/50 text-slate-300 hover:border-cyan-400/20 hover:bg-slate-900/80'
                    }`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm text-slate-400">Appearance settings are preview-only. Connect the theme engine later to persist the selected UI palette across the app.</p>
      </div>
    </motion.div>
  );
}
