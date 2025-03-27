// app/post/page.tsx
import Link from "next/link";

export default function PostPage() {
  const posts = [
    { slug: "post-1", title: "Bài viết 1" },
    { slug: "post-2", title: "Bài viết 2" },
  ];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}