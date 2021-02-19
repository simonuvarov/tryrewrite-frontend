import { GetStaticProps } from 'next';
import Link from 'next/link';
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
    props: { posts },
    revalidate: 600
  };
};

const IndexPage = (props: IndexPageProps) => (
  <ul>
    {props.posts.map(post => (
      <Link href={`/blog/${post.slug}`}>
        <a key={post.id}>
          <li>{post.title}</li>
        </a>
      </Link>
    ))}
  </ul>
);

export default IndexPage;
