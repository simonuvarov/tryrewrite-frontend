import { usePaper } from '../hooks/usePaper';

interface StatsProps {
  data?: any;
}

export const Stats = (props: StatsProps) => {
  const { bands, issues } = usePaper();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Band: {bands.overall}</h1>
      <div className="mt-5">
        <h2 className="font-medium text-lg">Task Achivement: {bands.ta}</h2>
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Coherence and Cohesion: {bands.cc}
        </h2>
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Lexical Resource: {bands.lr}
        </h2>
      </div>
      <div>
        <h2 className="font-medium text-lg mt-6">
          Grammatical Range and Accuracy: {bands.gr}
        </h2>
      </div>
      <pre>{JSON.stringify(issues, null, 2)}</pre>
    </div>
  );
};
