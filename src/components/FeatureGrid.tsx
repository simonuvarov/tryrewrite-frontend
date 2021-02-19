import Feature from '../types/Feature';
import FeatureCard from './FeatureCard';

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid = (props: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
      {props.features.map(feature => (
        <FeatureCard feature={feature} />
      ))}
    </div>
  );
};

export default FeatureGrid;
