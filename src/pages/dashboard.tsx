import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { BannerBeta } from '../components/BannerBeta'
import { Button } from '../components/Button'
import Header from '../components/Header'
import { Logo } from '../components/Logo'
import { PaperCardGrid } from '../components/PaperCardGrid'
import { PaperProvider } from '../contexts/PaperContext'
import useAuth from '../hooks/useAuth'
import paperService from '../services/paper.service'

export function Edit() {
  const { user } = useAuth()

  useEffect(() => {
    if (!user) router.push('/signin')
  }, [user])

  const router = useRouter()

  const handleNewPaperClick = () => {
    paperService
      .createNewPaper()
      .then((res) => router.push(`/paper/${res.data.id}`))
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex h-screen flex-col">
        <BannerBeta />
        <Header className="bg-gray-50">
          <Logo href="/dashboard" />
          <Button
            onClick={handleNewPaperClick}
            type="primary"
            size="md"
            id="new-paper-button">
            <PencilSquareIcon className="mr-1 h-5 w-5" />
            New paper
          </Button>
        </Header>
        <main className="flex-1 bg-gray-50 py-10 px-4">
          <PaperProvider>
            <PaperCardGrid className="mx-auto max-w-[1200px]" />
          </PaperProvider>
        </main>
      </div>
    </>
  )
}

export default Edit
