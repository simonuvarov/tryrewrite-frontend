import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Paper } from '../services/paper.service';

interface PaperCardProps {
  paper: Paper;
}

export const PaperCard = (props: PaperCardProps) => {
  return (
    <Link href={`/paper/${props.paper.id}`}>
      <li key={props.paper.id}>
        <div className="flex items-center justify-between px-5 py-5 transition-colors duration-75 hover:bg-gray-50 cursor-pointer">
          <div>
            <h2 className="text-gray-900 text-sm font-medium line-clamp-1">
              {props.paper.question}
            </h2>
            <p className="text-gray-700 text-sm  mt-1 line-clamp-2">
              {props.paper.body}
            </p>
          </div>
          <div>
            <ChevronRightIcon
              className="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </li>
    </Link>
  );
};
