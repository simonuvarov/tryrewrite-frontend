import { FunctionComponent } from 'react';

export const Container: FunctionComponent = props => {
  return <div className="max-w-3xl mx-auto">{props.children}</div>;
};
