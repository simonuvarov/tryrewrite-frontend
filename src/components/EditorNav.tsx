import { AnnotationIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { useAssistantStore } from '../stores/useAssistantStore';
import { usePaperStore } from '../stores/usePaperStore';
import { Logo } from './Logo';

interface AssistantButtonProps {
  onClick: () => void;
  isLoading: boolean;
  issueCount: number;
  isVisible: boolean;
}

const AssistantButton = (props: AssistantButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-white border p-3 border-gray-200 rounded-full shadow-lg focus:outline-none hover:bg-gray-50 transition-colors relative"
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

interface EditorNavProps {
  className?: string;
}
export const EditorNav = ({ className }: EditorNavProps) => {
  const { toggleVisible, isChecking, issues, isVisible } = useAssistantStore();
  const { isLoading } = usePaperStore();

  return (
    <nav
      className={`flex justify-between bg-white to-transparent pl-9 px-9 py-5 ${
        className || ''
      }`}
    >
      <Logo />
      <AssistantButton
        isLoading={isLoading || isChecking}
        onClick={toggleVisible}
        issueCount={issues.length}
        isVisible={isVisible}
      />
    </nav>
  );
};
