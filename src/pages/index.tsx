import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';

export function Home() {
  return (
    <>
      <Header className="bg-white" />
      <section className="bg-white w-full pt-20 pb-44 px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight text-gray-800 max-w-xl text-center ">
          Write. Check. Correct. Repeat.
        </h1>
        <p className="text-lg md:text-2xl mt-6 text-gray-500 max-w-3xl text-center ">
          Get instant feedback and track your progress – all in one place
        </p>
        <Link href="/signup">
          <a
            className={`mt-10 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium text-base leading-8 transition outline-none `}
          >
            Get started now
          </a>
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Home;
