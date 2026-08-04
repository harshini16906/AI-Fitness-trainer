// Premium login page with a split-screen layout, animated visuals, and inline validation.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiArrowRight, FiLock, FiMail, FiActivity, FiChrome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateField = (name, value) => {
    if (name === 'email') {
      if (!value.trim()) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
      return '';
    }

    if (name === 'password') {
      if (!value.trim()) return 'Password is required.';
      if (value.length < 8) return 'Password must be at least 8 characters.';
      return '';
    }

    return '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
    };
    setErrors(nextErrors);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 shadow-[0_0_120px_rgba(59,130,246,0.12)] backdrop-blur-xl">
      <div className="grid min-h-[calc(100vh-8rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative hidden overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_32%),linear-gradient(135deg,#020617,#0f172a)] p-10 lg:flex lg:flex-col lg:justify-between"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <FiActivity /> AI Fitness Coach
            </div>
            <h1 className="mt-8 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
              Start your next training breakthrough.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              Personalized programs, posture intelligence, and next-level focus—all in one premium experience.
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Motivation</p>
            <p className="mt-4 text-2xl font-semibold text-white">
              “Discipline is the bridge between goals and greatness.”
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center bg-slate-950/70 p-6 sm:p-8 lg:p-10"
        >
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_70px_rgba(59,130,246,0.14)] backdrop-blur-2xl sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Welcome back</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Sign in to your account</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Continue your training journey with a calm, intelligent experience.</p>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email Address
                </label>
                <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.email ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
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

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                  Password
                </label>
                <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.password ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                  <FiLock className={errors.password ? 'text-rose-300' : 'text-slate-400'} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />
                  <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-slate-400 transition hover:text-cyan-300">
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password ? <p className="mt-2 text-sm text-rose-300">{errors.password}</p> : null}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-slate-400">
                  <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe((prev) => !prev)} className="rounded border-white/10 bg-white/5 text-cyan-400 focus:ring-cyan-400" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-cyan-300 transition hover:text-cyan-200">
                  Forgot password?
                </a>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3.5 font-semibold text-slate-950 transition shadow-[0_0_30px_rgba(59,130,246,0.28)]"
              >
                Sign In <FiArrowRight />
              </motion.button>
            </form>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <div className="h-px flex-1 bg-white/10" />
              <span>OR</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
              <FiChrome /> Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-slate-400">
              Don’t have an account?{' '}
              <Link to="/register" className="font-semibold text-cyan-300 transition hover:text-cyan-200">
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
