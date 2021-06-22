import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import { Paper } from '../services/paper.service';

interface PaperCardProps {
  paper: Paper;
}
export const PaperCard = (props: PaperCardProps) => {
  const router = useRouter();

  return (
    <article
      className="p-4 shadow-md rounded-lg border border-gray-100 px-10 py-8 bg-white hover:shadow-xl hover:cursor-pointer transition-shadow"
      onClick={() => {
        router.push(`/paper/${props.paper.id}`);
      }}
    >
      <div className="text-green-700 bg-green-100 text-xs uppercase inline-block font-medium px-2 py-1 rounded">
        Band {parseFloat(props.paper.overallBand.toString()).toFixed(1)}
      </div>
      <header className="font-medium text-lg truncate text-gray-800 mt-3">
        {props.paper.question}
      </header>
      <div className="line-clamp-3 text-base leading-6 font-normal mt-2 text-gray-600 h-[72px]">
        {props.paper.body}
      </div>
      <footer className="text-xs leading-4 font-normal text-gray-400 mt-6">
        Updated {moment(props.paper.updatedAt).fromNow()}
      </footer>
    </article>
  );
};
