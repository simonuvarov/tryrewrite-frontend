import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
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

export default IndexPage;
