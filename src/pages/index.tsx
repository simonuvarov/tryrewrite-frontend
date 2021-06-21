import Image from 'next/image';
import Link from 'next/link';
import { Banner } from '../components/Banner';
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
      <Banner>
        <div>
          <span className="inline mr-1">
            🎉 We are currently in beta. Send us your feedback{' '}
          </span>
          <a className="inline underline" href="mailto:feedback@tryrewrite.com">
            here
          </a>
          .
        </div>
      </Banner>
      <Header className="bg-gray-100" />
      <section className="bg-gray-100 w-full px-4 flex flex-col items-center pt-10 md:pt-20">
        <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight text-gray-800 max-w-xl text-center ">
          Write. Check. Correct. Repeat.
        </h1>
        <p className="text-lg md:text-2xl mt-6 text-gray-500 max-w-3xl text-center ">
          Get instant feedback and track your progress – all in one place
        </p>
        <Link href="/signup">
          <a className="bg-blue-600 shadow-sm text-xl leading-7 font-medium text-white px-6 py-4 rounded-md mt-8 md:mt-12">
            Get started for free
          </a>
        </Link>
        <small className="text-sm font-medium text-gray-400 mt-4">
          No credit card is required
        </small>
      </section>
      <section className="bg-gray-100 w-full flex-col flex items-center pt-10 md:pt-20 px-4">
        <Image
          src={'/images/hero-image.png'}
          alt="Picture of the editor"
          width={1440}
          height={838}
        />
      </section>
      <Footer classname="pt-10 md:pt-36 bg-gray-100" />
    </>
  );
}

export default Home;
