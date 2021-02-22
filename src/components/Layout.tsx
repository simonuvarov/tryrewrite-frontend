import { FunctionComponent } from 'react';

const Layout: FunctionComponent = props => {
  return (
    <>
      <main className="max-w-3xl mx-auto">{props.children}</main>
      <style jsx global>
        {`
          body {
            background-color: #f9fafb;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
