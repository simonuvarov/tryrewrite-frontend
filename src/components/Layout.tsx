import { FunctionComponent } from 'react';

const Layout: FunctionComponent = props => {
  return <div className="px-4 flex flex-col item-center">{props.children}</div>;
};

export default Layout;
