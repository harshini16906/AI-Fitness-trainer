import { motion } from 'framer-motion';

const devices = [
  { name: 'Smartwatch', type: '⌚', status: 'Connected', battery: '78%', sync: '5m ago' },
  { name: 'Mobile App', type: '📱', status: 'Connected', battery: '92%', sync: '1m ago' },
  { name: 'Heart Rate Monitor', type: '❤️', status: 'Disconnected', battery: 'N/A', sync: 'Offline' },
  { name: 'Fitness Band', type: '⌚', status: 'Connected', battery: '63%', sync: '12m ago' },
];

export default function ConnectedDevices() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="rounded-[1.8rem] border border-white/10 bg-slate-900/60 p-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Connected Devices</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Your fitness ecosystem</h3>
        <p className="mt-2 text-sm text-slate-400">Manage your wearable devices and mobile connections from one premium control center.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {devices.map((device) => (
          <div key={device.name} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-500 text-lg text-white shadow-lg">{device.type}</div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-white">{device.name}</p>
                <p className="text-sm text-slate-400">{device.status}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Battery</p>
                <p className="mt-2 font-semibold text-white">{device.battery}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Last Sync</p>
                <p className="mt-2 font-semibold text-white">{device.sync}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Status</p>
                <p className="mt-2 font-semibold text-white">{device.status}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10">Sync Now</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/30 hover:bg-emerald-400/10">Connect</button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-rose-400/30 hover:bg-rose-400/10">Disconnect</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
