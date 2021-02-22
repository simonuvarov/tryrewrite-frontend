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
      <div className="bg-white md:rounded-2xl max-w-5xl mx-auto -mt-20 md:shadow-lg pt-20 pb-28 px-6 md:px-36">
        <FeatureGrid />
      </div>
      <div className="w-full px-2 mt-8 md:mt-32 md:mb-10">
        <div className="max-w-3xl mx-auto">
          <WaitListForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
