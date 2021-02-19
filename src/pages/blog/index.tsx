import { GetStaticProps } from 'next';
import Link from 'next/link';
import Container from '../../components/Container';
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
  <Section>
    <Container>
      {props.posts.map(post => (
        <Link href={`/blog/${post.slug}`}>
          <a key={post.id}>
            <li>{post.title}</li>
          </a>
        </Link>
      ))}
    </Container>
  </Section>
);

export default Blog;
