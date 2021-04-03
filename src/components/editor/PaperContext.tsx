import React, { createContext, useState } from 'react';

interface EditorContextProps {
  body: string;
  setBody(state: string): void;
}
export const PaperContext = createContext<EditorContextProps>({
  body: '',
  setBody: () => undefined
});

export const PaperContextProvider: React.FC = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  const [body, setBody] = useState(
    process.browser ? localStorage.getItem('content') || '' : ''
  );

  return (
    <PaperContext.Provider
      value={{
        body,
        setBody
      }}
    >
      {children}
    </PaperContext.Provider>
  );
};
