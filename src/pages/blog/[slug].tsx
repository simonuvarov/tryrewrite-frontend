import { GetStaticPaths } from 'next';
import React from 'react';
import Markdown from '../../components/blog/Markdown';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import htmlToMarkdown from '../../lib/htmlToMarkdown';
import { getPosts, getSinglePost } from '../../lib/posts';
import Post from '../../types/Post';

interface PageProps {
  post: Post;
}

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async (context: Params) => {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: { post },
    revalidate: 600
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts
    ? posts.map(post => ({
        params: { slug: post.slug }
      }))
    : [];

  return { paths, fallback: false };
};

const PostPage = (props: PageProps) => {
  return (
    <Layout>
      <Header />
      <Section>
        <article className="prose">
          <h1>{props.post.title}</h1>
          <Markdown>{htmlToMarkdown(props.post.html)}</Markdown>
        </article>
      </Section>
      <Footer />
    </Layout>
  );
};

export default PostPage;
