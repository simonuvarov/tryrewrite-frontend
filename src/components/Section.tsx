import { FunctionComponent } from 'react';

const Section: FunctionComponent = props => {
  return <article className="w-full mb-24">{props.children}</article>;
};

export default Section;
