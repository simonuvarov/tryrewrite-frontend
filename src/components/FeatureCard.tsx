import Image from 'next/image';
import { ReactElement } from 'react';
import Feature from '../types/Feature';

interface FeatureProps {
  feature: Feature;
}

function FeatureCard(props: FeatureProps): ReactElement {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={props.feature.imageSrc}
        width={props.feature.imageSize}
        height={props.feature.imageSize}
        alt={props.feature.header}
      />
      <h2 className="text-2xl mt-4 font-semibold text-gray-800 text-center max-w-sm">
        {props.feature.header}
      </h2>
      <p className="text-gray-500 mt-2 text-center max-w-sm">
        {props.feature.body}
      </p>
    </div>
  );
}

export default FeatureCard;
