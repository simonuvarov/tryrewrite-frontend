import moment from 'moment';
import Link from 'next/link';
import Post from '../../types/Post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        key={post.id}
        className="bg-white rounded-lg pb-6 border border-gray-100 cursor-pointer"
      >
        <img
          src={post.feature_image}
          className="h-48 w-full object-cover rounded-t-lg"
        />
        <div className="mx-6">
          <a>
            <h2 className="text-xl font-medium mt-4 text-gray-800">
              {post.title}
            </h2>
          </a>
          <p className="text-gray-600 mt-2">{post.excerpt}</p>
          <p className="text-sm pt-3 text-gray-400">
            {`Updated ${moment(post.updated_at).fromNow()}`}
          </p>
        </div>
      </div>
    </Link>
  );
}
