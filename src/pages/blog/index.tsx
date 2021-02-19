import moment from 'moment';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Container from '../../components/Container';
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
  <Layout>
    <Header />
    <Section>
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {props.posts.map(post => (
            <div className="rounded hover:bg-gray-100">
              <Link href={`/blog/${post.slug}`}>
                <a key={post.id}>
                  <img src={post.feature_image} />
                  <h2 className="text-lg font-medium mt-4 text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-500">{post.excerpt}</p>
                  <p className="text-sm pt-2 text-gray-400">
                    {`Updated ${moment(post.updated_at).fromNow()}`}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  </Layout>
);

export default Blog;
