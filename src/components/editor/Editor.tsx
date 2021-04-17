import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, NodeEntry, Range, Text } from 'slate';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';
import { useIssuesStore } from '../../stores/useIssuesStore';
import { usePaperStore } from '../../stores/usePaperStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { serialize } from './serialize';

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

const Editor = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const { issues, clearIssues } = useIssuesStore();

  const { body, setBody } = usePaperStore(state => ({
    body: state.body,
    setBody: state.setBody
  }));

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => {
      return <Leaf {...props} />;
    },
    [issues]
  );

  const renderElement = useCallback(props => <Element {...props} />, []);

  // decorate function depends on the language selected
  const decorate = useCallback(
    ([node, path]: NodeEntry) => {
      const ranges: Range[] = [];

      if (!Text.isText(node)) {
        return ranges;
      }

      const paragraphRanges: Array<[number, number]> = [];
      let offset = 0;
      body.split('\n').map((p: string) => {
        const start = offset;
        const end = offset + p.length + '\n'.length;
        paragraphRanges.push([start, end]);
        offset = offset + p.length + '\n'.length;
      });
      const currentTextRange = paragraphRanges[path[0]];

      for (const highlight of issues.filter(h => {
        return (
          h.offset < currentTextRange[1] && h.offset >= currentTextRange[0]
        );
      })) {
        const length = highlight.length;
        const start = highlight.offset - currentTextRange[0];
        const end = start + length;

        ranges.push({
          anchor: { path, offset: start },
          focus: { path, offset: end }
        });
      }

      return ranges;
    },
    [issues]
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Slate
      editor={editor}
      value={deserialize(body)}
      onChange={value => {
        setBody(serialize(value));
      }}
    >
      <Editable
        placeholder="Enter some plain text..."
        spellCheck={false}
        className="min-h-full"
        decorate={decorate}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        onKeyDown={e => {
          if (isSystemKeyPress(e)) return;
          clearIssues();
        }}
      />
    </Slate>
  );
};

export default Editor;
