import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useSWR from 'swr';
import Editor from '../../../components/editor/Editor';
import Footer from '../../../components/Footer';
import { Stats } from '../../../components/Stats';
import { PaperContextProvider } from '../../../contexts/PaperContext';
import { useForceAuth } from '../../../hooks/useForceAuth';
import { fetcher } from '../../../lib/fetcher';

export function Edit() {
  const { loading } = useForceAuth({
    redirectTo: '/signin'
  });

  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? `/api/papers/${id}` : null, fetcher);

  if (loading || !id) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col bg-white w-full">
        <div className="w-full max-w-6xl mx-auto p-16 ">
          <PaperContextProvider paperId={id as string}>
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-2">
                <Editor />
              </div>
              <Stats />
            </div>
          </PaperContextProvider>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Edit;
