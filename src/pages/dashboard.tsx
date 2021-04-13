import React from 'react';
import useSWR from 'swr';
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
      <div className="flex flex-col bg-white w-full">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default Edit;
