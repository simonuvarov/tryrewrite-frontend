import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Spinner } from '../components/Spinner';
import { useForceUnauth } from '../hooks/useForceUnauth';
import { CRITERIA_TYPE, Issue } from '../services/paper.service';

const demoIssue: Issue = {
  id: '',
  isInline: true,
  shortMessage: 'Informal word: kids',
  message:
    'You are asked to write an academic essay. Avoid using informal words such as “kids” to make your language as formal and academic as possible.',
  affects: CRITERIA_TYPE.LR,
  replacements: ['children'],
  offset: 0,
  length: 4
};

export function Home() {
  const { isLoading } = useForceUnauth({ redirectTo: '/dashboard' });

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <Header className="bg-white" />
      <section className="bg-white w-full px-4 flex flex-col items-center mt-20">
        <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight text-gray-800 max-w-xl text-center ">
          Write. Check. Correct. Repeat.
        </h1>
        <p className="text-lg md:text-2xl mt-6 text-gray-500 max-w-3xl text-center ">
          Get instant feedback and track your progress – all in one place
        </p>
      </section>
      <section className="w-full flex-col flex items-center mt-20">
        <Image
          src={'/images/hero-image.png'}
          alt="Picture of the editor"
          width={1440}
          height={838}
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;
