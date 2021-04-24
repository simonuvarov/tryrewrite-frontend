import { ChevronDownIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PaperCard } from '../components/PaperCard';
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
    <>
      <header className="flex border-b justify-center shadow-lg z-10">
        <div className="max-w-6xl flex w-full py-2">
          <div className="w-full inline-flex items-center">
            <div className="flex justify-start flex-shrink-0">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="App Logo"
                  className="h-6 w-auto cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <nav className="w-full flex justify-end">
            <a className="inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-600">
              <span>Account</span>
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>
      </header>
      <div className="flex justify-center bg-gray-50 min-h-screen pt-10">
        <div className="flex flex-col pb-20">
          <div className="flex justify-between items-center">
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
      </div>
    </>
  );
}

export default Edit;
