import { BodyEditor, QuestionEditor } from '.'
import useEditor from '../../hooks/useEditor'

export const Editor = ({ className }: { className?: string }) => {
  const { question, setQuestion, body, setBody } = useEditor()

  return (
    <div className={className}>
      <QuestionEditor
        className="w-full text-lg font-medium leading-8 text-gray-800"
        placeholder="Question..."
        value={question}
        onChange={setQuestion}
      />
      <BodyEditor
        className="mt-8 min-h-[30vh] w-full space-y-5 text-lg leading-8 text-gray-800"
        placeholder="Start writing here..."
        value={body}
        onChange={setBody}
      />
    </div>
  )
}
