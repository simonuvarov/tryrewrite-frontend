import Image from 'next/image';
import { ReactElement } from 'react';

interface FeatureProps {
  imageSrc: string;
  imageSize: number;
  header: string;
  body: string;
}

function Feature(props: FeatureProps): ReactElement {
  return (
    <div>
      <Image
        src={props.imageSrc}
        width={props.imageSize}
        height={props.imageSize}
        alt={props.header}
      />
      <h2 className="text-2xl mt-3 font-semibold text-gray-900">
        {props.header}
      </h2>
      <p className="max-w-xs text-gray-500 mt-2">{props.body}</p>
    </div>
  );
}

export default Feature;
