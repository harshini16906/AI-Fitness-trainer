// Premium forgot password page with validation, animated visuals, and success state.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight, FiHeart, FiMail, FiTarget, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({ email: '' });
  const [submitted, setSubmitted] = useState(false);

  const validateField = (value) => {
    if (!value.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
    return '';
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData((prev) => ({ ...prev, email: value }));
    setErrors((prev) => ({ ...prev, email: validateField(value) }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextError = validateField(formData.email);
    setErrors({ email: nextError });
    if (!nextError) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 shadow-[0_0_120px_rgba(59,130,246,0.12)] backdrop-blur-xl">
      <div className="grid min-h-[calc(100vh-8rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative hidden overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_32%),linear-gradient(135deg,#020617,#111827)] p-10 lg:flex lg:flex-col lg:justify-between"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <FiActivity /> AI Fitness Coach
            </div>
            <h1 className="mt-8 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
              Recover access to your training plan.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              Forgot your password? No worries, we&apos;ll help you get back to your fitness journey.
            </p>
          </div>

          <motion.div animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/10 p-3 text-fuchsia-300">
                <FiHeart />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Stay consistent</p>
                <p className="text-sm text-slate-400">Your next session is already waiting</p>
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ y: [0, -20, 0], x: [0, 16, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[14%] top-[18%] rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
              <FiZap />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0], x: [0, -18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[24%] right-[12%] rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-emerald-300">
              <FiTarget />
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center bg-slate-950/70 p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_70px_rgba(59,130,246,0.14)] backdrop-blur-2xl sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Recovery</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Forgot Password</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Enter your registered email address and we&apos;ll send you a password reset link.</p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email Address
                </label>
                <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition duration-200 focus-within:border-cyan-400/50 ${errors.email ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                  <FiMail className={errors.email ? 'text-rose-300' : 'text-slate-400'} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>
                {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
              </div>

              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-3.5 font-semibold text-slate-950 transition shadow-[0_0_30px_rgba(59,130,246,0.28)]"
              >
                Send Reset Link <FiArrowRight />
              </motion.button>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  Password reset link has been sent to your email.
                </div>
              ) : null}
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                <FiArrowRight className="rotate-180" /> Back to Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
