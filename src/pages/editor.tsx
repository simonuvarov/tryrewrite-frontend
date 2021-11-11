import { AssistantButton } from '../components/AssistantButton'
import { Editor } from '../components/editor'
import { IssueList } from '../components/IssueList'
import { WordCounter } from '../components/WordCounter'
import { EditorProvider } from '../contexts/EditorContext'
import { useAssistantVisibilityStore } from '../stores/useAssistantVisibilityStore'

export function Edit() {
  const { isVisible } = useAssistantVisibilityStore()

  return (
    <div className="h-screen w-screen">
      <EditorProvider>
        <div className="flex h-full">
          <div className="flex min-w-max flex-col justify-between py-3 pl-4">
            <div />
            <WordCounter className="w-20" />
          </div>
          <div className="no-scrollbar mx-auto h-full w-fit overflow-y-scroll pl-12 pr-8 pt-24 pb-[40vh] ">
            <Editor className="w-full min-w-[500px] max-w-[600px] text-xl" />
          </div>
          <IssueList
            className={`no-scrollbar flex h-full min-w-max flex-col overflow-y-scroll bg-gray-100 pt-24 pb-[40vh] pl-10 pr-8 ${
              !isVisible && 'hidden'
            }`}
          />
          <div
            className={`flex flex-col justify-between pt-4 pr-4 ${
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
