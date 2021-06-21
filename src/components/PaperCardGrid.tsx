import { useRouter } from 'next/dist/client/router';
import { useQuery } from 'react-query';
import paperService, { Paper } from '../services/paper.service';
import { Button } from './Button';

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

interface PaperCardProps {
  paper: Paper;
}

const PaperCard = (props: PaperCardProps) => {
  return (
    // <Link href={`/paper/${props.paper.id}`}>
    <article className="p-4 shadow-md rounded-lg border border-gray-100 px-10 py-8 bg-white">
      <div className="text-green-700 bg-green-100 text-xs uppercase inline-block font-medium px-2 py-1 rounded">
        Band {parseFloat(props.paper.overallBand.toString()).toFixed(1)}
      </div>
      <header className="font-medium text-lg truncate text-gray-800 mt-3">
        {props.paper.question}
      </header>
      <div className="line-clamp-3 text-base leading-6 font-normal mt-2 text-gray-600">
        {props.paper.body}
      </div>
      <footer className="text-xs leading-4 font-normal text-gray-400 mt-6">
        {props.paper.createdAt}
      </footer>
    </article>
    // </Link>
  );
};

interface PaperCardGridProps {
  papers?: Array<Paper>;
  className?: string;
}

export const PaperCardGrid = ({ papers, className }: PaperCardGridProps) => {
  const query = useQuery('papers', paperService.getAllPapers);
  const router = useRouter();

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then(res => router.push(`/paper/${res.data.id}`));
  };

  const skeletons = new Array(4).fill(null).map((_, i) => {
    return <PaperCardSkeleton key={i} />;
  });

  if (papers === undefined)
    return <ul className="divide-y mt-8">{skeletons}</ul>;

  if (papers && papers.length === 0)
    return (
      <ul className="h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-xl font-medium text-gray-700">
          You don't have any papers, yet.
        </h1>
        <Button
          onClick={handleNewPaperClick}
          type="white"
          className="mt-4"
          size="md"
        >
          Write something
        </Button>
      </ul>
    );

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ${
        className || ''
      }`}
    >
      {papers
        ? papers.map((paper: Paper) => (
            <PaperCard paper={paper} key={paper.id} />
          ))
        : skeletons}
    </div>
  );
};
