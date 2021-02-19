import Image from 'next/image';
import { ReactElement } from 'react';
import Feature from '../types/Feature';

interface FeatureProps {
  feature: Feature;
}

function FeatureCard(props: FeatureProps): ReactElement {
  return (
    <div>
      <Image
        src={props.feature.imageSrc}
        width={props.feature.imageSize}
        height={props.feature.imageSize}
        alt={props.feature.header}
      />
      <h2 className="text-2xl mt-3 font-semibold text-gray-900">
        {props.feature.header}
      </h2>
      <p className="max-w-xs text-gray-500 mt-2">{props.feature.body}</p>
    </div>
  );
}

export default FeatureCard;
