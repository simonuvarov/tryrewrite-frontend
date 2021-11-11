import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

function EmailSent() {
  const router = useRouter()

  const { user, verifyEmail: confirmEmail, error } = useAuth()

  useEffect(() => {
    if (user) router.push('/dashboard')
  }, [user])

  if (user) return null

  return (
    <>
      <Head>
        <title>Please confirm your email address</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex min-h-screen flex-col justify-center bg-gray-50">
        <section className="mx-auto w-full max-w-xl rounded-xl border border-gray-200 bg-white px-20 py-16 shadow-md">
          <h2 className="text-left text-2xl font-semibold text-gray-700">
            Please confirm your email address
          </h2>
          <article className="mt-6 space-y-5 text-lg leading-relaxed ">
            <p className="text-gray-700">
              We have sent an email to the address you've provided. Hopefully,
              it will be delvered to your inbox, or spam folder if you are
              unlucky.
            </p>
            <p className="text-gray-700">
              If it has not arrived in 5-10 minutes then abandon all hope and{' '}
              <a
                className="text-blue-600 hover:underline"
                href="mailto:support@tryrewrite.com">
                contact us
              </a>
              .
            </p>
          </article>
        </section>
      </div>
    </>
  )
}

export default EmailSent
