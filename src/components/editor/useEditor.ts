import { useContext } from 'react';
import { EditorContext } from './EditorContext';

export const useEditor = () => {
  const { editorState, setEditorState } = useContext(EditorContext);

  return { editorState, setEditorState };
};
