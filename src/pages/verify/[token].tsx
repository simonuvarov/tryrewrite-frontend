import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

function EmailConfirmation() {
  const router = useRouter();

  const { user, verifyEmail: confirmEmail, error } = useAuth();

  const { token } = router.query;

  useEffect(() => {
    if (user) router.push('/dashboard');
  }, [user]);

  useEffect(() => {
    confirmEmail(token as string);
  }, []);

  useEffect(() => {
    if (error) alert('We were not able to confirm your email');
  }, [error]);

  return (
    <Head>
      <title>We are confirming your email</title>
      <meta name="robots" content="noindex" />
    </Head>
  );
}

export default EmailConfirmation;
