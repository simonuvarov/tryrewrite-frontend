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
      <div className="md:px-4">
        <FeatureGrid className="w-full md:max-w-5xl mx-auto -mt-20" />
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
