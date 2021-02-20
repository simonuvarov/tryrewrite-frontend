import { GetStaticProps } from 'next';
import { PostCard } from '../../components/blog/PostCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { getPosts } from '../../lib/posts';
import Post from '../../types/Post';

interface BlogProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: { posts },
    revalidate: 600
  };
};

const Blog = (props: BlogProps) => (
  <>
    <Layout>
      <Header />
      <Section>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {props.posts.map(post => (
            <PostCard post={post} />
          ))}
        </div>
      </Section>
      <Footer />
    </Layout>
  </>
);

export default Blog;
