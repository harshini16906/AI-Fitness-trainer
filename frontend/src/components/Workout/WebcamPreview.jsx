import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiVideo, FiCircle } from 'react-icons/fi';

export default function WebcamPreview({ exercise }) {
  const [status, setStatus] = useState('Waiting');
  const [reps, setReps] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let t;
    if (status === 'Tracking') {
      t = setInterval(() => setElapsed((e) => e + 1), 1000);
    }
    return () => clearInterval(t);
  }, [status]);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/30 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 p-2 text-slate-900"><FiVideo /></div>
          <div>
            <h4 className="text-sm font-semibold text-white">Live Camera</h4>
            <p className="text-xs text-slate-400">Preview (UI placeholder) • {exercise.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1 text-slate-300"><FiCircle className="text-rose-400"/> Camera: <span className="font-semibold text-white">On</span></div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">Status: {status}</div>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="h-56 rounded-lg bg-black/40 flex items-center justify-center text-slate-500">Webcam Preview (placeholder)</div>
        <div className="rounded-lg bg-slate-950/40 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400">Current Reps</div>
              <div className="mt-1 text-2xl font-bold text-white">{reps}</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Elapsed</div>
              <div className="mt-1 text-2xl font-bold text-white">{new Date(elapsed * 1000).toISOString().substr(14,5)}</div>
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            <div className="text-sm text-slate-400">Pose Detection</div>
            <div className="rounded-md bg-white/5 p-2 text-sm text-slate-200">Placeholder — MediaPipe integration planned</div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setStatus('Ready')} className="rounded-2xl bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-900">Ready</button>
              <button onClick={() => setStatus('Tracking')} className="rounded-2xl bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-900">Start Tracking</button>
              <button onClick={() => setStatus('Completed')} className="rounded-2xl bg-rose-500 px-3 py-1 text-sm font-semibold text-slate-900">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
