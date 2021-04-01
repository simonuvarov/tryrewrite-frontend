import { RenderLeafProps } from 'slate-react';

export const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  switch (leaf.type) {
    case 'spelling':
      return (
        <span {...attributes} className={`${leaf.type ? 'bg-red-100' : ''}`}>
          {children}
        </span>
      );
    case 'punctuation':
      return (
        <span {...attributes} className={`${leaf.type ? 'bg-blue-100' : ''}`}>
          {children}
        </span>
      );
    default:
      return (
        <span {...attributes} className={`${leaf.type ? 'bg-gray-100' : ''}`}>
          {children}
        </span>
      );
  }
};
