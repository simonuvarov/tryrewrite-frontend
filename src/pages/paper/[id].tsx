import { Transition } from '@headlessui/react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import BodyEditor from '../../components/editor/BodyEditor';
import { QuestionEditor } from '../../components/editor/QuestionEditor';
import { NoScrollbarContainer } from '../../components/NoScrollbar';
import { Sidebar } from '../../components/Sidebar';
import useDebounce from '../../hooks/useDebounce';
import { useForceAuth } from '../../hooks/useForceAuth';
import paperService from '../../services/paper.service';
import { useGraderResultStore } from '../../stores/useGradeResultStore';
import { usePaperStore } from '../../stores/usePaperStore';

export function Edit() {
  const { loading } = useForceAuth({
    redirectTo: '/signin'
  });

  const [showing, setShowing] = useState(true);

  const router = useRouter();
  const { id } = router.query;
  const { paper, setPaper, undefinePaper } = usePaperStore();

  const { setIssues, setBands } = useGraderResultStore();

  useEffect(() => {
    if (router.isReady) {
      paperService.getPaper(id as string).then(r => {
        setPaper(r.data);
      });
    }
    return () => {
      undefinePaper();
      setIssues(null);
    }; // clear paper on editor exit
  }, [router.isReady]);

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

  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex min-h-full">
      <div className="w-full">
        <NoScrollbarContainer>
          {paper ? (
            <div className="max-w-2xl w-full mt-20 px-2 mx-auto">
              <QuestionEditor
                className="text-lg leading-loose font-medium text-gray-800"
                placeholder="Question..."
                value={paper?.question}
                setValue={q => setPaper({ question: q, body: paper.body })}
              />
              <BodyEditor className="min-h-full space-y-5 mt-8 text-gray-800 pb-32 text-xl leading-loose" />
            </div>
          ) : (
            <p>Loading paper...</p>
          )}
        </NoScrollbarContainer>
      </div>
      <button
        className="absolute right-4 top-4 hover:bg-gray-100 text-gray-500 px-4 py-2 rounded text-sm outline-none focus:outline-none"
        onClick={() => setShowing(isShowing => !isShowing)}
      >
        Toggle Assistant
      </button>
      <Transition
        show={showing}
        enter="transition-transform duration-300"
        enterFrom="translate-x-full transform"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-0"
        leaveTo="translate-x-full transform"
      >
        <div className="">
          <NoScrollbarContainer>
            <aside className="flex mt-20 pb-32 justify-end">
              <Sidebar />
            </aside>
          </NoScrollbarContainer>
        </div>
      </Transition>
    </div>
  );
}

export default Edit;
