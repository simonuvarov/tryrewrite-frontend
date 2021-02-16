import { FunctionComponent } from 'react';

export const Section: FunctionComponent = props => {
  return <section className="w-full">{props.children}</section>;
};
