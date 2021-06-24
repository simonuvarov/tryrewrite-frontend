import { PencilAltIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { BannerBeta } from '../components/BannerBeta';
import { Button } from '../components/Button';
import Header from '../components/Header';
import { PaperCardGrid } from '../components/PaperCardGrid';
import useAuth from '../hooks/useAuth';
import paperService from '../services/paper.service';

export function Edit() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) router.push('/signin');
  }, [user]);

  const router = useRouter();
  const query = useQuery('papers', paperService.getAllPapers);

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then(res => router.push(`/paper/${res.data.id}`));
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <BannerBeta />
      <Header className="bg-gray-50">
        <Button onClick={handleNewPaperClick} type="primary" size="md">
          <PencilAltIcon className="h-5 w-5 mr-1" />
          New paper
        </Button>
      </Header>
      <main className="h-screen bg-gray-50 pt-10 px-4">
        <PaperCardGrid papers={query.data} className="max-w-[1440px] mx-auto" />
      </main>
    </>
  );
}

export default Edit;
