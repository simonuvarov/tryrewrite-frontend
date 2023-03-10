import { BannerBeta } from '../components/BannerBeta'
import { Button } from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Logo } from '../components/Logo'

function Home() {
  return (
    <div className="bg-gray-50">
      <BannerBeta />
      <Header>
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
      <main className="flex flex-col items-center px-4 pt-10 md:pt-20">
        <h1 className="max-w-md text-center text-3xl font-extrabold tracking-tight text-gray-800 md:text-5xl">
          Write. Check. Correct. Repeat.
        </h1>
        <p className="mt-6 max-w-md text-center text-lg font-medium text-gray-500 md:text-xl">
          Rewrite is an app that analyzes your IELTS essays and helps you
          improve your writing.
        </p>
        <Button
          href="/signup"
          size="lg"
          type="primary"
          className="mt-8 md:mt-12">
          Get started for free
        </Button>
        <small className="mt-2 text-sm font-medium text-gray-400">
          No credit card required.
        </small>
      </main>
      <section className="flex flex-col items-center px-4 pt-10 md:pt-20">
        <img
          src={'/images/hero-image.png'}
          alt="Picture of the editor"
          width={1440}
          height={838}
          className="w-full max-w-5xl"
        />
      </section>
      <Footer className="pt-10 md:pt-36" />
    </div>
  )
}

export default Home
