import React, { createContext, useEffect, useState } from 'react';
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
    paperService
      .getPaper('1593f697-2903-4473-bb1b-0c612d9ca38b')
      .then(r => setBody(r.data.body));
  }, []);

  const debouncedEditorValue = useDebounce(body, 500);

  useEffect(() => {
    if (body === '') return;
    paperService
      .gradePaper('1593f697-2903-4473-bb1b-0c612d9ca38b', {
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
