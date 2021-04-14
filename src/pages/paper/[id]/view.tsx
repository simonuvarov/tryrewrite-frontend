import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import { Paper } from '../../../components/Paper';
import { useForceAuth } from '../../../hooks/useForceAuth';
import { fetcher } from '../../../lib/fetcher';

export function View() {
  const { loading } = useForceAuth({
    redirectTo: '/signin'
  });

  const router = useRouter();

  const { id } = router.query;
  console.log(router.query.id);

  const { data } = useSWR(id ? `/api/papers/${id}` : null, fetcher);
  if (loading || !data) return <p>Loading...</p>;
  return (
    <div className="flex justify-center">
      <Paper paper={data} />
    </div>
  );
}

export default View;
