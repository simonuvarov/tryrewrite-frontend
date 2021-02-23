import { GetStaticPaths } from 'next';
import React from 'react';
import Markdown from '../../components/blog/Markdown';
import PostSeo from '../../components/blog/PostSeo';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
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

  return { paths, fallback: 'blocking' };
};

const PostPage = (props: PageProps) => {
  return (
    <>
      <PostSeo post={props.post} />
      <Header />
      <Layout>
        <article className="prose lg:prose-lg mt-12">
          <h1>{props.post.title}</h1>
          <Markdown>{htmlToMarkdown(props.post.html)}</Markdown>
        </article>
        <Footer />
      </Layout>
    </>
  );
};

export default PostPage;
