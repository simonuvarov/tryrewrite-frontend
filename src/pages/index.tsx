import Image from 'next/image'
import { BannerBeta } from '../components/BannerBeta'
import { Button } from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Logo } from '../components/Logo'

export function Home() {
  return (
    <>
      <BannerBeta />
      <Header className="bg-gray-50">
        <Logo />
        <nav className="flex items-center space-x-3">
          <Button href="/signin" type="ghost" size="md">
            Sign in
          </Button>
          <Button href="/signup" type="primary" size="md">
            Sign up
          </Button>
        </nav>
      </Header>
      <section className="flex w-full flex-col items-center bg-gray-50 px-4 pt-10 md:pt-20">
        <h1 className="max-w-xl text-center text-4xl font-extrabold tracking-tight text-gray-800 md:text-7xl ">
          Write. Check. Correct. Repeat.
        </h1>
        <p className="mt-6 max-w-2xl text-center text-lg text-gray-500 md:text-2xl ">
          Rewrite is an app that analyzes your IELTS essays and helps you
          improve your writing
        </p>
        <Button
          href="/signup"
          size="xl"
          type="primary"
          className="mt-8 md:mt-12">
          Get started for free
        </Button>

        <small className="mt-4 text-sm font-medium text-gray-400">
          No credit card is required
        </small>
      </section>
      <section className="flex w-full flex-col items-center bg-gray-50 px-4 pt-10 md:pt-20">
        <Image
          src={'/images/hero-image.png'}
          alt="Picture of the editor"
          width={1440}
          height={838}
        />
      </section>
      <Footer classname="pt-10 md:pt-36 bg-gray-50" />
    </>
  )
}

export default Home
