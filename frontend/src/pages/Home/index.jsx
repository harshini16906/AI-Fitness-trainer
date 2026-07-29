// Landing page placeholder for the AI fitness experience.
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import { SectionTitle } from '../../components/Common';

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <SectionTitle title="Why athletes choose this platform" description="A premium foundation for personalized training and progress insights." />
      <Features />
    </div>
  );
}
