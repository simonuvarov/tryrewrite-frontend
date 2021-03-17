// Import React dependencies.
import React, { useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Element, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

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
    children: [{ text: 'This is editable plain text, just like a <textarea>!' }]
  }
];

const PlainTextExample = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const [value, setValue] = useState<Descendant[]>(
    deserialize(process.browser ? localStorage.getItem('content') || '' : '')
  );

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        setValue(value);
        localStorage.setItem('content', serialize(value));
      }}
    >
      <Editable placeholder="Enter some plain text..." spellCheck={false} />
    </Slate>
  );
};

export default PlainTextExample;
