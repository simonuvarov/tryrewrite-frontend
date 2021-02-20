import { NextSeo, NextSeoProps } from 'next-seo';
import Post from '../../types/Post';

interface SEOProps {
  post: Post;
}

export default function PostSeo(props: SEOProps) {
  const SeoConfig: NextSeoProps = {
    title: props.post.title,
    description: props.post.excerpt,
    openGraph: {
      title: props.post.title,
      description: props.post.excerpt,
      images: [{ url: props.post.feature_image, alt: props.post.title }],
      site_name: 'wriby.com',
      locale: 'en_US',
      type: 'article'
    }
  };

  return <NextSeo title={props.post.title} description={props.post.excerpt} />;
}
