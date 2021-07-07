import { BodyEditor, QuestionEditor } from '.';

export const Editor = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <QuestionEditor
        className="w-full text-xl leading-loose font-medium text-gray-800"
        placeholder="Question..."
      />
      <BodyEditor
        className="w-full space-y-5 mt-8 text-gray-800 text-xl leading-loose"
        placeholder="Start writing here..."
      />
    </div>
  );
};
