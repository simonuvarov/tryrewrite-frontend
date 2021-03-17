import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Element, Node, Range, Text } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';
import useDebounce from '../../hooks/useDebounce';
import { Leaf } from './Leaf';

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

const initialValue: Element[] = [
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
  const [grammar, setGrammar] = useState<{ issues: Array<Issue> }>({
    issues: []
  });

  const [editorValue, setEditorValue] = useState<Descendant[]>(
    deserialize(process.browser ? localStorage.getItem('content') || '' : '')
  );

  const debouncedEditorValue = useDebounce(editorValue, 500);

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => {
      return <Leaf {...props} />;
    },
    [grammar]
  );

  // decorate function depends on the language selected
  const decorate = useCallback(
    ([node, path]) => {
      const ranges: Range[] = [];

      if (!Text.isText(node)) {
        return ranges;
      }

      for (const issue of grammar.issues) {
        const length = issue.length;
        const start = issue.offset;
        const end = start + length;

        ranges.push({
          type: 'grammar',
          anchor: { path, offset: start },
          focus: { path, offset: end }
        });
      }
      return ranges;
    },
    [grammar]
  );

  useEffect(() => {
    if (serialize(debouncedEditorValue) === '') return;
    axios
      .post('http://localhost:4000/papers/check', {
        text: serialize(debouncedEditorValue)
      })
      .then(r => setGrammar(r.data));
  }, [debouncedEditorValue]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
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

            setGrammar({ issues: [] });
          }}
        />
      </Slate>
      <pre>{JSON.stringify(grammar, null, 2)}</pre>
    </>
  );
};

export default PlainTextExample;
