// Premium landing page for the AI Fitness Trainer product.
import { motion } from 'framer-motion';
import { FiActivity, FiArrowRight, FiCpu, FiHeart, FiPlay, FiShield, FiZap } from 'react-icons/fi';
import Background from '../../components/Background';
import Accordion from '../../components/Accordion';
import SectionTitle from '../../components/SectionTitle';
import StatCard from '../../components/StatCard';
import TestimonialCard from '../../components/TestimonialCard';

const features = [
  {
    icon: FiCpu,
    title: 'AI Pose Detection',
    description: 'Real-time movement analysis for posture correction and performance coaching.',
  },
  {
    icon: FiZap,
    title: 'Rep Counter',
    description: 'Automatic counting and tempo tracking for frictionless training sessions.',
  },
  {
    icon: FiActivity,
    title: 'Workout Planner',
    description: 'Intelligent plans tailored to goals, recovery, and session intensity.',
  },
  {
    icon: FiHeart,
    title: 'Nutrition Assistant',
    description: 'Daily guidance built around recovery, energy, and long-term consistency.',
  },
  {
    icon: FiShield,
    title: 'Performance Analytics',
    description: 'Monitor progress with elegant dashboards and clear milestone summaries.',
  },
  {
    icon: FiActivity,
    title: 'Personal AI Coach',
    description: 'On-demand coaching that feels calm, capable, and deeply contextual.',
  },
];

const steps = ['Create Account', 'Select Workout', 'Start AI Training', 'Track Progress'];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-4 shadow-[0_0_120px_rgba(59,130,246,0.12)] backdrop-blur-xl sm:p-6 lg:p-8">
      <Background />

      <section className="relative grid items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Train Smarter. Move Better. Powered by Artificial Intelligence.
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Train Smarter
            <br />
            with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Experience the future of fitness with real-time AI posture detection, automatic repetition counting, personalized workout planning, nutrition guidance, and intelligent progress analytics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#features" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-medium text-slate-950 transition">
              <FiActivity /> Start Training
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#preview" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200">
              <FiPlay /> Watch Demo
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_80px_rgba(59,130,246,0.16)] backdrop-blur-2xl">
            <div className="relative h-[480px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),linear-gradient(140deg,#020617,#0f172a)] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="absolute left-6 top-6 h-16 w-16 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
              <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full border border-emerald-400/30 bg-emerald-400/10" />
              <div className="absolute inset-x-6 top-24 h-44 rounded-full border border-white/10" />

              <motion.div animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-16 left-1/2 h-56 w-44 -translate-x-1/2 rounded-[3rem] border border-cyan-400/30 bg-gradient-to-b from-slate-200/90 to-slate-700/90 shadow-[0_0_80px_rgba(56,189,248,0.2)]" />
              <motion.div animate={{ y: [0, 10, 0], x: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-8 top-20 rounded-[1.25rem] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Calories</p>
                <p className="mt-2 text-xl font-semibold text-white">425 kcal</p>
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-8 top-24 rounded-[1.25rem] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">AI Coach</p>
                <p className="mt-2 text-xl font-semibold text-cyan-300">Online</p>
              </motion.div>
              <motion.div animate={{ y: [0, 12, 0], x: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-24 left-8 rounded-[1.25rem] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Progress</p>
                <p className="mt-2 text-xl font-semibold text-emerald-300">92%</p>
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0], x: [0, -6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-8 right-12 rounded-[1.25rem] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pose Detection</p>
                <p className="mt-2 text-xl font-semibold text-fuchsia-300">Active</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle eyebrow="Features" title="Everything you need to train with confidence" description="A premium AI experience designed for athletes, beginners, and everyone in between." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-cyan-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-400">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard value="25" label="Workouts Completed" suffix="K+" />
          <StatCard value="99" label="Pose Accuracy" suffix="%" />
          <StatCard value="24" label="AI Coach" suffix="/7" />
          <StatCard value="100" label="Workout Programs" suffix="+" />
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle eyebrow="How it works" title="A seamless journey from setup to progress" description="Designed to be extraordinarily simple from the first tap to every milestone after." />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div key={step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.1 }} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6 text-center backdrop-blur-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-lg font-semibold text-cyan-300">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">A premium step that feels effortless and intuitive from the beginning.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="preview" className="relative px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle eyebrow="Product preview" title="A dashboard experience built to impress" description="Modern analytics, polished cards, and a calm interface that scales from mobile to desktop." />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_80px_rgba(59,130,246,0.14)] backdrop-blur-xl lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Weekly Report</h3>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">On Track</span>
              </div>
              <div className="mt-8 h-48 rounded-[1.25rem] border border-dashed border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10" />
            </div>
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Calories</p>
                <p className="mt-3 text-3xl font-semibold text-white">2,180</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Workout Cards</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">Upper Body Flow</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">Core Stability</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle eyebrow="Testimonials" title="Loved by ambitious people building better habits" description="The experience feels premium, motivating, and deeply human." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <TestimonialCard quote="This feels like the future of fitness coaching — calm, intelligent, and motivating." name="Maya Chen" role="Product Designer" />
          <TestimonialCard quote="The visual feedback makes every session feel more intentional and rewarding." name="Jordan Blake" role="Runner" />
          <TestimonialCard quote="It makes training feel personal without becoming overwhelming." name="Sofia Alvarez" role="Entrepreneur" />
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Questions, answered cleanly" description="A calm, transparent experience built to support your next step." />
        <div className="mt-12 mx-auto max-w-3xl">
          <Accordion />
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 via-slate-900/90 to-emerald-500/15 p-8 text-center shadow-[0_0_80px_rgba(59,130,246,0.16)] backdrop-blur-xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Ready to begin</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Your personal AI fitness coach is ready.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">Step into a more intelligent way of training—beautifully designed, deeply personalized, and built to keep you moving.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="/register" className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-medium text-slate-950">Start Free</motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#features" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400/40">Learn More</motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
