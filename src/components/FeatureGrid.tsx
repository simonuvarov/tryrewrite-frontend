import FeatureCard from './FeatureCard';

interface FeatureGridProps {
  className?: string;
}

const FeatureGrid = ({ className = '' }: FeatureGridProps) => {
  const features = [
    {
      imageSrc: '/images/explore.png',
      imageSize: 128,
      header: 'Explore ideas',
      body:
        'If you don’t know what to write about in your IELTS essay, we have ideas for most topics prepared for you'
    },
    {
      imageSrc: '/images/check-grammar.png',
      imageSize: 128,
      header: 'Check grammar',
      body:
        'Grammar is crucial for getting a good score on the exam, so grammar checks are the core functionality of our service'
    },
    {
      imageSrc: '/images/progress.png',
      imageSize: 128,
      header: 'Track progress',
      body:
        'Noticing how you get better at writing essays is the best thing to stay motivated, and we have tools for that, too'
    },
    {
      imageSrc: '/images/get-feedback.png',
      imageSize: 128,
      header: 'Get instant feedback',
      body:
        'Our algorithms analyze your essay to give you the most accurate feedback on what can be improved'
    }
  ];

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-24 gap-x-20 md:shadow-lg pt-20 pb-28 px-6 md:px-36 md:rounded-2xl  bg-white ${className}`}
    >
      {features.map(feature => (
        <FeatureCard feature={feature} key={feature.header} />
      ))}
    </div>
  );
};

export default FeatureGrid;
