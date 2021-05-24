import React from 'react';
import { useAssistantStore } from '../stores/useAssistantStore';
import { usePaperStore } from '../stores/usePaperStore';
import { Logo } from './Logo';
import { Spinner } from './Spinner';

interface AssistantButtonProps {
  onClick: () => void;
  isLoading: boolean;
  issueCount: number;
  isVisible: boolean;
}

const AssistantButton = (props: AssistantButtonProps) => {
  return (
    <button
      className={`outline-none focus:outline-none rounded-lg font-semibold text-sm py-2 px-4 flex items-center transition-colors ${
        props.isVisible
          ? 'bg-gray-50 text-gray-500'
          : 'text-blue-600 bg-blue-50'
      }`}
      onClick={props.onClick}
    >
      <span>
        {props.isVisible ? 'Hide assistant' : 'Correct with assistant'}
      </span>
      {props.isLoading ? (
        <Spinner className="ml-3 h-6 w-6" />
      ) : (
        <span
          className={`ml-3 h-6 w-6 rounded-full text-xs leading-none font-semibold text-blue-50 flex items-center justify-center ${
            props.isVisible ? 'bg-gray-500' : 'bg-blue-600'
          }`}
        >
          {props.issueCount < 100 ? props.issueCount : '∞'}
        </span>
      )}
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
