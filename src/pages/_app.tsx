import { load, trackPageview } from 'fathom-client';
import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DefaultSeo from '../components/DefaultSeo';
import '../css/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    load('FTQRLWBI', {
      includedDomains: ['wriby.com']
    });

    function onRouteChangeComplete() {
      trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}

export default App;
