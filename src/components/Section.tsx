import { FunctionComponent } from 'react';

const Section: FunctionComponent = props => {
  return <section className="w-full mt-12 md:mt-24">{props.children}</section>;
};

export default Section;
