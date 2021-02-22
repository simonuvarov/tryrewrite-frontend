import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WaitListForm from '../components/WaitListForm';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-white rounded-2xl max-w-5xl mx-auto -mt-20 shadow-lg pt-20 pb-28 px-36">
        <FeatureGrid
          features={[
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
          ]}
        ></FeatureGrid>
      </div>
      <div className="w-full pt-32 pb-10">
        <div className="max-w-3xl mx-auto">
          <WaitListForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
