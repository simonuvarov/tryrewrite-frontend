import { XMarkIcon } from '@heroicons/react/24/solid'

export const DeleteButton = ({
  onClick,
  show
}: {
  onClick: () => void
  show: boolean
}) => {
  return (
    <button
      className={`absolute -top-2 -right-2 inline-flex justify-center rounded-full border border-gray-200 bg-white p-1 text-sm font-medium shadow transition-colors hover:bg-gray-50 focus:outline-none ${
        !show && 'hidden'
      }`}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}>
      <XMarkIcon className="h-5 w-5 text-gray-400" />
    </button>
  )
}
