import { RenderLeafProps } from 'slate-react';
import { CRITERIA_TYPE } from '../../services/paper.service';

export const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  switch (leaf.affects) {
    case CRITERIA_TYPE.LR:
      return (
        <span {...attributes} className="bg-red-100 border-b-2 border-red-400 ">
          {children}
        </span>
      );
    case CRITERIA_TYPE.CC:
      return (
        <span
          {...attributes}
          className="bg-blue-100 border-b-2  border-blue-400"
        >
          {children}
        </span>
      );
    case CRITERIA_TYPE.TA:
      return (
        <span
          {...attributes}
          className="bg-green-100 border-b-2  border-green-400"
        >
          {children}
        </span>
      );
    case CRITERIA_TYPE.GR:
      return (
        <span
          {...attributes}
          className="bg-yellow-100 border-b-2  border-yellow-400"
        >
          {children}
        </span>
      );
    default:
      return (
        <span {...attributes} className="">
          {children}
        </span>
      );
  }
};
