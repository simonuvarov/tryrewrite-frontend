import { XIcon } from '@heroicons/react/solid';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import usePapers from '../hooks/usePapers';
import { Paper } from '../services/paper.service';

interface PaperCardProps {
  paper: Paper;
}

const Datetime = ({ datetime }: { datetime: Date }) => {
  return (
    <time dateTime={moment(datetime).toString()}>
      {moment(datetime).fromNow()}
    </time>
  );
};

const BandLabel = ({
  score,
  className
}: {
  score: number;
  className?: string;
}) => {
  const styles = [
    'text-xs',
    'uppercase',
    'inline-block',
    'font-medium',
    'px-2',
    'py-1',
    'rounded'
  ];

  if (className) styles.push(className);

  styles.push('bg-gray-100', 'text-gray-700');
  return (
    <div className={styles.join(' ')}>
      Band {parseFloat(score.toString()).toFixed(1)}
    </div>
  );
};

const Question = ({
  text,
  className
}: {
  text: string;
  className?: string;
}) => {
  const styles = [
    'font-medium',
    'text-lg',
    'leading-6',
    'truncate',
    'text-gray-800'
  ];
  if (className) styles.push(className);
  const isEmpty = text.length === 0;

  return (
    <header className={styles.join(' ')}>
      {isEmpty ? 'Empty question' : text}
    </header>
  );
};

const Body = ({ text, className }: { text: string; className?: string }) => {
  const styles = [
    'line-clamp-3',
    'text-base',
    'leading-6',
    'font-normal',
    'text-gray-600',
    'h-[72px]'
  ];
  if (className) styles.push(className);
  return <p className={styles.join(' ')}>{text}</p>;
};

const DeleteButton = ({
  onClick,
  show
}: {
  onClick: () => void;
  show: boolean;
}) => {
  return (
    <button
      className={`absolute p-1 -top-2 -right-2 bg-gray-300 hover:bg-gray-400 inline-flex justify-center rounded-full bg-tranparent text-sm font-medium text-gray-300 hover:text-gray-400 transition-colors ${
        !show && 'hidden'
      }`}
      onClick={onClick}
    >
      <XIcon className="text-white w-5 h-5" />
    </button>
  );
};

export const PaperCard = (props: PaperCardProps) => {
  const { deletePaper } = usePapers();
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const onDeleteHandler = () => {
    deletePaper(props.paper.id);
  };

  return (
    <article
      className="relative px-10 py-8 shadow-sm rounded-lg border border-gray-200 bg-white transition-shadow duration-250 hover:cursor-pointer hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => router.push(`/paper/${props.paper.id}`)}
    >
      <DeleteButton onClick={onDeleteHandler} show={hovered} />
      <BandLabel score={props.paper.overallBand} className="-ml-0.5" />
      <Question text={props.paper.question} className="mt-3" />
      <Body text={props.paper.body} className="mt-2" />
      <footer className="flex justify-between items-center mt-4">
        <article className="text-xs leading-4 font-normal text-gray-400 select-text">
          Updated <Datetime datetime={props.paper.updatedAt} />
          <span className="mx-1">{'•'}</span>
          Created <Datetime datetime={props.paper.createdAt} />
        </article>
      </footer>
    </article>
  );
};
