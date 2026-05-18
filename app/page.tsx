import { getRecentPosts } from "@/lib/posts";
import Hero from "@/components/Hero";

export default function Home() {
  const posts = getRecentPosts(4);
  return <Hero posts={posts} />;
}
