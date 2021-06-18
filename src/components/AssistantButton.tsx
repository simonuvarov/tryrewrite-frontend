import { AnnotationIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';

interface AssistantButtonProps {
  className?: string;
  onClick: () => void;
  isLoading: boolean;
  issueCount: number;
  isVisible: boolean;
}
export const AssistantButton = (props: AssistantButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-white border p-3 border-gray-200 rounded-full shadow-lg focus:outline-none hover:bg-gray-50 transition transform active:scale-95 active:shadow-md ${
        props.className || 'relative'
      }`}
    >
      {props.isVisible ? (
        <XIcon className="h-6 w-6 text-gray-600" />
      ) : (
        <AnnotationIcon className="h-6 w-6 text-gray-600" />
      )}
      <div
        className={`absolute bg-red-500 rounded-full -right-1 -top-1 h-5 w-5 text-red-100 text-xs flex justify-center items-center font-semibold leading-none ${
          props.isVisible && 'hidden'
        }`}
      >
        {props.issueCount}
      </div>
    </button>
  );
};
