import { load, trackPageview } from 'fathom-client';
import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import DefaultSeo from '../components/DefaultSeo';
import '../css/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    load('GMFCIHSN', {
      includedDomains: ['wriby.com']
    });

    function onRouteChangeComplete() {
      trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <DefaultSeo />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
