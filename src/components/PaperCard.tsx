import moment from 'moment';
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
      <li key={props.paper.id}>
        <div className="max-w-lg w-full bg-white rounded-lg shadow px-12 py-8 cursor-pointer">
          <BandLabel score={props.paper.overallBand} />
          <h2 className="w-auto font-semibold text-lg line-clamp-2 text-gray-900 mt-3">
            {props.paper.question}
          </h2>
          <p className="w-auto line-clamp-2 text-gray-700 leading-6 mt-1">
            {props.paper.body}
          </p>
          <div className="flex space-x-2 items-center mt-6">
            <p className="text-gray-400 text-xs">
              You edited <time>{moment(props.paper.updatedAt).fromNow()}</time>
            </p>
            <p className="text-gray-400 text-xs">•</p>
            <p className="text-gray-400 text-xs">
              created <time>{moment(props.paper.updatedAt).fromNow()}</time>
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
};
