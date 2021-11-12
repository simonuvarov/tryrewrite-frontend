import useEditor from '../hooks/useEditor'

export const WordCounter = ({ className }: { className?: string }) => {
  const { wordCount } = useEditor()

  if (wordCount === undefined) return null

  return (
    <div className={`text-sm font-semibold text-gray-500 ${className}`}>
      {wordCount} <span className="text-gray-400">words</span>
    </div>
  )
}
