import { DefaultSeo as DefaultNextSeo, NextSeoProps } from 'next-seo';

export default function DefaultSeo() {
  const TITLE = 'Wriby – The Essay Writing Toolkit';
  const DESCRIPTON =
    'Find topics, check grammar, and see your progress – all in one place.';

  const SeoConfig: NextSeoProps = {
    title: TITLE,
    description: DESCRIPTON,
    openGraph: {
      title: TITLE,
      description: DESCRIPTON,
      images: [],
      site_name: 'Wriby',
      locale: 'en_US'
    }
  };
  return <DefaultNextSeo {...SeoConfig} />;
}
