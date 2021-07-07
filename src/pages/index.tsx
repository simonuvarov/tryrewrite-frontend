import Image from 'next/image';
import { BannerBeta } from '../components/BannerBeta';
import { Button } from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Logo } from '../components/Logo';

export function Home() {
  return (
    <>
      <BannerBeta />
      <Header className="bg-gray-50">
        <Logo />
        <nav className="flex space-x-3 items-center">
          <Button href="/signin" type="ghost" size="md">
            Sign in
          </Button>
          <Button href="/signup" type="primary" size="md">
            Sign up
          </Button>
        </nav>
      </Header>
      <section className="bg-gray-50 w-full px-4 flex flex-col items-center pt-10 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-800 max-w-xl text-center ">
          Write. Check. Correct. Repeat.
        </h1>
        <p className="text-lg md:text-2xl mt-6 text-gray-500 max-w-2xl text-center ">
          Rewrite is an app that analyzes your IELTS essays and helps you
          improve your writing
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
      <section className="bg-gray-50 w-full flex-col flex items-center pt-10 md:pt-20 px-4">
        <Image
          src={'/images/hero-image.png'}
          alt="Picture of the editor"
          width={1440}
          height={838}
        />
      </section>
      <Footer classname="pt-10 md:pt-36 bg-gray-50" />
    </>
  );
}

export default Home;
