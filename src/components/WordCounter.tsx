import useEditor from '../hooks/useEditor';

export const WordCounter = ({ className }: { className?: string }) => {
  const { wordCount } = useEditor();

  if (wordCount === undefined) return null;

  return (
    <div className={`text-gray-500 font-medium ${className}`}>
      {wordCount} <span className="text-gray-400">words</span>
    </div>
  );
};
