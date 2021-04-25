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
        <ul className="animate-pulse flex flex-col space-y-8 mt-5">
          <li className="px-12 py-8 border border-gray-100 shadow-sm rounded-lg">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="mt-4 space-y-1">
              <h3 className="h-5 bg-gray-200 rounded w-3/4"></h3>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-64 h-5 bg-gray-200 rounded"></p>
            </div>
          </li>
          <li className="px-12 py-8 border border-gray-100 shadow-sm rounded-lg">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="mt-4 space-y-1">
              <h3 className="h-5 bg-gray-200 rounded w-3/4"></h3>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-96 h-5 bg-gray-200 rounded"></p>
              <p className=" w-64 h-5 bg-gray-200 rounded"></p>
            </div>
          </li>
          <li className="px-12 py-8 border border-gray-100 shadow-sm rounded-lg">
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
      <div className="flex flex-col justify-center items-center rounded-lg border border-gray-100 bg-gray-50 shadow-sm py-6">
        <span className="text-xl text-medium text-gray-500">Overall</span>
        <span className="ml-3 font-bold text-gray-600 text-7xl">
          {parseFloat(bands.overall.toString()).toFixed(1)}
        </span>
      </div>
      <ul className="space-y-8 mt-8">
        {issues.map(i => (
          <IssueCard issue={i} />
        ))}
      </ul>
    </div>
  );
};
