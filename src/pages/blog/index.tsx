import { GetStaticProps } from 'next';
import { getPosts } from '../../lib/posts';

interface PageProps {
  slug: string;
  posts: Post[];
}

interface Post {
  id: string;
  title: string;
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

const IndexPage = (props: PageProps) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

export default IndexPage;
