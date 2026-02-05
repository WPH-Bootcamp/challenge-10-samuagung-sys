// src/app/blog/[id]/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { getPostDetail } from "@/lib/api";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = await getPostDetail(Number(params.id));

  return {
    title: post.title,
    description: post.content
      .replace(/<[^>]+>/g, "")
      .slice(0, 150),
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getPostDetail(Number(params.id));

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold leading-tight">
          {post.title}
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          By {post.author.name} ·{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-xl">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
