import { useGraderResultStore } from '../stores/useGradeResultStore';
import { IssueCard } from './IssueCard';

export const Sidebar = () => {
  const { issues, bands } = useGraderResultStore();

  if (!issues || !bands)
    return (
      <div className="w-full">
        <div className="flex justify-center items-center ">
          <span className="text-lg text-medium text-gray-500">
            Overall Band:
          </span>
          <span className="ml-3 text-3xl font-bold text-gray-800">0.0</span>
        </div>
        <div className="animate-pulse flex flex-col space-y-8 mt-5">
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
    <div className="">
      <div className="flex justify-center items-center">
        <span className="text-lg text-medium text-gray-500">Overall Band:</span>
        <span className="ml-3 text-3xl font-bold text-gray-800">
          {bands.overall}
        </span>
      </div>
      <ul className="space-y-8">
        {issues.map(i => (
          <IssueCard issue={i} />
        ))}
      </ul>
    </div>
  );
};
