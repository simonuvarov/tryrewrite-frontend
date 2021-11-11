import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { AssistantButton } from '../../components/AssistantButton'
import { BandScore } from '../../components/BandScore'
import { Editor } from '../../components/editor'
import { IssueList } from '../../components/IssueList'
import { WordCounter } from '../../components/WordCounter'
import { EditorProvider } from '../../contexts/EditorContext'
import useAuth from '../../hooks/useAuth'
import { useAssistantVisibilityStore } from '../../stores/useAssistantVisibilityStore'

export function Edit() {
  const { isVisible } = useAssistantVisibilityStore()
  const router = useRouter()
  const { id } = router.query
  const { user } = useAuth()

  useEffect(() => {
    if (!user) router.push('/signin')
  }, [user])

  return (
    <div className="h-screen w-screen">
      <EditorProvider paperId={id as string}>
        <div className="flex h-full">
          <div className="flex flex-col justify-between py-7 pl-4">
            <button
              className="top-7 left-8 flex items-center rounded py-2 pl-4 pr-5 font-medium text-gray-400 transition-colors duration-300 hover:bg-gray-100 focus:outline-none"
              onClick={() => router.back()}>
              <ArrowLeftIcon className="mr-1 h-5 w-5" />
              Back
            </button>
            <div className="ml-4">
              <BandScore />
              <WordCounter className="mt-2" />
            </div>
          </div>
          <div className="no-scrollbar mx-auto h-full min-w-max overflow-y-scroll pl-8 pr-4 pt-24 pb-[40vh]">
            <Editor className="w-[60ch] text-xl" />
          </div>
          <IssueList
            className={`no-scrollbar flex h-full min-w-max flex-col overflow-y-scroll bg-gray-100 px-16 pt-24 pb-[40vh] ${
              !isVisible && 'hidden'
            }`}
          />
          <div
            className={`flex flex-col justify-between py-7 pr-4 ${
              isVisible && 'bg-gray-100'
            }`}>
            <AssistantButton />
          </div>
        </div>
      </EditorProvider>
    </div>
  )
}

export default Edit
