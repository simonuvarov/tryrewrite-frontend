import React, { createContext, ReactNode, useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import paperService, { Issue } from '../services/paper.service';

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

interface PaperContextProviderProps {
  children: ReactNode;
  paperId: string;
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

export const PaperContextProvider = ({
  children,
  paperId
}: PaperContextProviderProps) => {
  const [issues, setIssues] = useState<Array<Issue>>([]);
  const [bands, setBands] = useState({
    ta: 0,
    cc: 0,
    lr: 0,
    gr: 0,
    overall: 0
  });
  const [body, setBody] = useState('');

  useEffect(() => {
    paperService.getPaper(paperId).then(r => setBody(r.data.body));
  }, []);

  const debouncedEditorValue = useDebounce(body, 500);

  useEffect(() => {
    if (body === '') return;
    paperService
      .gradePaper(paperId, {
        question: 'foo',
        body: debouncedEditorValue
      })
      .then(r => {
        setBands({
          ta: r.data.bands.ta,
          cc: r.data.bands.cc,
          lr: r.data.bands.lr,
          gr: r.data.bands.gr,
          overall: r.data.bands.overall
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
