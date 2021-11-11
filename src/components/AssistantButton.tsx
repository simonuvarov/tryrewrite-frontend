import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import useEditor from '../hooks/useEditor'
import { useAssistantVisibilityStore } from '../stores/useAssistantVisibilityStore'
import { Spinner } from './Spinner'

interface AssistantButtonProps {
  className?: string
}
export const AssistantButton = (props: AssistantButtonProps) => {
  const { isVisible, toggleVisible } = useAssistantVisibilityStore()
  const { checking } = useEditor()

  const { issues } = useEditor()
  return (
    <button
      id="assistant-button"
      onClick={toggleVisible}
      className={`rounded-full border border-gray-200 bg-white p-3 shadow-lg transition hover:bg-gray-50 focus:outline-none active:scale-95 active:shadow-md ${
        props.className || 'relative'
      }`}>
      {isVisible ? (
        <XMarkIcon className="h-6 w-6 text-gray-600" />
      ) : (
        <PencilSquareIcon className="h-6 w-6 text-gray-600" />
      )}
      <div
        className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold leading-none text-red-100 ${
          isVisible && 'hidden'
        }`}>
        {issues && !checking ? issues.length : <Spinner className="h-3 w-3" />}
      </div>
    </button>
  )
}
