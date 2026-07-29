// Feature card collection placeholder for the landing experience.
const features = [
  {
    title: 'Adaptive Workouts',
    description: 'Build training sessions that respond to your goals and recovery state.',
  },
  {
    title: 'Pose & Form Guidance',
    description: 'Review movement quality through a polished visual coaching experience.',
  },
  {
    title: 'Progress Intelligence',
    description: 'See meaningful trends and milestones in one beautifully organized view.',
  },
];

export default function Features() {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-3">
      {features.map((feature) => (
        <article key={feature.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40">
          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
        </article>
      ))}
    </section>
  );
}
