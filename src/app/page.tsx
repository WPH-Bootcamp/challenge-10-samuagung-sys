// src/app/page.tsx
import { getRecommendedPosts } from "@/lib/api";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Blog App",
  description: "Read the latest articles and insights from our blog",
};

export default async function HomePage() {
  const res = await getRecommendedPosts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        Blog
      </h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {res.data.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
