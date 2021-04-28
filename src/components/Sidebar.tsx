import { useGraderResultStore } from '../stores/useGradeResultStore';
import { IssueCard } from './issue-card/IssueCard';

export const Sidebar = () => {
  const { issues, bands } = useGraderResultStore();

  if (!issues || !bands)
    return (
      <div className="w-full">
        <div className="flex flex-col justify-center items-center py-6">
          <span className="text-xl text-medium text-gray-500">Overall</span>
          <span className="animate-pulse  ">...</span>
        </div>
        <ul className="animate-pulse flex flex-col space-y-8 mt-5 px-12">
          <li className="px-12 py-4">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="mt-4 space-y-1">
              <h3 className="h-5 bg-gray-200 rounded w-3/4"></h3>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-64 h-5 bg-gray-200 rounded"></p>
            </div>
          </li>
          <li className="px-12 py-4">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="mt-4 space-y-1">
              <h3 className="h-5 bg-gray-200 rounded w-3/4"></h3>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-64 h-5 bg-gray-200 rounded"></p>
            </div>
          </li>
          <li className="px-12 py-4">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="mt-4 space-y-1">
              <h3 className="h-5 bg-gray-200 rounded w-3/4"></h3>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-64 h-5 bg-gray-200 rounded"></p>
            </div>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-6">
        <span className="text-xl text-medium text-gray-500">Overall</span>
        <span className="font-bold text-gray-600 text-7xl">
          {parseFloat(bands.overall.toString()).toFixed(1)}
        </span>
      </div>
      <ul className="space-y-8 mt-8 px-12">
        {issues.map(i => (
          <IssueCard issue={i} />
        ))}
      </ul>
    </div>
  );
};
