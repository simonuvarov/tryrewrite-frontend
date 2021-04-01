import { RenderLeafProps } from 'slate-react';

export const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  switch (leaf.type) {
    case 'spelling':
      return (
        <span
          {...attributes}
          className={`${
            leaf.type ? 'bg-red-100 border-b-2 border-red-400' : ''
          }`}
        >
          {children}
        </span>
      );
    case 'punctuation':
      return (
        <span
          {...attributes}
          className={`${
            leaf.type ? 'bg-blue-100 border-b-2  border-blue-400' : ''
          }`}
        >
          {children}
        </span>
      );
    case 'grammar':
      return (
        <span
          {...attributes}
          className={`${
            leaf.type ? 'bg-yellow-100 border-b-2  border-yellow-400' : ''
          }`}
        >
          {children}
        </span>
      );
    default:
      return (
        <span
          {...attributes}
          className={`${
            leaf.type ? 'bg-gray-100 border-b-2 border-gray-400' : ''
          }`}
        >
          {children}
        </span>
      );
  }
};
