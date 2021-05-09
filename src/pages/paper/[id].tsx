import { Transition } from '@headlessui/react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import BodyEditor from '../../components/editor/BodyEditor';
import { QuestionEditor } from '../../components/editor/QuestionEditor';
import { Sidebar } from '../../components/Sidebar';
import { Spinner } from '../../components/Spinner';
import useDebounce from '../../hooks/useDebounce';
import { useForceAuth } from '../../hooks/useForceAuth';
import paperService from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { useGraderResultStore } from '../../stores/useGradeResultStore';
import { usePaperStore } from '../../stores/usePaperStore';

export function Edit() {
  const { isAuthenticating, isAuthenticated } = useForceAuth({
    redirectTo: '/signin'
  });

  const { toggleShowing, isShowing } = useAssistantStore();

  const router = useRouter();
  const { id } = router.query;
  const { paper, setPaper, undefinePaper } = usePaperStore();

  const { setIssues, setBands } = useGraderResultStore();

  useEffect(() => {
    if (router.isReady && isAuthenticated) {
      paperService.getPaper(id as string).then(r => {
        setPaper(r.data);
      });
    }
    return () => {
      undefinePaper();
      setIssues(null);
    }; // clear paper on editor exit
  }, [router.isReady, isAuthenticated]);

  const debouncedPaperValue = useDebounce(paper, 500);

  useEffect(() => {
    if (debouncedPaperValue) {
      if (router.isReady) {
        paperService.gradePaper(id as string, debouncedPaperValue).then(r => {
          setIssues(r.data.issues);
          setBands(r.data.bands);
        });
      }
    }
  }, [debouncedPaperValue]);

  if (isAuthenticating || !paper)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="flex min-h-full px-4">
      <div className="w-full overflow-y-scroll no-scrollbar h-screen">
        <div className="max-w-3xl w-full mt-20 px-2 mx-auto">
          <QuestionEditor
            className="text-xl leading-loose font-medium text-gray-800"
            placeholder="Question..."
            value={paper?.question}
            setValue={q => setPaper({ question: q, body: paper.body })}
          />
          <BodyEditor className="min-h-full space-y-5 mt-8 text-gray-800 pb-32 text-xl leading-loose" />
        </div>
      </div>
      <button
        className="absolute right-4 top-4 bg-white shadow-lg border border-gray-50 hover:bg-gray-50 text-gray-500 px-4 py-2 rounded-full text-sm outline-none focus:outline-none"
        onClick={toggleShowing}
      >
        Toggle Assistant
      </button>
      <Transition
        show={isShowing}
        enter="transition-transform duration-300"
        enterFrom="translate-x-full transform"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-0"
        leaveTo="translate-x-full transform"
      >
        <div className="w-full overflow-y-scroll no-scrollbar h-screen">
          <aside className="flex mt-20 pb-32 justify-end">
            <Sidebar />
          </aside>
        </div>
      </Transition>
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
  );
}

export default Edit;
