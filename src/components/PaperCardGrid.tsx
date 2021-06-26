import { useRouter } from 'next/dist/client/router';
import usePapers from '../hooks/usePapers';
import paperService, { Paper } from '../services/paper.service';
import { Button } from './Button';
import { PaperCard } from './PaperCard';

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

interface PaperCardGridProps {
  className?: string;
}

export const PaperCardGrid = ({ className }: PaperCardGridProps) => {
  const { papers } = usePapers();
  const router = useRouter();

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then(res => router.push(`/paper/${res.data.id}`));
  };

  const skeletons = new Array(4).fill(null).map((_, i) => {
    return <PaperCardSkeleton key={i} />;
  });

  if (!papers) return null;

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
