import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

function EmailSent() {
  const router = useRouter();

  const { user, verifyEmail: confirmEmail, error } = useAuth();

  useEffect(() => {
    if (user) router.push('/dashboard');
  }, [user]);

  if (user) return null;

  return (
    <>
      <Head>
        <title>Please confirm your email address</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex bg-gray-50 min-h-screen flex-col justify-center">
        <section className="bg-white px-20 py-16 rounded-xl mx-auto shadow-md border border-gray-200 w-full max-w-xl">
          <h2 className="text-left text-2xl font-semibold text-gray-700">
            Please confirm your email address
          </h2>
          <article className="mt-6 text-lg leading-relaxed space-y-5 ">
            <p className="text-gray-700">
              We have sent an email to the address you've provided. Hopefully,
              it will be delvered to your inbox, or spam folder if you are
              unlucky.
            </p>
            <p className="text-gray-700">
              If it has not arrived in 5-10 minutes then abandon all hope and{' '}
              <a
                className="text-blue-600 hover:underline"
                href="mailto:support@tryrewrite.com"
              >
                contact us
              </a>
              .
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default EmailSent;
