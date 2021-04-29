import Link from 'next/link';
import { Paper } from '../services/paper.service';

interface BandLabelProps {
  score: number;
}

export const BandLabel = (props: BandLabelProps) => {
  return (
    <div className="inline px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-600">
      BAND {parseFloat(props.score.toString()).toFixed(1)}
    </div>
  );
};

interface PaperCardProps {
  paper: Paper;
}

export const PaperCard = (props: PaperCardProps) => {
  return (
    <Link href={`/paper/${props.paper.id}`}>
      <li
        key={props.paper.id}
        className="hover:bg-gray-50 hover:cursor-pointer flex justify-between items-center pr-4"
      >
        <div className="py-3">
          <div className="font-bold max-w-lg truncate text-gray-800">
            {props.paper.question}
          </div>
          <div className="max-w-lg truncate mt-2 text-gray-600">
            {props.paper.body}
          </div>
        </div>
        <div className="font-medium text-gray-800 text-lg">
          {parseFloat(props.paper.overallBand.toString()).toFixed(1)}
        </div>
      </li>
    </Link>
  );
};
