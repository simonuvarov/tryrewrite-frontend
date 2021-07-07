import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { AssistantButton } from '../../components/AssistantButton';
import { BandScore } from '../../components/BandScore';
import { Editor } from '../../components/editor';
import { IssueList } from '../../components/IssueList';
import { WordCounter } from '../../components/WordCounter';
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
      <EditorProvider paperId={id as string}>
        <div className="flex h-full">
          <div className="flex flex-col justify-between py-7 pl-4">
            <button
              className="flex items-center top-7 left-8 text-gray-400 font-medium pl-4 pr-5 py-2 hover:bg-gray-100 rounded transition-colors duration-300 focus:outline-none"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="h-5 w-5 mr-1" />
              Back
            </button>
            <div className="ml-4">
              <BandScore />
              <WordCounter className="mt-2" />
            </div>
          </div>
          <div className="overflow-y-scroll no-scrollbar h-full min-w-max px-4 mx-auto pt-24 pb-[40vh]">
            <Editor />
          </div>
          <IssueList
            className={`flex flex-col pt-24 pb-[40vh] px-16 overflow-y-scroll h-full min-w-max no-scrollbar bg-gray-100 ${
              !isVisible && 'hidden'
            }`}
          />
          <div
            className={`flex flex-col justify-between py-7 pr-4 ${
              isVisible && 'bg-gray-100'
            }`}
          >
            <AssistantButton />
          </div>
        </div>
      </EditorProvider>
    </div>
  );
}

export default Edit;
