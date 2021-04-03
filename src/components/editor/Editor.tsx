import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, NodeEntry, Range, Text } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';
import useDebounce from '../../hooks/useDebounce';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { serialize } from './serialize';
import { Stats } from './Stats';
import { usePaper } from './useEditor';

export enum ISSUE_TYPE {
  GRAMMAR = 'grammar',
  SPELLING = 'spelling',
  PUNCTUATION = 'punctuation',
  STYLE = 'style'
}

export interface Issue {
  type: ISSUE_TYPE;
  shortMessage: string;
  message: string;
  offset: number;
  length: number;
  suggestions: Array<string>;
}

const Editor = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [highlights, setHighlights] = useState<Array<Issue>>([]);

  const [data, setData] = useState();

  const { body, setBody } = usePaper();

  const debouncedEditorValue = useDebounce(body, 500);

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => {
      return <Leaf {...props} />;
    },
    [highlights]
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

      for (const highlight of highlights.filter(h => {
        return (
          h.offset < currentTextRange[1] && h.offset >= currentTextRange[0]
        );
      })) {
        const length = highlight.length;
        const start = highlight.offset - currentTextRange[0];
        const end = start + length;

        ranges.push({
          type: highlight.type,
          anchor: { path, offset: start },
          focus: { path, offset: end }
        });
      }

      return ranges;
    },
    [highlights]
  );

  useEffect(() => {
    if (body === '') return;
    axios
      .post('http://localhost:4000/papers/check', {
        question: 'foo',
        body: debouncedEditorValue
      })
      .then(r => {
        setData(r.data);
        setHighlights(r.data.issues);
      });

    // .then(r => setGrammar(r.data.grammar));
  }, [debouncedEditorValue]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <Slate
          editor={editor}
          value={deserialize(body)}
          onChange={value => {
            setBody(serialize(value));
            localStorage.setItem('content', serialize(value));
          }}
        >
          <Editable
            placeholder="Enter some plain text..."
            spellCheck={false}
            decorate={decorate}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            onKeyDown={e => {
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
                return;

              setHighlights([]);
            }}
          />
        </Slate>
      </div>
      <Stats data={data} />
    </div>
  );
};

export default Editor;
