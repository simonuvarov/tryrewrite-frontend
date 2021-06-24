import { createContext, ReactNode, useEffect, useState } from 'react';
import { Descendant, Node } from 'slate';
import paperService, { Issue } from '../services/paper.service';

interface Bands {
  ta: number;
  cc: number;
  lr: number;
  gr: number;
  overall: number;
}

interface EditorContextProps {
  initializingPaper: boolean;
  issues?: Array<Issue>;
  error?: any;
  question: Descendant[];
  setQuestion: (q: Descendant[]) => void;
  body: Descendant[];
  setBody: (b: Descendant[]) => void;
  checking: boolean;
}

export const EditorContext = createContext<EditorContextProps>(
  {} as EditorContextProps
);

export const EditorProvider = ({
  children,
  paperId
}: {
  children: ReactNode;
  paperId: string;
}): JSX.Element => {
  const [initializingPaper, setInitializingPaper] = useState(true);
  const [error, setError] = useState<any>();
  const [checking, setChecking] = useState(true);
  const [issues, setIssues] = useState<Array<Issue>>();
  const [question, setQuestion] = useState<Descendant[]>(stringToSlate('\n'));
  const [body, setBody] = useState<Descendant[]>(stringToSlate('\n'));

  // initalize paper
  useEffect(() => {
    console.log('Initializing paper...');
    if (paperId)
      paperService
        .getPaper(paperId)
        .then(res => {
          setQuestion(stringToSlate(res.question));
          setBody(stringToSlate(res.body));

          setInitializingPaper(false);
          console.log('Finished initializing paper...');
        })
        .catch(err => setError(err));
  }, []);

  // start checking paper only after initialization
  useEffect(() => {
    setChecking(true);

    if (initializingPaper) return; // check question and body are not undefined to make typescript happy
    console.log('Setting timeout');
    const handler = setTimeout(() => {
      console.log('Grading paper...');
      paperService
        .gradePaper(paperId, {
          question: slateToString(question),
          body: slateToString(body)
        })
        .then(res => {
          setIssues(res.issues);
        })
        .catch(err => setError(err))
        .finally(() => setChecking(false));
    }, 500);
    // clear timeout when value changes, on unmount, etc.
    return () => clearTimeout(handler);
  }, [initializingPaper, question, body]);

  const value = {
    initializingPaper,
    error,
    issues,
    question,
    setQuestion,
    body,
    setBody,
    checking
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

// Define a serializing function that takes a value and returns a string.
export const slateToString = (value: any) => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n: any) => Node.string(n))
      // Join them all with line breaks denoting paragraphs.
      .join('\n')
  );
};

// Define a deserializing function that takes a string and returns a value.
export const stringToSlate = (string: string): Descendant[] => {
  // Return a value array of children derived by splitting the string.
  return string.split('\n').map(line => {
    return {
      type: 'paragraph',
      children: [{ text: line }]
    };
  });
};