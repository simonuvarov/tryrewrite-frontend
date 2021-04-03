import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

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

interface Paper {
  question: string;
  body: string;
}

interface EditorContextProps {
  body: string;
  setBody(state: string): void;
  issues: Array<Issue>;
  clearIssues: () => void;
  bands: {
    ta: number;
    cc: number;
    lr: number;
    gr: number;
    overall: number;
  };
}
export const PaperContext = createContext<EditorContextProps>({
  body: '',
  setBody: () => undefined,
  issues: [],
  clearIssues: () => undefined,
  bands: {
    ta: 0,
    cc: 0,
    lr: 0,
    gr: 0,
    overall: 0
  }
});

export const PaperContextProvider: React.FC = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [bands, setBands] = useState({
    ta: 0,
    cc: 0,
    lr: 0,
    gr: 0,
    overall: 0
  });
  const [body, setBody] = useState(
    process.browser ? localStorage.getItem('content') || '' : ''
  );

  const debouncedEditorValue = useDebounce(body, 500);

  useEffect(() => {
    localStorage.setItem('content', body);
    if (body === '') return;
    axios
      .post('http://localhost:4000/papers/check', {
        question: 'foo',
        body: debouncedEditorValue
      })
      .then(r => {
        setBands({
          ta: r.data.ta.band,
          cc: r.data.cc.band,
          lr: r.data.lr.band,
          gr: r.data.gr.band,
          overall: r.data.band
        });
        setIssues(r.data.issues);
      });
  }, [debouncedEditorValue]);

  return (
    <PaperContext.Provider
      value={{
        body,
        setBody,
        issues,
        clearIssues: () => setIssues([]),
        bands
      }}
    >
      {children}
    </PaperContext.Provider>
  );
};
