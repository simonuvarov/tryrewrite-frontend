import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { AssistantButton } from '../../components/AssistantButton';
import { Editor } from '../../components/editor';
import { IssueList } from '../../components/IssueList';
import { ScrollArea } from '../../components/ScrollArea';
import { EditorProvider } from '../../contexts/EditorContext';
import useAuth from '../../hooks/useAuth';
import { useAssistantVisibilityStore } from '../../stores/useAssistantVisibilityStore';

export function Edit() {
  const { isVisible } = useAssistantVisibilityStore();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    if (!user) router.push('/signin');
  }, [user]);

  return (
    <div className="h-screen w-screen">
      <button
        className="absolute flex items-center top-7 left-8 text-gray-400 font-medium pl-4 pr-5 py-2 hover:bg-gray-100 rounded transition-colors duration-300 focus:outline-none"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back
      </button>
      <EditorProvider paperId={id as string}>
        <AssistantButton className="absolute right-4 top-4" />
        <div className="flex h-full">
          <ScrollArea className="overflow-y-scroll no-scrollbar h-full min-w-max px-4 mx-auto py-48">
            <Editor />
          </ScrollArea>

          <IssueList
            className={`flex flex-col py-48 pl-16 pr-24 overflow-y-scroll h-full no-scrollbar bg-gray-100 ${
              !isVisible && 'hidden'
            }`}
          />
        </div>
      </EditorProvider>
    </div>
  );
}

export default Edit;
