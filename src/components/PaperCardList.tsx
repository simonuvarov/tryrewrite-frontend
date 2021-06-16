import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
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
    <Link href={`/paper/${props.paper.id}`}>
      <li className="hover:bg-gray-50 hover:cursor-pointer flex justify-between items-center p-4">
        <div id="left" className="flex flex-col flex-shrink-0 max-w-lg w-full">
          <div className="font-medium text-lg truncate text-gray-800">
            {props.paper.question}
          </div>
          <div className="truncate text-lg mt-2 text-gray-600">
            {props.paper.body}
          </div>
        </div>
        <div id="right">
          <div className="flex font-medium text-xl text-gray-700 px-4">
            {parseFloat(props.paper.overallBand.toString()).toFixed(1)}
          </div>
        </div>
      </li>
    </Link>
  );
};

interface PaperCardListProps {
  papers?: Array<Paper>;
}

export const PaperCardList = ({ papers }: PaperCardListProps) => {
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
          size="medium"
        >
          Write something
        </Button>
      </ul>
    );

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
