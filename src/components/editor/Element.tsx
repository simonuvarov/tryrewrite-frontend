import React from 'react';
import { RenderElementProps } from 'slate-react';

export const Element = ({
  attributes,
  children,
  element
}: RenderElementProps) => {
  switch (element.type) {
    default:
      return <p {...attributes}>{children}</p>;
  }
};
