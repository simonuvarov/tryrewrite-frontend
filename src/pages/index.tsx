import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../components/Container';
import { Section } from '../components/Section';

export function Home() {
  return (
    <>
      <Head>
        <title>All Nines</title>
        <meta
          name="description"
          content="All Nines – The first step to successful IELTS exam"
        />
        <meta
          name="keywords"
          content="IELTS exam essay check online proofread score band clb express entry"
        />
      </Head>
      <div className="p-4 flex flex-col item-center">
        <Section>
          <Container>
            <h1 className="mt-12 md:mt-40 text-5xl md:text-7xl font-bold text-gray-900 max-w-lg md:max-w-2xl w-full">
              Improve your&nbsp;writing in&nbsp;a&nbsp;smart way
            </h1>
            <p className="text-2xl mt-4 text-gray-600 max-w-3xl">
              Find new topics, generate new ideas, keep track of time, check
              grammar, and get instanant feedback – in one place trusted by
              other learners.
            </p>
            <Link href="#/signup">
              <a className="inline-flex bg-orange-600 px-6 py-3 rounded mt-8">
                <span className="text-semibold text-xl text-orange-50">
                  Sign up
                </span>
              </a>
            </Link>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="flex flex-col md:flex-row mt-8 md:mt-24 justify-between gap-10">
              <div className="max-w-xs">
                <div className="h-8 w-8 text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
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
                <div className="h-8 w-8 text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl mt-3 font-semibold text-gray-900">
                  Check grammar
                </h2>
                <p className="max-w-xs text-gray-500 mt-2">
                  Grammar is crucial for getting a good score on exam, so
                  grammar check are the core functonality of our service.
                </p>
              </div>
              <div className="max-w-xs">
                <div className="h-8 w-8 text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl mt-3 font-semibold text-gray-900">
                  Calculate score
                </h2>
                <p className="max-w-xs text-gray-500 mt-2">
                  We use machine learning to analyze essays and give you score
                  instantly.
                </p>
              </div>
            </div>
          </Container>
        </Section>
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
