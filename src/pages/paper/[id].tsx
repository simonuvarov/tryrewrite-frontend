import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { AssistantButton } from '../../components/AssistantButton';
import BodyEditor from '../../components/editor/BodyEditor';
import QuestionEditor from '../../components/editor/QuestionEditor';
import { IssueList } from '../../components/IssueList';
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
    <div className="h-screen">
      <EditorProvider paperId={id as string}>
        <AssistantButton className="absolute right-4 top-4" />
        <div className="flex min-h-full">
          <div
            className="flex flex-grow flex-shrink-0 mx-0 px-6 overflow-y-scroll h-screen no-scrollbar"
            id="left"
          >
            <div className="mt-20 px-2 mx-auto w-min">
              <QuestionEditor
                className="text-xl leading-loose font-medium text-gray-800"
                placeholder="Question..."
              />
              <BodyEditor className="min-h-full w-[55ch] space-y-5 mt-8 text-gray-800 pb-32 text-xl leading-loose" />
            </div>
          </div>

          {isVisible && (
            <aside className="pb-32 pl-16 pr-24 overflow-y-scroll h-screen no-scrollbar bg-gray-100">
              <IssueList className="mt-20" />
            </aside>
          )}

          <style jsx>{`
            /* Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }

            .no-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>
        </div>
      </EditorProvider>
    </div>
  );
}

export default Edit;
