import { createContext } from 'react';

interface EditorScrollContextProps<T> {
  scrollTo: (offset: number) => void;
}

export const EditorScrollContext = createContext<
  EditorScrollContextProps<HTMLDivElement>
>({} as EditorScrollContextProps<HTMLDivElement>);
