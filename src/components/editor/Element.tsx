import React from 'react';
import { RenderElementProps } from 'slate-react';

export const Element = ({
  attributes,
  children,
  element
}: RenderElementProps) => {
  return <p {...attributes}>{children}</p>;
};
