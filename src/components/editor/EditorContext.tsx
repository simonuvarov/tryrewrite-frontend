import React, { createContext, useState } from 'react';
import { Descendant } from 'slate';
import { deserialize } from './deserialize';

interface EditorContextProps {
  editorState: Descendant[];
  setEditorState(state: Descendant[]): void;
}
export const EditorContext = createContext<EditorContextProps>({
  editorState: [],
  setEditorState: () => undefined
});

export const EditorContextProvider: React.FC = ({ children }) => {
  const [editorState, setEditorState] = useState<Descendant[]>();

  return (
    <EditorContext.Provider
      value={{
        setEditorState,
        editorState: deserialize(
          process.browser ? localStorage.getItem('content') || '' : ''
        )
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
