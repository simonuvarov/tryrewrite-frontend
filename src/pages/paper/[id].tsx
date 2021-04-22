import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
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
      <div className="flex w-full">
        <NoScrollbarContainer>
          {paper ? (
            <div className="max-w-2xl w-full mt-20 px-2 mx-auto">
              <QuestionEditor
                placeholder="Question..."
                value={paper?.question}
                setValue={q => setPaper({ question: q, body: paper.body })}
              />
              <div className="mt-8 text-gray-800 pb-32">
                <BodyEditor />
              </div>
            </div>
          ) : (
            <p>Loading paper...</p>
          )}
        </NoScrollbarContainer>
      </div>
      <div className="flex bg-white px-4">
        <NoScrollbarContainer>
          <aside className="flex mt-20 pb-32 justify-end">
            <Sidebar />
          </aside>
        </NoScrollbarContainer>
      </div>
    </div>
  );
}

export default Edit;
