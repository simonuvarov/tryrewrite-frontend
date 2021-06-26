import { Menu, Transition } from '@headlessui/react';
import { DotsHorizontalIcon, TrashIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { joinClassNames } from '../lib/joinClassNames';
import paperService, { Paper } from '../services/paper.service';

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
    'text-green-700',
    'bg-green-100',
    'text-xs',
    'uppercase',
    'inline-block',
    'font-medium',
    'px-2',
    'py-1',
    'rounded'
  ];
  if (className) styles.push(className);
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
    'text-gray-800',
    'hover:text-blue-800',
    'hover:cursor-pointer'
  ];
  if (className) styles.push(className);
  return <header className={styles.join(' ')}>{text}</header>;
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

export const PaperCard = (props: PaperCardProps) => {
  const router = useRouter();

  const onDeleteHandler = () => {
    paperService.deletePaper(props.paper.id);
  };

  return (
    <article className="pl-10 pr-8 pt-8 pb-5 shadow-sm rounded-lg border border-gray-200 bg-white transition-shadow duration-250">
      <BandLabel score={props.paper.overallBand} />
      <Question text={props.paper.question} className="mt-3" />
      <Body text={props.paper.body} className="mt-2" />
      <footer className="flex justify-between items-center mt-4">
        <article className="text-xs leading-4 font-normal text-gray-400 select-text">
          Updated <Datetime datetime={props.paper.updatedAt} />
          <span className="mx-1">{'•'}</span>
          Created <Datetime datetime={props.paper.createdAt} />
        </article>
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="inline-flex justify-center rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none p-2">
                  <DotsHorizontalIcon className="text-gray-400 w-6 h-6" />
                </Menu.Button>
              </div>

              <Transition
                show={open}
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={onDeleteHandler}
                          className={joinClassNames(
                            active ? 'bg-red-50 text-red-600' : 'text-red-600',
                            'inline-flex w-full px-4 py-2 text-sm focus:outline-none'
                          )}
                        >
                          <TrashIcon className="w-5 h-5 mr-2" />
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </footer>
    </article>
  );
};
