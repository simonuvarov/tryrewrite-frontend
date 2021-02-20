import Link from 'next/link';
import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Section from '../components/Section';

export function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Section>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 max-w-lg md:max-w-2xl w-full">
            Improve your&nbsp;writing in&nbsp;a&nbsp;smart way
          </h1>
          <p className="text-lg mt-4 text-gray-600 max-w-3xl">
            Find new topics, generate new ideas, keep track of time, check
            grammar, and get instanant feedback – all in one place.
          </p>
          <Link href="#/signup">
            <a className="inline-flex bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded mt-6">
              <span className="text-base text-indigo-50">
                Get started for free
              </span>
            </a>
          </Link>
        </Section>
        <Section>
          <FeatureGrid
            features={[
              {
                imageSrc: '/images/explore.png',
                imageSize: 128,
                header: 'Explore new ideas',
                body:
                  'If you don’t have any clue or idea on what to write about in your esssay, you can simply search essays of others to find new ideas.'
              },
              {
                imageSrc: '/images/check-grammar.png',
                imageSize: 128,
                header: 'Check grammar',
                body:
                  'Grammar is crucial for getting a good score on exam, so grammar check are the core functonality of our service.'
              },
              {
                imageSrc: '/images/keep-history.png',
                imageSize: 128,
                header: 'Keep history',
                body:
                  'Forget about writing essays in your notepad and trying to find it days later.'
              },
              {
                imageSrc: '/images/get-feedback.png',
                imageSize: 128,
                header: 'Get instant feedback',
                body:
                  'We use machine learning to analyze essays and give you score instantly.'
              }
            ]}
          ></FeatureGrid>
        </Section>
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
