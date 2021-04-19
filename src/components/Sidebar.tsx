import { useGraderResultStore } from '../stores/useGradeResultStore';
import { OverallBand } from './Band';
import { IssueCard } from './IssueCard';

export const Sidebar = () => {
  const { issues, bands, isChecking } = useGraderResultStore();
  return (
    <div className="w-full">
      <OverallBand score={bands.overall} />
      {issues.map(i => (
        <IssueCard issue={i} key={JSON.stringify(i.message)} />
      ))}
    </div>
  );
};
