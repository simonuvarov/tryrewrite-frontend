import { GetStaticPaths } from 'next';
import { getPosts, getSinglePost } from '../../lib/posts';

interface PageProps {
  post: Post;
}

interface Post {
  id: string;
  title: string;
  html: string;
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
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
  );
};

export default PostPage;
