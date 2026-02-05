// src/components/ArticleCard.tsx
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function ArticleCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="group cursor-pointer overflow-hidden rounded-xl border bg-white transition hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="space-y-2 p-4">
          <h2 className="line-clamp-2 text-lg font-semibold">
            {post.title}
          </h2>

          <p className="text-sm text-gray-500">
            By {post.author.name}
          </p>

          <div className="text-sm text-gray-600">
            ❤️ {post.likes} · 💬 {post.comments}
          </div>
        </div>
      </article>
    </Link>
  );
}
