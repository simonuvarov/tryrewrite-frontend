import { useGraderResultStore } from '../stores/useGradeResultStore';
import { OverallBand } from './Band';
import { IssueCard } from './IssueCard';

export const Sidebar = () => {
  const { issues, bands } = useGraderResultStore();

  if (!issues || !bands)
    return (
      <div className="w-full">
        <div className="animate-pulse flex flex-col space-y-8">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="w-full">
      <OverallBand score={bands.overall} />
      {issues.map(i => (
        <IssueCard issue={i} key={JSON.stringify(i.message)} />
      ))}
    </div>
  );
};
