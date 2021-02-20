import { NextSeo, NextSeoProps } from 'next-seo';

interface PageSeoProps {
  title: string;
  description: string;
}

export default function PageSeo(props: PageSeoProps) {
  const seoConfig: NextSeoProps = {
    title: props.title,
    description: props.title,
    openGraph: {
      title: props.title,
      description: props.description,
      site_name: 'wriby.com',
      locale: 'en_US'
    }
  };
  return <NextSeo {...seoConfig} />;
}
