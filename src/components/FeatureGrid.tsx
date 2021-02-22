import FeatureCard from './FeatureCard';

interface FeatureGridProps {
  className?: string;
}

const FeatureGrid = ({ className = '' }: FeatureGridProps) => {
  const features = [
    {
      imageSrc: '/images/explore.png',
      imageSize: 128,
      header: 'Explore new ideas',
      body:
        'If you don’t have any clue or idea on what to write about in your essay, you can simply search essays of others'
    },
    {
      imageSrc: '/images/check-grammar.png',
      imageSize: 128,
      header: 'Check grammar',
      body:
        'Grammar is crucial for getting a good score on the exam, so grammar checks are the core functionality of our service'
    },
    {
      imageSrc: '/images/keep-history.png',
      imageSize: 128,
      header: 'Keep history',
      body:
        'Forget about writing essays in your notepad and trying to find it days later'
    },
    {
      imageSrc: '/images/get-feedback.png',
      imageSize: 128,
      header: 'Get instant feedback',
      body:
        'We use machine learning to analyze essays and give you a score instantly'
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
