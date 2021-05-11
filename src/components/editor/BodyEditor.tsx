import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BaseRange, createEditor, NodeEntry, Text } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { CRITERIA_TYPE, InlineIssue } from '../../services/paper.service';
import { useGraderResultStore } from '../../stores/useGradeResultStore';
import { usePaperStore } from '../../stores/usePaperStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf, LeafProps } from './Leaf';
import { serialize } from './serialize';

interface BodyEditorProps {
  className?: string;
}

export interface IssueRange extends BaseRange {
  id: string;
  affects: CRITERIA_TYPE;
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

  const { issues, setIssues } = useGraderResultStore();

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
  const decorate = useCallback(
    ([node, path]: NodeEntry) => {
      const ranges: IssueRange[] = [];

      if (!Text.isText(node) || !issues) {
        return ranges;
      }

      const paragraphRanges: Array<[number, number]> = [];
      let offset = 0;
      paper!.body.split('\n').map((p: string) => {
        const start = offset;
        const end = offset + p.length + '\n'.length;
        paragraphRanges.push([start, end]);
        offset = offset + p.length + '\n'.length;
      });
      const currentTextRange = paragraphRanges[path[0]];

      for (const issue of issues.filter(h => {
        return (
          h.isInline &&
          h.offset < currentTextRange[1] &&
          h.offset >= currentTextRange[0]
        );
      }) as Array<InlineIssue>) {
        const length = issue.length;
        const start = issue.offset - currentTextRange[0];
        const end = start + length;

        ranges.push({
          id: issue.id,
          anchor: { path, offset: start },
          focus: { path, offset: end },
          affects: issue.affects
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
          setIssues(null);
        }}
      />
    </Slate>
  );
};

export default BodyEditor;
