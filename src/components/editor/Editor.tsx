import { BodyEditor, QuestionEditor } from '.';
import useEditor from '../../hooks/useEditor';

export const Editor = ({ className }: { className?: string }) => {
  const { question, setQuestion, body, setBody } = useEditor();

  return (
    <div className={className}>
      <QuestionEditor
        className="w-full text-xl leading-loose font-medium text-gray-800"
        placeholder="Question..."
        value={question}
        onChange={setQuestion}
      />
      <BodyEditor
        className="w-full space-y-5 mt-8 text-gray-800 text-xl leading-loose min-h-[30vh]"
        placeholder="Start writing here..."
        value={body}
        onChange={setBody}
      />
    </div>
  );
};
