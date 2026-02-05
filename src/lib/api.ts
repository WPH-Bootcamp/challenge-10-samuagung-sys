// src/lib/api.ts
import { BlogListResponse, BlogPost } from "@/types/blog";

// ❗ FIX: BASE_URL TANPA /api
const BASE_URL = "https://be-blg-production.up.railway.app";

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("API ERROR:", res.status, text);
    throw new Error(`API Error ${res.status}`);
  }

  return res.json();
}

export function getRecommendedPosts(): Promise<BlogListResponse> {
  return fetchJSON(`${BASE_URL}/posts/recommended`);
}

export function getMostLikedPosts(): Promise<BlogListResponse> {
  return fetchJSON(`${BASE_URL}/posts/most-liked`);
}

export function getPostDetail(id: number): Promise<BlogPost> {
  return fetchJSON(`${BASE_URL}/posts/${id}`);
}
