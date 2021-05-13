import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { usePaperStore } from '../../stores/usePaperStore';
import { useDecorate } from './useDecorate';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { serialize } from './serialize';

interface BodyEditorProps {
  className?: string;
}

const isSystemKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): boolean => {
  if (e.ctrlKey || e.altKey || e.metaKey) return true;
  if (
    e.code === 'ArrowLeft' ||
    e.code === 'ArrowRight' ||
    e.code === 'ArrowUp' ||
    e.code === 'ArrowDown' ||
    e.code === 'MetaLeft' ||
    e.code === 'MetaRight' ||
    e.code === 'AltLeft' ||
    e.code === 'AltRight' ||
    e.code === 'ShiftLeft' ||
    e.code === 'ShiftRight' ||
    e.code === 'Tab' ||
    e.code === 'CapsLock'
  )
    return true;
  return false;
};

const BodyEditor = (props: BodyEditorProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  const { issues, setIssues, setIsResultFetching } = useAssistantStore();

  const { paper, setPaper } = usePaperStore();

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

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  if (!paper) return null;

  return (
    <Slate
      editor={editor}
      value={deserialize(paper.body)}
      onChange={value => {
        if (paper.body != serialize(value)) {
          setPaper({ question: paper.question, body: serialize(value) });
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
        onKeyDown={e => {
          if (isSystemKeyPress(e)) return;
          console.log('should set fetching');
          setIsResultFetching(true);
        }}
      />
    </Slate>
  );
};

export default BodyEditor;
