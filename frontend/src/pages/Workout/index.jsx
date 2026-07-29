// Workout page placeholder.
import { Panel } from '../../components/Common';
import ExerciseCard from '../../components/ExerciseCard';

export default function Workout() {
  return (
    <div className="space-y-6">
      <Panel>
        <h1 className="text-3xl font-semibold text-white">Workout Studio</h1>
        <p className="mt-3 text-slate-400">A structured placeholder for workout routines and motion coaching workflows.</p>
      </Panel>
      <ExerciseCard />
    </div>
  );
}
