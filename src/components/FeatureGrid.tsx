import { FunctionComponent } from 'react';

export const FeatureGrid: FunctionComponent = props => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
      {props.children}
    </div>
  );
};
