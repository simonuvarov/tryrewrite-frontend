import { usePaper } from '../hooks/usePaper';
import { OverallBand } from './Band';

interface StatsProps {
  data?: any;
}

export const Stats = (props: StatsProps) => {
  const { bands, issues } = usePaper();

  return (
    <div>
      <OverallBand score={bands.overall} />
      <pre>{JSON.stringify(issues, null, 2)}</pre>
    </div>
  );
};
