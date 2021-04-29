import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { Logo } from '../components/Logo';
import { PaperCard } from '../components/PaperCard';
import { VerticalMenu } from '../components/VerticalMenu';
import { useForceAuth } from '../hooks/useForceAuth';
import paperService, { Paper } from '../services/paper.service';

export function Edit() {
  const { loading } = useForceAuth({
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
    paperService.getAllPapers().then(res => setPapers(res.data));
  }, []);

  if (loading || !papers) return <p>Loading...</p>;
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-60 flex flex-col border-r overflow-auto bg-gray-100 px-4">
        <Logo className="mt-10 px-2" />
        <VerticalMenu className="mt-12" />
      </aside>
      <main className="flex flex-grow bg-gray-50 p-10 overflow-y-auto">
        <div className="flex flex-col">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              Papers
            </h3>
            <div className="ml-4 mt-2 flex-shrink-0">
              <button
                onClick={handleNewPaperClick}
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-base rounded-md text-white bg-blue-600 hover:bg-blue-500 leading-4 focus:outline-none "
              >
                New paper
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full mt-6">
            <ul className="space-y-6">
              {papers?.map((paper: any) => (
                <PaperCard paper={paper} key={paper.id} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Edit;
