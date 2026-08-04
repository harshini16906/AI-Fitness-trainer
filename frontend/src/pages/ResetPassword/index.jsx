// Premium reset password page with animated visuals, strength validation, and success state.
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight, FiCheckCircle, FiEye, FiEyeOff, FiLock, FiShield, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [submitted, setSubmitted] = useState(false);

  const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  const validateField = (name, value) => {
    if (name === 'password') {
      if (!value.trim()) return 'New password is required.';
      if (!passwordRules.test(value)) return 'Use 8+ chars with uppercase, lowercase, number, and special character.';
      return '';
    }

    if (name === 'confirmPassword') {
      if (!value.trim()) return 'Please confirm your password.';
      if (value !== formData.password) return 'Passwords do not match.';
      return '';
    }

    return '';
  };

  const passwordStrength = useMemo(() => {
    const value = formData.password;
    if (!value) return { label: 'Enter a password', color: 'text-slate-400', width: 'w-0' };
    if (value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value) || !/[^A-Za-z0-9]/.test(value)) {
      return { label: 'Needs stronger rules', color: 'text-amber-300', width: 'w-2/3' };
    }
    return { label: 'Strong', color: 'text-emerald-300', width: 'w-full' };
  }, [formData.password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {
      password: validateField('password', formData.password),
      confirmPassword: validateField('confirmPassword', formData.confirmPassword),
    };
    setErrors(nextErrors);
    if (!nextErrors.password && !nextErrors.confirmPassword) {
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
          className="relative hidden overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_32%),linear-gradient(135deg,#020617,#111827)] p-10 lg:flex lg:flex-col lg:justify-between"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <FiActivity /> AI Fitness Coach
            </div>
            <h1 className="mt-8 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white lg:text-5xl">
              Create a strong password and continue your AI-powered fitness journey.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              Secure your account with a resilient password and keep your progress protected.
            </p>
          </div>

          <motion.div animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-violet-400/30 bg-violet-400/10 p-3 text-violet-300">
                <FiShield />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Protected account</p>
                <p className="text-sm text-slate-400">Your goals deserve a secure gateway</p>
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ y: [0, -18, 0], x: [0, 16, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[14%] top-[18%] rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
              <FiZap />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0], x: [0, -18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[22%] right-[12%] rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-emerald-300">
              <FiCheckCircle />
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center bg-slate-950/70 p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_70px_rgba(59,130,246,0.14)] backdrop-blur-2xl sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Secure access</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Reset Password</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Create a new password for your account.</p>
            </div>

            {!submitted ? (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                    New Password
                  </label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition duration-200 focus-within:border-cyan-400/50 ${errors.password ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiLock className={errors.password ? 'text-rose-300' : 'text-slate-400'} />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-slate-400 transition hover:text-cyan-300">
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className={`h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all ${passwordStrength.width}`} />
                  </div>
                  <p className={`mt-2 text-sm ${passwordStrength.color}`}>{passwordStrength.label}</p>
                  {errors.password ? <p className="mt-2 text-sm text-rose-300">{errors.password}</p> : null}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-200">
                    Confirm New Password
                  </label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition duration-200 focus-within:border-cyan-400/50 ${errors.confirmPassword ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiLock className={errors.confirmPassword ? 'text-rose-300' : 'text-slate-400'} />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat your password"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                    <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)} className="text-slate-400 transition hover:text-cyan-300">
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword ? (
                    <p className="mt-2 text-sm text-rose-300">Passwords do not match.</p>
                  ) : null}
                  {errors.confirmPassword ? <p className="mt-2 text-sm text-rose-300">{errors.confirmPassword}</p> : null}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-400">
                  <p className="font-medium text-slate-200">Password Tips</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Minimum 8 characters</li>
                    <li>• One uppercase letter</li>
                    <li>• One lowercase letter</li>
                    <li>• One number</li>
                    <li>• One special character</li>
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3.5 font-semibold text-slate-950 transition shadow-[0_0_30px_rgba(59,130,246,0.28)]"
                >
                  Reset Password <FiArrowRight />
                </motion.button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-[2rem] border border-emerald-400/30 bg-emerald-400/10 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/20 text-3xl text-emerald-300">
                  <FiCheckCircle />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">Your password has been reset successfully.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">You can now sign in with your new credentials.</p>
                <Link to="/login" className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3 font-semibold text-slate-950 transition">
                  Go to Login <FiArrowRight />
                </Link>
              </motion.div>
            )}

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
