import Link from 'next/link';
import { Paper } from '../services/paper.service';

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
  papers: Array<Paper>;
}

export const PaperCardList = ({ papers }: PaperCardListProps) => {
  return (
    <ul className="divide-y mt-8">
      {papers.map((paper: Paper) => (
        <PaperCard paper={paper} key={paper.id} />
      ))}
    </ul>
  );
};
