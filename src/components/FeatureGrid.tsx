import Feature from '../types/Feature';
import FeatureCard from './FeatureCard';

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid = (props: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 gap-x-20">
      {props.features.map(feature => (
        <FeatureCard feature={feature} key={feature.header} />
      ))}
    </div>
  );
};

export default FeatureGrid;
