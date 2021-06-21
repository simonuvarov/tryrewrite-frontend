import Image from 'next/image';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Spinner } from '../components/Spinner';
import { useForceUnauth } from '../hooks/useForceUnauth';

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
        <Button
          href="/signup"
          size="xl"
          type="primary"
          className="mt-8 md:mt-12"
        >
          Get started for free
        </Button>

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
