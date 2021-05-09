import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { Logo } from '../components/Logo';
import { PaperCardList } from '../components/PaperCardList';
import { Spinner } from '../components/Spinner';
import { VerticalMenu } from '../components/VerticalMenu';
import { useForceAuth } from '../hooks/useForceAuth';
import paperService, { Paper } from '../services/paper.service';

export function Edit() {
  const { isAuthenticating, isAuthenticated } = useForceAuth({
    redirectTo: '/signin'
  });

  const router = useRouter();

  const [papers, setPapers] = useState<Array<Paper> | undefined>();

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then(res => router.push(`/paper/${res.data.id}`));
  };

  useEffect(() => {
    if (isAuthenticated)
      paperService.getAllPapers().then(res => setPapers(res.data));
  }, [isAuthenticated]);

  if (isAuthenticating || !papers)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-60 flex flex-shrink-0 flex-col border-r overflow-auto bg-gray-50 px-4">
        <Logo className="mt-10 px-2" href="/dashboard" />
        <VerticalMenu className="mt-12" />
      </aside>
      <main className="flex flex-shrink-0 flex-grow bg-white p-10 overflow-y-auto">
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Papers</h1>
            <button
              onClick={handleNewPaperClick}
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-base rounded-md text-white bg-blue-600 hover:bg-blue-500 leading-4 focus:outline-none "
            >
              New paper
            </button>
          </div>
          <PaperCardList papers={papers} />
        </div>
      </main>
    </div>
  );
}

export default Edit;
