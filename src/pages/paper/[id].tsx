import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import Editor from '../../components/editor/Editor';
import Footer from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import useDebounce from '../../hooks/useDebounce';
import { useForceAuth } from '../../hooks/useForceAuth';
import { fetcher } from '../../lib/fetcher';
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
  const { data } = useSWR(id ? `/api/papers/${id}` : null, fetcher);

  const { body, setBody } = usePaperStore(state => ({
    body: state.body,
    setBody: state.setBody
  }));

  const { issues, setIssues } = useIssuesStore();
  const { bands, setBands } = useBandsStore();

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
        question: 'foo',
        body: debouncedEditorValue
      })
      .then(r => {
        setIssues(r.data.issues);
        setBands(r.data.bands);
      });
  }, [debouncedEditorValue]);

  if (loading || !id) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col bg-white w-full">
        <div className="w-full max-w-6xl mx-auto p-16 ">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <Editor />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Edit;
