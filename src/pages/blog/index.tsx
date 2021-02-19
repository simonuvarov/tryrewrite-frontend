import { GetStaticProps } from 'next';
import { getPosts } from '../../lib/posts';

interface IndexPageProps {
  posts: Post[];
}

interface Post {
  id: string;
  title: string;
  slug: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: { posts }
  };
};

const IndexPage = (props: IndexPageProps) => (
  <ul>
    {props.posts.map(post => (
      <a href={`/blog/${post.slug}`}>
        <li key={post.id}>{post.title}</li>
      </a>
    ))}
  </ul>
);

export default IndexPage;
