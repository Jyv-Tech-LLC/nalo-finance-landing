// Blog API client for fetching public blog data

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.nalofinance.com";
const API_PREFIX = "/api/v1";

// Types
export interface BlogAuthor {
  id: string;
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  color: string | null;
  _count?: {
    posts: number;
  };
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  contentJson: any;
  coverImage: string | null;
  coverImageAlt: string | null;
  status: string;
  isFeatured: boolean;
  isPinned: boolean;
  publishedAt: string | null;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  readTimeMinutes: number;
  wordCount: number;
  author: BlogAuthor;
  category: BlogCategory;
  tags: Array<{ tag: BlogTag }>;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  canonicalUrl: string | null;
  ogImage: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogComment {
  id: string;
  content: string;
  author: BlogAuthor | null;
  guestName: string | null;
  createdAt: string;
  replies?: BlogComment[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface QueryPostsParams {
  page?: number;
  limit?: number;
  categorySlug?: string;
  tagSlug?: string;
  search?: string;
  featured?: boolean;
}

// API Functions
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${API_PREFIX}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// Blog Posts
export async function getPosts(params?: QueryPostsParams): Promise<PaginatedResponse<BlogPost>> {
  const searchParams = new URLSearchParams();

  if (params?.page) searchParams.set("page", params.page.toString());
  if (params?.limit) searchParams.set("limit", params.limit.toString());
  if (params?.categorySlug) searchParams.set("categorySlug", params.categorySlug);
  if (params?.tagSlug) searchParams.set("tagSlug", params.tagSlug);
  if (params?.search) searchParams.set("search", params.search);
  if (params?.featured) searchParams.set("featured", "true");

  const query = searchParams.toString();
  return fetchApi<PaginatedResponse<BlogPost>>(`/blog/posts${query ? `?${query}` : ""}`);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await fetchApi<BlogPost>(`/blog/posts/${slug}`);
  } catch {
    return null;
  }
}

export async function getRelatedPosts(slug: string, limit = 4): Promise<BlogPost[]> {
  try {
    return await fetchApi<BlogPost[]>(`/blog/posts/${slug}/related?limit=${limit}`);
  } catch {
    return [];
  }
}

// Categories
export async function getCategories(): Promise<BlogCategory[]> {
  return fetchApi<BlogCategory[]>("/blog/categories");
}

export async function getCategoryBySlug(slug: string): Promise<BlogCategory | null> {
  try {
    return await fetchApi<BlogCategory>(`/blog/categories/${slug}`);
  } catch {
    return null;
  }
}

// Tags
export async function getTags(limit = 20): Promise<BlogTag[]> {
  return fetchApi<BlogTag[]>(`/blog/tags?limit=${limit}`);
}

export async function getTagBySlug(slug: string): Promise<BlogTag | null> {
  try {
    return await fetchApi<BlogTag>(`/blog/tags/${slug}`);
  } catch {
    return null;
  }
}

// Comments
export async function getComments(postId: string): Promise<BlogComment[]> {
  return fetchApi<BlogComment[]>(`/blog/posts/${postId}/comments`);
}

// Newsletter subscription options
export interface SubscribeOptions {
  email: string;
  name?: string;
  source?: "footer" | "sidebar" | "popup" | "post" | "homepage";
}

// Newsletter
export async function subscribeToNewsletter(options: SubscribeOptions): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}${API_PREFIX}/blog/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: options.email,
      name: options.name,
      source: options.source,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Failed to subscribe");
  }

  return { success: true, message: "Successfully subscribed to our newsletter!" };
}

// View tracking (client-side)
export async function trackView(postId: string, referrer?: string): Promise<{ viewId: string } | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${API_PREFIX}/blog/posts/${postId}/view`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ referrer }),
    });

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export async function trackShare(postId: string): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}${API_PREFIX}/blog/posts/${postId}/share`, {
      method: "POST",
    });
  } catch {
    // Silent fail for tracking
  }
}

// Sitemap data
export async function getSitemapData(): Promise<{ posts: Array<{ slug: string; updatedAt: string }> }> {
  return fetchApi<{ posts: Array<{ slug: string; updatedAt: string }> }>("/blog/sitemap.xml");
}

// Helper functions
export function getAuthorName(author: BlogAuthor | null, guestName?: string | null): string {
  if (author?.firstName || author?.lastName) {
    return `${author.firstName || ""} ${author.lastName || ""}`.trim();
  }
  return guestName || "Anonymous";
}

export function getAuthorInitials(author: BlogAuthor | null): string {
  const name = getAuthorName(author);
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function formatReadTime(minutes: number): string {
  if (minutes < 1) return "< 1 min read";
  return `${minutes} min read`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
