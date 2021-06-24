import { AnnotationIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import useEditor from '../hooks/useEditor';
import { useEditorStore } from '../stores/useEditorStore';

interface AssistantButtonProps {
  className?: string;
}
export const AssistantButton = (props: AssistantButtonProps) => {
  const { isVisible, toggleVisible } = useEditorStore();

  const { issues } = useEditor();
  return (
    <button
      onClick={toggleVisible}
      className={`bg-white border p-3 border-gray-200 rounded-full shadow-lg focus:outline-none hover:bg-gray-50 transition transform active:scale-95 active:shadow-md ${
        props.className || 'relative'
      }`}
    >
      {isVisible ? (
        <XIcon className="h-6 w-6 text-gray-600" />
      ) : (
        <AnnotationIcon className="h-6 w-6 text-gray-600" />
      )}
      <div
        className={`absolute bg-red-500 rounded-full -right-1 -top-1 h-5 w-5 text-red-100 text-xs flex justify-center items-center font-semibold leading-none ${
          isVisible && 'hidden'
        }`}
      >
        {issues && issues.length}
      </div>
    </button>
  );
};
