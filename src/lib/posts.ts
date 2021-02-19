import GhostContentAPI from '@tryghost/content-api';

// TODO: move env vars to config
const api = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_KEY!,
  version: 'v3'
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}
