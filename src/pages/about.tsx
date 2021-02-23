import Header from '../components/Header';

export function Home() {
  return (
    <>
      <Header className="bg-gray-100" />
      <div className="bg-gray-100 md:px-4 pt-14 pb-20">
        <div className="block mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold text-gray-800">About</h2>
          <div className="bg-white px-20 py-16 shadow-lg rounded-xl mt-10">
            <p className="text-xl text-gray-700 mt-8">
              <span className="font-semibold">You need to</span> find a topic
              for your today's essay quickly.
            </p>
            <p className="text-xl text-gray-700 mt-6">
              <span className="font-semibold"> You need to</span> find
              supporting ideas for the topic.
            </p>
            <p className="text-xl text-gray-700 mt-6">
              <span className="font-semibold">You need</span> an editor to type
              everything.
            </p>

            <p className="text-xl text-gray-700 mt-6">
              <span className="font-semibold">You need to</span> find all the
              things you've written before.
            </p>
            <p className="text-xl text-gray-700 mt-6">
              <span className="font-semibold">You need</span> someone to give
              feedback on your writing.
            </p>
            <p className="text-xl text-gray-700 mt-6">
              <span className="font-semibold">You need to</span> analyze your
              performance to know if you're learning.
            </p>
            <p className="text-xl text-gray-700 mt-8">
              We're working on Wriby to provide what you need. What we needed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
