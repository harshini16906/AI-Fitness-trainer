import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SecurityCard() {
  const [twoFA, setTwoFA] = useState(true);

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Security Center</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Protect account access</h3>
            </div>
            <div className="rounded-3xl bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-200">High Security</div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm font-semibold text-white">Change Password</p>
              <p className="mt-2 text-sm text-slate-400">Use a strong password and update it regularly for better protection.</p>
              <button className="mt-4 rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Update Password</button>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">Two-Factor Authentication</p>
                  <p className="mt-2 text-sm text-slate-400">Add an extra layer of login security for your account.</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" checked={twoFA} onChange={() => setTwoFA((prev) => !prev)} className="peer sr-only" />
                  <div className="h-7 w-14 rounded-full bg-slate-700 transition peer-checked:bg-cyan-500"></div>
                  <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-lg transition peer-checked:translate-x-7"></div>
                </label>
              </div>
              <button className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10">Enable 2FA</button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Login Sessions</p>
            <h4 className="mt-3 text-xl font-semibold text-white">Active devices</h4>
            <div className="mt-4 space-y-3">
              {[
                { label: 'Chrome on Windows', state: 'This device', time: 'Online' },
                { label: 'Safari on iPhone', state: 'Recent', time: '2h ago' },
                { label: 'App on Android', state: 'Recent', time: '5h ago' },
              ].map((session) => (
                <div key={session.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                  <div>
                    <p className="font-semibold text-white">{session.label}</p>
                    <p className="text-sm text-slate-400">{session.state}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{session.time}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-slate-950">Sign Out All Devices</button>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Biometrics</p>
            <h4 className="mt-3 text-xl font-semibold text-white">Face ID & fingerprint</h4>
            <p className="mt-2 text-sm text-slate-400">Your device biometric options are ready to enable once backend support is connected.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Face ID', 'Fingerprint'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="font-semibold text-white">{item}</p>
                  <p className="mt-2 text-sm text-slate-400">Placeholder availability</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
