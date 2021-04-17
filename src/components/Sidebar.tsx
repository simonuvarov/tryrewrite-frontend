import { useBandsStore } from '../stores/useBandScore';
import { useIssuesStore } from '../stores/useIssuesStore';
import { OverallBand } from './Band';
import { IssueCard } from './IssueCard';

export const Sidebar = () => {
  const { bands } = useBandsStore();
  const { issues } = useIssuesStore();
  return (
    <div className="w-full">
      <OverallBand score={bands.overall} />
      {issues.map(i => (
        <IssueCard issue={i} />
      ))}
    </div>
  );
};
