import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { PaperCard } from '../components/PaperCard';
import { useForceAuth } from '../hooks/useForceAuth';
import { fetcher } from '../lib/fetcher';

export function Edit() {
  const { loading } = useForceAuth({
    redirectTo: '/signin'
  });

  const { data } = useSWR('/api/papers', fetcher);

  if (loading) return <p>Loading...</p>;
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
        <div className="flex flex-col w-full max-w-2xl">
          {data.map((paper: any) => (
            <PaperCard paper={paper} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Edit;
