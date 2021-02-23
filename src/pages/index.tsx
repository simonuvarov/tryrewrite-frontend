import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

export function Home() {
  return (
    <>
      <Header className="bg-gray-100" />
      <Hero />
      <div className="md:px-4">
        <FeatureGrid className="w-full md:max-w-5xl mx-auto -mt-20" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
