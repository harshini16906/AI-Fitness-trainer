import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SettingsSidebar from '../../components/Settings/SettingsSidebar';
import ProfileCard from '../../components/Settings/ProfileCard';
import SecurityCard from '../../components/Settings/SecurityCard';
import AppearanceCard from '../../components/Settings/AppearanceCard';
import NotificationSettings from '../../components/Settings/NotificationSettings';
import FitnessPreferences from '../../components/Settings/FitnessPreferences';
import LanguageSettings from '../../components/Settings/LanguageSettings';
import ConnectedDevices from '../../components/Settings/ConnectedDevices';

const quickItems = [
  { title: 'Profile Completion', value: '87%', accent: 'from-cyan-500 to-blue-500' },
  { title: 'Security Score', value: '92', accent: 'from-emerald-500 to-teal-500' },
  { title: 'Active Devices', value: '4', accent: 'from-violet-500 to-fuchsia-500' },
];

const mobileOptions = [
  { id: 'Profile', label: 'Profile' },
  { id: 'Security', label: 'Security' },
  { id: 'Appearance', label: 'Appearance' },
  { id: 'Notifications', label: 'Notifications' },
  { id: 'Fitness', label: 'Fitness Preferences' },
  { id: 'Language', label: 'Language & Region' },
  { id: 'Devices', label: 'Connected Devices' },
  { id: 'Reports', label: 'Data & Reports' },
  { id: 'Support', label: 'Help & Support' },
  { id: 'Logout', label: 'Logout' },
];

export default function Settings() {
  const [selected, setSelected] = useState('Profile');

  const activeSection = useMemo(() => {
    switch (selected) {
      case 'Security':
        return <SecurityCard />;
      case 'Appearance':
        return <AppearanceCard />;
      case 'Notifications':
        return <NotificationSettings />;
      case 'Fitness':
        return <FitnessPreferences />;
      case 'Language':
        return <LanguageSettings />;
      case 'Devices':
        return <ConnectedDevices />;
      case 'Reports':
        return (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Data & Reports</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Insight snapshots</h3>
              <p className="mt-2 text-sm text-slate-400">Review your workout trends, performance reports, and AI recommendations in one secure location.</p>
            </div>
            <div className="grid gap-4 xl:grid-cols-3">
              {[
                { title: 'Monthly Summary', description: 'Detailed activity breakdown', value: '37 reports' },
                { title: 'Retention Score', description: 'Engagement over time', value: '88%' },
                { title: 'AI Recommendations', description: 'Next-step guidance', value: '12 updates' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
              <h4 className="text-lg font-semibold text-white">Export & share</h4>
              <p className="mt-2 text-sm text-slate-400">Create downloadable performance reports, export charts, or share insights with your coaching team.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-3xl bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 transition hover:bg-cyan-500/20">Download PDF</button>
                <button className="rounded-3xl bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">Share Report</button>
              </div>
            </div>
          </motion.div>
        );
      case 'Support':
        return (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Help & Support</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Need assistance?</h3>
              <p className="mt-2 text-sm text-slate-400">Access premium support channels, FAQs, and troubleshooting guides anytime.</p>
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
                <p className="text-sm text-slate-400">Live Chat</p>
                <p className="mt-4 text-lg font-semibold text-white">Premium support available 24/7</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
                <p className="text-sm text-slate-400">Email Support</p>
                <p className="mt-4 text-lg font-semibold text-white">support@aifitnesstrainer.com</p>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                { title: 'FAQ', detail: 'Find answers quickly' },
                { title: 'Setup Guide', detail: 'Configure your experience' },
                { title: 'Report Issue', detail: 'Get help with bugs' },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'Logout':
        return (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Logout</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Secure sign-out</h3>
              <p className="mt-2 text-sm text-slate-400">Log out of all sessions and clear active devices with one action.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm font-semibold text-white">Sign out from all active sessions</p>
              <p className="mt-2 text-sm text-slate-400">This will end your current browser session and any connected devices.</p>
              <button className="mt-5 rounded-3xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-400">Sign Out Now</button>
            </div>
          </motion.div>
        );
      default:
        return <ProfileCard />;
    }
  }, [selected]);

  return (
    <div className="min-h-[calc(100vh-8rem)] rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-950/80 p-4 shadow-[0_0_80px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-6 lg:p-8">
      <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <div>
          <div className="mb-6 rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Account Settings</p>
            <h1 className="mt-4 text-3xl font-semibold text-white">Make your AI Fitness experience yours</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">Update your profile, security, personalization, and connected devices from a premium settings workspace.</p>
          </div>

          <div className="mb-6 hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-5 lg:block">
            <SettingsSidebar selected={selected} onSelect={setSelected} />
          </div>

          <div className="grid gap-4 lg:hidden">
            <label className="block text-sm font-medium text-slate-300">Select section</label>
            <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none">
              {mobileOptions.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {quickItems.map((item) => (
              <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
                <p className="text-sm text-slate-400">{item.title}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div>{activeSection}</div>
        </div>
      </div>
    </div>
  );
}
