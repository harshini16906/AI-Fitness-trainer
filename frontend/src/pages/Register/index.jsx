// Premium registration page with multi-field form, validation, and animated UI.
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight, FiChrome, FiEye, FiEyeOff, FiLock, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
const goalOptions = ['Weight Loss', 'Muscle Gain', 'General Fitness', 'Improve Stamina'];
const levelOptions = ['Beginner', 'Intermediate', 'Advanced'];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    height: '',
    weight: '',
    goal: '',
    experience: '',
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Full name is required.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.';
      case 'password':
        return value.length >= 8 ? '' : 'Use at least 8 characters.';
      case 'confirmPassword':
        return value === formData.password ? '' : 'Passwords do not match.';
      case 'phone':
        return value.trim() ? '' : 'Mobile number is required.';
      case 'gender':
      case 'goal':
      case 'experience':
        return value ? '' : 'Please choose an option.';
      case 'dob':
        return value ? '' : 'Date of birth is required.';
      case 'height':
      case 'weight':
        return value ? '' : 'This field is required.';
      default:
        return '';
    }
  };

  const passwordStrength = useMemo(() => {
    const value = formData.password;
    if (!value) return { label: 'Enter a password', color: 'text-slate-400' };
    if (value.length < 8) return { label: 'Weak', color: 'text-rose-300' };
    if (value.length < 12) return { label: 'Good', color: 'text-cyan-300' };
    return { label: 'Strong', color: 'text-emerald-300' };
  }, [formData.password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'username') return;
      nextErrors[key] = validateField(key, value);
    });

    if (!acceptedTerms) nextErrors.terms = 'Please accept the terms to continue.';

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
              Start Your AI Fitness Journey Today
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              Create your account and unlock personalized workouts, real-time AI coaching, nutrition guidance, and progress tracking.
            </p>
          </div>

          <motion.div animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                <FiActivity />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Adaptive training</p>
                <p className="text-sm text-slate-400">Smart plans for every ambition</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center bg-slate-950/70 p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_70px_rgba(59,130,246,0.14)] backdrop-blur-2xl sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Create account</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Create Your Account</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Join thousands of users transforming their fitness with AI.</p>
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.fullName ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiUser className={errors.fullName ? 'text-rose-300' : 'text-slate-400'} />
                    <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Alex Carter" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                  </div>
                  {errors.fullName ? <p className="mt-2 text-sm text-rose-300">{errors.fullName}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Username</label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <FiUser className="text-slate-400" />
                    <input name="username" value={formData.username} onChange={handleChange} placeholder="alexfit" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Email Address</label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.email ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiMail className={errors.email ? 'text-rose-300' : 'text-slate-400'} />
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                  </div>
                  {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Mobile Number</label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.phone ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiPhone className={errors.phone ? 'text-rose-300' : 'text-slate-400'} />
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                  </div>
                  {errors.phone ? <p className="mt-2 text-sm text-rose-300">{errors.phone}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.password ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiLock className={errors.password ? 'text-rose-300' : 'text-slate-400'} />
                    <input name="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleChange} placeholder="Create password" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-slate-400 transition hover:text-cyan-300">
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  <p className={`mt-2 text-sm ${passwordStrength.color}`}>{passwordStrength.label}</p>
                  {errors.password ? <p className="mt-2 text-sm text-rose-300">{errors.password}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Confirm Password</label>
                  <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${errors.confirmPassword ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <FiLock className={errors.confirmPassword ? 'text-rose-300' : 'text-slate-400'} />
                    <input name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} placeholder="Repeat password" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                    <button type="button" onClick={() => setShowConfirmPassword((prev) => !prev)} className="text-slate-400 transition hover:text-cyan-300">
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.confirmPassword ? <p className="mt-2 text-sm text-rose-300">{errors.confirmPassword}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none ${errors.gender ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <option value="" className="bg-slate-900">Select gender</option>
                    {genderOptions.map((option) => <option key={option} value={option} className="bg-slate-900">{option}</option>)}
                  </select>
                  {errors.gender ? <p className="mt-2 text-sm text-rose-300">{errors.gender}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Date of Birth</label>
                  <input name="dob" type="date" value={formData.dob} onChange={handleChange} className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none ${errors.dob ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`} />
                  {errors.dob ? <p className="mt-2 text-sm text-rose-300">{errors.dob}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Height (cm)</label>
                  <input name="height" type="number" value={formData.height} onChange={handleChange} placeholder="175" className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none ${errors.height ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`} />
                  {errors.height ? <p className="mt-2 text-sm text-rose-300">{errors.height}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Weight (kg)</label>
                  <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="70" className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none ${errors.weight ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`} />
                  {errors.weight ? <p className="mt-2 text-sm text-rose-300">{errors.weight}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Fitness Goal</label>
                  <select name="goal" value={formData.goal} onChange={handleChange} className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none ${errors.goal ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <option value="" className="bg-slate-900">Select goal</option>
                    {goalOptions.map((option) => <option key={option} value={option} className="bg-slate-900">{option}</option>)}
                  </select>
                  {errors.goal ? <p className="mt-2 text-sm text-rose-300">{errors.goal}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Experience Level</label>
                  <select name="experience" value={formData.experience} onChange={handleChange} className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none ${errors.experience ? 'border-rose-400/60 bg-rose-500/10' : 'border-white/10 bg-white/5'}`}>
                    <option value="" className="bg-slate-900">Select level</option>
                    {levelOptions.map((option) => <option key={option} value={option} className="bg-slate-900">{option}</option>)}
                  </select>
                  {errors.experience ? <p className="mt-2 text-sm text-rose-300">{errors.experience}</p> : null}
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-400">
                <input type="checkbox" checked={acceptedTerms} onChange={() => setAcceptedTerms((prev) => !prev)} className="mt-1 rounded border-white/10 bg-white/5 text-cyan-400 focus:ring-cyan-400" />
                <span>I agree to the Terms & Conditions and Privacy Policy.</span>
              </label>
              {errors.terms ? <p className="text-sm text-rose-300">{errors.terms}</p> : null}

              <motion.button whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.98 }} type="submit" disabled={!acceptedTerms} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3.5 font-semibold text-slate-950 transition shadow-[0_0_30px_rgba(59,130,246,0.28)] disabled:cursor-not-allowed disabled:opacity-60">
                Create Account <FiArrowRight />
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
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-cyan-300 transition hover:text-cyan-200">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
