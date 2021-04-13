import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useSWR from 'swr';
import { useForceAuth } from '../../../hooks/useForceAuth';
import { fetcher } from '../../../lib/fetcher';

export function Edit() {
  const { loading } = useForceAuth({
    redirectTo: '/signin'
  });

  const router = useRouter();

  const { id } = router.query;
  const { data } = useSWR(id ? `/api/papers/${id}` : null, fetcher);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col bg-white w-full">
        <pre>{id}</pre>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default Edit;
