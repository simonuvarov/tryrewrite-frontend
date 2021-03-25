import React from 'react';
import { RenderElementProps } from 'slate-react';

export const Element = ({
  attributes,
  children,
  element
}: RenderElementProps) => {
  switch (element.type) {
    default:
      return (
        <p className="leading-loose mb-4" {...attributes}>
          {children}
        </p>
      );
  }
};
