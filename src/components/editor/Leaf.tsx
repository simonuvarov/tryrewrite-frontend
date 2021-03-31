import { RenderLeafProps } from 'slate-react';

export const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  console.log(leaf.type);

  return (
    <span {...attributes} className={`${leaf.type ? 'bg-red-100' : ''}`}>
      {children}
    </span>
  );
};
