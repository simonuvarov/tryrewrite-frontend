import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DefaultSeo from '../components/DefaultSeo';
import { AuthProvider } from '../contexts/AuthContext';
import '../css/tailwind.css';
import analyticsService from '../services/analytics.service';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    analyticsService.initAnalytics();
  }, []);
  return (
    <>
      <DefaultSeo />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
