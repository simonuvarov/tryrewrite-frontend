import Link from 'next/link';
import { Paper } from '../services/paper.service';

const PaperCardSkeleton = () => {
  return (
    <li className="flex justify-between items-center animate-pulse">
      <div className="flex flex-col flex-shrink-0 py-4 px-2 max-w-lg w-full space-y-2">
        <div className="h-5 bg-gray-100 rounded w-2/3" />
        <div className="h-5 bg-gray-100 rounded w-full " />
      </div>
      <div className="h-5 bg-gray-100 rounded px-4 w-0.5" />
    </li>
  );
};

interface BandLabelProps {
  score: number;
}

const BandLabel = (props: BandLabelProps) => {
  return (
    <div className="inline px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-600">
      BAND {parseFloat(props.score.toString()).toFixed(1)}
    </div>
  );
};

interface PaperCardProps {
  paper: Paper;
}

const PaperCard = (props: PaperCardProps) => {
  return (
    <Link href={`/paper/${props.paper.id}`}>
      <li className="hover:bg-gray-50 hover:cursor-pointer flex justify-between items-center">
        <div className="flex flex-col flex-shrink-0 py-4 px-2 max-w-lg w-full">
          <div className="font-medium truncate text-gray-800">
            {props.paper.question}
          </div>
          <div className="truncate mt-2 text-gray-600">{props.paper.body}</div>
        </div>
        <div className="flex font-medium text-gray-800 px-4">
          {parseFloat(props.paper.overallBand.toString()).toFixed(1)}
        </div>
      </li>
    </Link>
  );
};

interface PaperCardListProps {
  papers?: Array<Paper>;
}

export const PaperCardList = ({ papers }: PaperCardListProps) => {
  const skeletons = new Array(4).fill(null).map((_, i) => {
    return <PaperCardSkeleton key={i} />;
  });

  return (
    <ul className="divide-y mt-8">
      {papers
        ? papers.map((paper: Paper) => (
            <PaperCard paper={paper} key={paper.id} />
          ))
        : skeletons}
    </ul>
  );
};
