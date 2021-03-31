import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  createEditor,
  Descendant,
  Element as SlateElement,
  Node,
  Range,
  Text
} from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';
import useDebounce from '../../hooks/useDebounce';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { Stats } from './Stats';

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

// Define a serializing function that takes a value and returns a string.
const serialize = (value: any) => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n: any) => Node.string(n))
      // Join them all with line breaks denoting paragraphs.
      .join('\n')
  );
};

// Define a deserializing function that takes a string and returns a value.
const deserialize = (string: string) => {
  // Return a value array of children derived by splitting the string.
  return string.split('\n').map(line => {
    return {
      children: [{ text: line }]
    };
  });
};

const initialValue: SlateElement[] = [
  {
    type: 'paragraph',
    children: [
      {
        text:
          'This is editable text that you can search. As you search, it looks for matching strings of text, and adds '
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Try it out for yourself by typing in the search box above!' }
    ]
  }
];

const PlainTextExample = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [highlights, setHighlights] = useState<Array<Issue>>([]);

  const [data, setData] = useState();

  const [editorValue, setEditorValue] = useState<Descendant[]>(
    deserialize(process.browser ? localStorage.getItem('content') || '' : '')
  );

  const debouncedEditorValue = useDebounce(editorValue, 500);

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
    ([node, path]) => {
      const ranges: Range[] = [];

      if (!Text.isText(node)) {
        return ranges;
      }

      for (const highlight of highlights) {
        const length = highlight.length;
        const start = highlight.offset;
        const end = start + length;

        ranges.push({
          type: 'grammar',
          anchor: { path, offset: start },
          focus: { path, offset: end }
        });
      }
      console.log(ranges);

      return ranges;
    },
    [highlights]
  );

  useEffect(() => {
    if (serialize(debouncedEditorValue) === '') return;
    axios
      .post('http://localhost:4000/papers/check', {
        question: 'foo',
        body: serialize(debouncedEditorValue)
      })
      .then(r => {
        setData(r.data);

        let highlights: Array<any> = [];
        r.data.gr.results.forEach((r: any) => highlights.concat(r.highlights));
        setHighlights(highlights);
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
          value={editorValue}
          onChange={value => {
            setEditorValue(value);
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

export default PlainTextExample;
