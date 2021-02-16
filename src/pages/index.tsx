import Head from 'next/head';

export function Home() {
  return (
    <>
      <Head>
        <title>All Nines</title>
        <meta
          name="description"
          content="All Nines – improve your IELTS essays in a smart way"
        />
        <meta
          name="keywords"
          content="IELTS essay check online proofread score band nine clb express entry"
        />
      </Head>
      <div className="px-4 pb-12 md:p-12 flex justify-center">
        <div>
          <h1 className="mt-12 md:mt-24 text-5xl md:text-7xl font-bold text-gray-900 max-w-lg md:max-w-2xl w-full">
            Improve your&nbsp;writing in&nbsp;a&nbsp;smart way
          </h1>
          <a
            href="https://t.me/allnines"
            target="_blank"
            className="inline-flex w-content text-blue-500 mt-8 hover:text-blue-400 items-center"
          >
            <span className="text-semibold text-lg">Subscribe to updates</span>
            <div className="h-5 w-5 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </div>
          </a>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-8 md:gap-y-14 mt-12 md:mt-24">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Calculate score
              </h2>
              <p className="max-w-sm text-gray-500 mt-2">
                We use machine learning to analyze essays and give you score
                instantly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Check grammar
              </h2>
              <p className="max-w-sm text-gray-500 mt-2">
                Grammar is crucial for getting a good score on exam, so grammar
                check are the core functonality of our service.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Explore new ideas
              </h2>
              <p className="max-w-sm text-gray-500 mt-2">
                If you don’t have any clue or idea on what to write about in
                your esssay, you can simply search essays of others to find new
                ideas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Keep history
              </h2>
              <p className="max-w-sm text-gray-500 mt-2 ">
                Forget about writing essays in your notepad and trying to find
                it days later. Store all your works in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-color: #f9fafb;
        }
      `}</style>
    </>
  );
}

export default Home;
