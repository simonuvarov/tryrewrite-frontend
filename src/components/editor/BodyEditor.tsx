import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { useEditorStore } from '../../stores/useEditorStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { serialize } from './serialize';
import { useDecorate } from './useDecorate';

interface BodyEditorProps {
  className?: string;
}

const EditorSkeleton = (
  <div className={`space-y-2 animate-pulse`}>
    <div className="h-5 bg-gray-100 rounded w-full"></div>
    <div className="h-5 bg-gray-100 rounded w-full"></div>
    <div className="h-5 bg-gray-100 rounded w-full"></div>
    <div className="h-5 bg-gray-100 rounded w-1/2"></div>
  </div>
);

const BodyEditor = (props: BodyEditorProps) => {
  const { issues, setChecking } = useEditorStore();

  const { paper, setPaper, loading: isLoading } = useEditorStore();

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

  if (isLoading) return EditorSkeleton;

  return (
    <Slate
      editor={editor}
      value={deserialize(paper.body)}
      onChange={value => {
        if (paper.body != serialize(value)) {
          setPaper({ question: paper.question, body: serialize(value) });
          setChecking(true);
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
