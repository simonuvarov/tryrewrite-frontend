import Link from 'next/link';

interface PaperCardProps {
  paper: { id: string; question: string; body: string };
}

export const PaperCard = (props: PaperCardProps) => {
  return (
    <Link href={`/paper/${props.paper.id}`}>
      <div
        id={props.paper.id}
        className="bg-white p-12 border rounded-lg mt-4 cursor-pointer"
      >
        <h2 className="text-gray-700 text-lg font-medium line-clamp-1">
          {props.paper.question || `Empty question...`}
        </h2>
        <p className="text-gray-700 text-base mt-3 line-clamp-2">
          {props.paper.body || `Empty paper...`}
        </p>
      </div>
    </Link>
  );
};
