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
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="flex flex-col w-full max-w-2xl">
        {data.map((paper: any) => (
          <PaperCard paper={paper} />
        ))}
      </div>
    </div>
  );
}

export default Edit;
