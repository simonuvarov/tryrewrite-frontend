import { PencilAltIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { PaperCardList } from '../components/PaperCardList';
import { Spinner } from '../components/Spinner';
import { useForceAuth } from '../hooks/useForceAuth';
import paperService from '../services/paper.service';

export function Edit() {
  const { isAuthenticating } = useForceAuth({
    redirectTo: '/signin'
  });

  const router = useRouter();
  const query = useQuery('papers', paperService.getAllPapers);

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then(res => router.push(`/paper/${res.data.id}`));
  };

  if (isAuthenticating)
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      </>
    );

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <header className="flex max-w-7xl justify-between mx-auto py-6">
        <Logo />
        <Button onClick={handleNewPaperClick} type="primary" size="medium">
          <PencilAltIcon className="h-5 w-5 mr-1" />
          New paper
        </Button>
      </header>
      <main className="flex flex-col max-w-7xl mx-auto flex-shrink-0 flex-grow bg-white">
        <PaperCardList papers={query.data} />
      </main>
    </>
  );
}

export default Edit;
