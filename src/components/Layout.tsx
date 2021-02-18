import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = props => {
  return <div className="px-4 flex flex-col item-center">{props.children}</div>;
};
