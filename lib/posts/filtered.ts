import { getPosts } from "./posts"

export async function getFilteredPosts(
    rootPath: string = "/content/posts", count: number = -1,
    tags: string[] = []
  ) {
  
  let posts = await getPosts(rootPath);

  // filter tags
  if (tags.length > 0) {
    posts = posts.filter(post => {
      if (!post?.meta.tags) return false;
      for (const tag in post?.meta.tags) {
        if (tags.includes(tag)) return true;
      }
      return false;
    })
  }

  // sort by date
  console.log(posts);

  posts.sort((a, b) => a?.meta.publishedAt! < b?.meta.publishedAt! ? 1 : -1)

  console.log(posts);

  // filter count
  if (count > 0) {
    return posts.slice(count);
  } else {
    return posts;
  }
}