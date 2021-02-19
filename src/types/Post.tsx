interface Post {
  id: string;
  feature_image: string;
  title: string;
  slug: string;
  html: string;
  updated_at: Date;
  excerpt: string;
  featured: boolean;
}

export default Post;
