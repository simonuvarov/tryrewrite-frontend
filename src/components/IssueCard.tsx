import { Transition } from '@headlessui/react';
import { useState } from 'react';

export interface Issue {
  message: string;
  shortMessage: string;
  offset: number;
  length: number;
  replacements?: Array<string>;
  affects: string;
  isInline: boolean;
}

interface IssueCardProps {
  issue: Issue;
}

export const IssueCard = (props: IssueCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col justify-start  py-4 px-6 border rounded-lg shadow-sm mt-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {!open && (
        <div className="flex justify-start items-center">
          <span className="h-2 w-2 bg-green-600 rounded-full" />
          <span className="ml-3 text-sm leading-5 text-gray-800">
            {props.issue.shortMessage}
          </span>
        </div>
      )}

      {open && (
        <div className="flex justify-start items-center mb-2">
          <span className="h-2 w-2 bg-green-600 rounded-full" />
          <span className="ml-3 text-xs leading-4 text-gray-400 font-medium uppercase">
            {props.issue.affects}
          </span>
        </div>
      )}
      <Transition show={open}>
        <div>
          <span className="ml-5 block text-sm leading-5 text-gray-800">
            {props.issue.message}
          </span>
        </div>
      </Transition>
    </div>
  );
};
