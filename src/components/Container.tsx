import { FunctionComponent } from 'react';

const Container: FunctionComponent = props => {
  return <div className="max-w-3xl mx-auto">{props.children}</div>;
};

export default Container;
