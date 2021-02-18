import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../components/Container';
import { Section } from '../components/Section';

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
      <div className="p-4 flex flex-col item-center">
        <Section>
          <Container>
            <h1 className="mt-12 md:mt-24 text-5xl md:text-7xl font-bold text-gray-900 max-w-lg md:max-w-2xl w-full">
              Improve your&nbsp;writing in&nbsp;a&nbsp;smart way
            </h1>
            <p className="text-lg mt-4 text-gray-600 max-w-3xl">
              Find new topics, generate new ideas, keep track of time, check
              grammar, and get instanant feedback – all in one place.
            </p>
            <Link href="#/signup">
              <a className="inline-flex bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded mt-6">
                <span className="text-bold text-md text-indigo-50">
                  Get started for free
                </span>
              </a>
            </Link>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-y-10">
              <div className="max-w-xs">
                <Image src="/images/explore.png" width={128} height={128} />
                <h2 className="text-2xl mt-3 font-semibold text-gray-900">
                  Explore new ideas
                </h2>
                <p className=" text-gray-500 mt-2">
                  If you don’t have any clue or idea on what to write about in
                  your esssay, you can simply search essays of others to find
                  new ideas.
                </p>
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/check-grammar.png"
                  width={128}
                  height={128}
                />
                <h2 className="text-2xl mt-3 font-semibold text-gray-900">
                  Check grammar
                </h2>
                <p className="max-w-xs text-gray-500 mt-2">
                  Grammar is crucial for getting a good score on exam, so
                  grammar check are the core functonality of our service.
                </p>
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/keep-history.png"
                  width={128}
                  height={128}
                />
                <h2 className="text-2xl mt-3 font-semibold text-gray-900">
                  Keep history
                </h2>
                <p className="max-w-xs text-gray-500 mt-2">
                  Forget about writing essays in your notepad and trying to find
                  it days later.
                </p>
              </div>
              <div className="max-w-xs">
                <Image
                  src="/images/get-feedback.png"
                  width={128}
                  height={128}
                />
                <h2 className="text-2xl mt-3 font-semibold text-gray-900">
                  Get instant feedback
                </h2>
                <p className="max-w-xs text-gray-500 mt-2">
                  We use machine learning to analyze essays and give you score
                  instantly.
                </p>
              </div>
            </div>
          </Container>
        </Section>
        <div className="h-24"></div>
      </div>

      <style jsx global>{`
        body {
          background-color: #fafaf9;
        }
      `}</style>
    </>
  );
}

export default Home;
