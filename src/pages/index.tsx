import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/Container';
import FeatureCard from '../components/FeatureCard';
import FeatureGrid from '../components/FeatureGrid';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Section from '../components/Section';

export function Home() {
  return (
    <>
      <Head>
        <title>Wriby: Improve your IELTS writing</title>
        <meta
          name="description"
          content="Find new topics, generate new ideas, keep track of time, check
              grammar, and get instanant feedback – all in one place."
        />
        <meta
          name="keywords"
          content="IELTS exam essay check online proofread score band clb express entry"
        />
      </Head>
      <Layout>
        <Header />
        <Section>
          <Container>
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
          </Container>
        </Section>
        <Section>
          <Container>
            <FeatureGrid>
              <FeatureCard
                feature={{
                  imageSrc: '/images/explore.png',
                  imageSize: 128,
                  header: 'Explore new ideas',
                  body:
                    'If you don’t have any clue or idea on what to write about in your esssay, you can simply search essays of others to find new ideas.'
                }}
              />
              <FeatureCard
                feature={{
                  imageSrc: '/images/check-grammar.png',
                  imageSize: 128,
                  header: 'Check grammar',
                  body:
                    'Grammar is crucial for getting a good score on exam, so grammar check are the core functonality of our service.'
                }}
              />
              <FeatureCard
                feature={{
                  imageSrc: '/images/keep-history.png',
                  imageSize: 128,
                  header: 'Keep history',
                  body:
                    'Forget about writing essays in your notepad and trying to find it days later.'
                }}
              />
              <FeatureCard
                feature={{
                  imageSrc: '/images/get-feedback.png',
                  imageSize: 128,
                  header: 'Get instant feedback',
                  body:
                    'We use machine learning to analyze essays and give you score instantly.'
                }}
              />
            </FeatureGrid>
          </Container>
        </Section>
        <div className="h-24"></div>
      </Layout>
    </>
  );
}

export default Home;
