import { useEffect, useState } from 'react';
import Textarea from 'react-textarea-autosize';
import useDocument from '../hooks/useDocument';

const Editor = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const { document, setQuestion, setText, saving } = useDocument();

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="h-screen">
      <Textarea
        className="w-full outline-none text-xl font-medium resize-none text-gray-800 leading-8 line"
        value={document.question}
        placeholder="Paste your question here"
        onChange={e => setQuestion(e.target.value)}
      />
      <Textarea
        className="w-full outline-none mt-16 resize-none text-gray-700 text-lg leading-8"
        value={document.text}
        placeholder="Start typing your essay here. We'll autosave everything"
        onChange={e => setText(e.target.value)}
        minRows={24}
        spellCheck={false}
      />
    </div>
  );
};

export default Editor;
