import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { BandCard } from '../../components/BandCard';
import BodyEditor from '../../components/editor/BodyEditor';
import QuestionEditor from '../../components/editor/QuestionEditor';
import { IssueList } from '../../components/IssueList';
import { Spinner } from '../../components/Spinner';
import useDebounce from '../../hooks/useDebounce';
import { useForceAuth } from '../../hooks/useForceAuth';
import paperService from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { usePaperStore } from '../../stores/usePaperStore';

export function Edit() {
  const { isAuthenticating, isAuthenticated } = useForceAuth({
    redirectTo: '/signin'
  });

  const {
    toggleShowing,
    isShowing,
    setIssues,
    setBands,
    bands,
    setIsResultFetching,
    hide
  } = useAssistantStore();

  const router = useRouter();
  const { id } = router.query;
  const {
    paper,
    setPaper,
    isPaperFetching: isFetching,
    setIsPaperFetching
  } = usePaperStore();

  useEffect(() => {
    if (router.isReady && isAuthenticated) {
      paperService.getPaper(id as string).then(r => {
        setPaper(r.data);
        setIsPaperFetching(false);
      });
    }
    return () => {
      setIsPaperFetching(true);
      setIsResultFetching(true);
      hide();
    }; // clear paper on editor exit
  }, [router.isReady, isAuthenticated]);

  const debouncedPaperValue = useDebounce(paper, 500);

  useEffect(() => {
    if (debouncedPaperValue && !isFetching) {
      if (router.isReady) {
        paperService.gradePaper(id as string, debouncedPaperValue).then(r => {
          setIssues(r.data.issues);
          setBands(r.data.bands);
          setIsResultFetching(false);
        });
      }
    }
  }, [debouncedPaperValue]);

  if (isAuthenticating)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="flex min-h-full">
      <button
        className="absolute right-4 top-4 bg-white shadow-lg border border-gray-50 hover:bg-gray-50 text-gray-500 px-4 py-2 rounded-full text-sm outline-none focus:outline-none"
        onClick={toggleShowing}
      >
        Toggle Assistant
      </button>
      <div
        className="flex flex-grow flex-shrink-0 px-6 overflow-y-scroll h-screen no-scrollbar"
        id="left"
      >
        <div className="max-w-3xl w-full mt-20 px-2 mx-auto">
          <QuestionEditor
            className="text-xl leading-loose font-medium text-gray-800"
            placeholder="Question..."
          />
          <BodyEditor className="min-h-full space-y-5 mt-8 text-gray-800 pb-32 text-xl leading-loose" />
        </div>
      </div>

      {isShowing && (
        <div
          className="px-8 overflow-y-scroll h-screen no-scrollbar"
          id="right"
        >
          <aside className="mt-20 pb-32">
            <BandCard band={bands?.overall} />
            <IssueList className="" />
          </aside>
        </div>
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
  );
}

export default Edit;
