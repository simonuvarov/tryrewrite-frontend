import { Descendant } from 'slate';

export type ParagraphElement = { type: 'paragraph'; children: Descendant[] };

type CustomElement = ParagraphElement;

export type EmptyText = {
  text: string;
};

declare module 'slate' {
  interface CustomTypes {
    Element: CustomElement;
    Text: EmptyText;
  }
}
