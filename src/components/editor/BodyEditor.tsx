import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { usePaperStore } from '../../stores/usePaperStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { serialize } from './serialize';
import { useDecorate } from './useDecorate';

interface BodyEditorProps {
  className?: string;
}

const BodyEditor = (props: BodyEditorProps) => {
  const { issues, setIsResultFetching } = useAssistantStore();

  const { paper, setPaper, isLoading } = usePaperStore();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderLeaf = useCallback(
    (props: any) => {
      return <Leaf {...props} />;
    },
    [issues]
  );

  const renderElement = useCallback(props => <Element {...props} />, []);

  // decorate function depends on the language selected
  const decorate = useDecorate();

  if (isLoading)
    return (
      <div className={`space-y-2 animate-pulse ${props.className || ''}`}>
        <div className="h-5 bg-gray-100 rounded w-full"></div>
        <div className="h-5 bg-gray-100 rounded w-full"></div>
        <div className="h-5 bg-gray-100 rounded w-full"></div>
        <div className="h-5 bg-gray-100 rounded w-1/2"></div>
      </div>
    );

  return (
    <Slate
      editor={editor}
      value={deserialize(paper.body)}
      onChange={value => {
        if (paper.body != serialize(value)) {
          setPaper({ question: paper.question, body: serialize(value) });
          setIsResultFetching(true);
        }
      }}
    >
      <Editable
        placeholder="Enter some plain text..."
        spellCheck={false}
        className={props.className}
        decorate={decorate}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
      />
    </Slate>
  );
};

export default BodyEditor;
