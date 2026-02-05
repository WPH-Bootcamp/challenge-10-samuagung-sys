// src/types/blog.ts

export interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string; // HTML string
  tags: string[];
  imageUrl: string;
  imagePublicId: string;
  createdAt: string;
  likes: number;
  comments: number;
  author: Author;
}

export interface BlogListResponse {
  data: BlogPost[];
  total: number;
  page: number;
  lastPage: number;
}
