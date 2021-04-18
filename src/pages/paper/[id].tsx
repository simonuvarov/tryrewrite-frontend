import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import BodyEditor from '../../components/editor/BodyEditor';
import { QuestionEditor } from '../../components/editor/QuestionEditor';
import { Sidebar } from '../../components/Sidebar';
import useDebounce from '../../hooks/useDebounce';
import { useForceAuth } from '../../hooks/useForceAuth';
import paperService from '../../services/paper.service';
import { useBandsStore } from '../../stores/useBandScore';
import { useIssuesStore } from '../../stores/useIssuesStore';
import { usePaperStore } from '../../stores/usePaperStore';

export function Edit() {
  const { loading } = useForceAuth({
    redirectTo: '/signin'
  });

  const router = useRouter();
  const { id } = router.query;
  const { body, setBody, question, setQuestion } = usePaperStore();

  const { setIssues } = useIssuesStore();
  const { setBands } = useBandsStore();

  const debouncedEditorValue = useDebounce(body, 500);

  useEffect(() => {
    if (!id) return;
    paperService.getPaper(id as string).then(r => setBody(r.data.body));
  }, [id]);

  useEffect(() => {
    if (!id) return;
    if (body === '') return;
    paperService
      .gradePaper(id as string, {
        question: question,
        body: debouncedEditorValue
      })
      .then(r => {
        setIssues(r.data.issues);
        setBands(r.data.bands);
      });
  }, [debouncedEditorValue]);

  if (loading || !id) return <p>Loading...</p>;
  return (
    <div className="flex min-h-full">
      <div className="flex w-full justify-center overflow-y-scroll no-scrollbar h-screen">
        <div className="max-w-xl w-full mt-20">
          <div className="block focus:outline-none text-md  font-medium text-gray-700">
            <QuestionEditor
              placeholder="Question..."
              value={question}
              setValue={setQuestion}
            />
          </div>
          <div className="mt-8 text-gray-800">
            <BodyEditor />
          </div>
        </div>
      </div>
      <aside className="flex max-w-lg w-full">
        <div className="overflow-y-scroll h-screen sticky w-full no-scrollbar">
          <div className="mr-6 mt-20">
            <Sidebar />
          </div>
        </div>
      </aside>
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
