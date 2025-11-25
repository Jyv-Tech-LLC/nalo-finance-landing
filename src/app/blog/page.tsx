import { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { getPosts, getCategories, getTags } from "@/lib/blog";
import { PostCard, Sidebar, Newsletter } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog - Financial Tips & Insights",
  description:
    "Expert advice on personal finance, budgeting, taxes, investing, and building wealth in Nigeria. Learn from the Nalo Finance team.",
  openGraph: {
    title: "Blog - Financial Tips & Insights | Nalo Finance",
    description:
      "Expert advice on personal finance, budgeting, taxes, investing, and building wealth in Nigeria.",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string; search?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const search = params.search || "";

  // Fetch data in parallel
  const [postsData, categories, tags] = await Promise.all([
    getPosts({ page, limit: 9, search: search || undefined }),
    getCategories(),
    getTags(15),
  ]);

  const { data: posts, pagination } = postsData;

  // Get featured posts (first page only)
  const featuredPosts = page === 1 ? posts.filter((p) => p.isFeatured).slice(0, 1) : [];
  const regularPosts = page === 1 ? posts.filter((p) => !featuredPosts.includes(p)) : posts;

  // Get popular posts for sidebar
  const popularPosts = posts.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 border-b-4 border-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-black uppercase bg-primary text-primary-foreground mb-4">
              Nalo Finance Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              Financial Tips & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert advice on personal finance, budgeting, taxes, investing, and building wealth in Nigeria.
              Stay informed with the latest financial trends and strategies.
            </p>

            {/* Search */}
            <form action="/blog" method="get" className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  name="search"
                  defaultValue={search}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-black bg-background font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-black uppercase border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      {categories.length > 0 && (
        <section className="border-b-2 border-border py-4 overflow-x-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 min-w-max">
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-black uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 text-sm font-black uppercase hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {search && (
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing results for <span className="font-bold text-foreground">&quot;{search}&quot;</span>
                {pagination.total > 0 && ` (${pagination.total} articles found)`}
              </p>
              <Link href="/blog" className="text-primary font-bold text-sm hover:underline">
                Clear search
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              {posts.length === 0 ? (
                <div className="text-center py-16 border-2 border-dashed border-border">
                  <h2 className="text-xl font-black uppercase mb-2">No articles found</h2>
                  <p className="text-muted-foreground mb-4">
                    {search
                      ? "Try adjusting your search terms"
                      : "Check back soon for new content"}
                  </p>
                  {search && (
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      View all articles
                    </Link>
                  )}
                </div>
              ) : (
                <>
                  {/* Featured Post */}
                  {featuredPosts.length > 0 && (
                    <div className="mb-8">
                      <PostCard post={featuredPosts[0]} featured />
                    </div>
                  )}

                  {/* Regular Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {regularPosts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && (
                    <div className="flex items-center justify-between mt-12 pt-8 border-t-2 border-border">
                      <div className="text-sm text-muted-foreground">
                        Page {pagination.page} of {pagination.totalPages}
                      </div>
                      <div className="flex gap-2">
                        {pagination.page > 1 && (
                          <Link
                            href={`/blog?page=${pagination.page - 1}${search ? `&search=${search}` : ""}`}
                            className="px-4 py-2 border-2 border-border font-bold text-sm hover:border-primary hover:bg-primary/5 transition-colors flex items-center gap-2"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Previous
                          </Link>
                        )}
                        {pagination.page < pagination.totalPages && (
                          <Link
                            href={`/blog?page=${pagination.page + 1}${search ? `&search=${search}` : ""}`}
                            className="px-4 py-2 border-2 border-primary bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
                          >
                            Next
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar
                categories={categories}
                tags={tags}
                popularPosts={popularPosts}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter source="footer" />
    </div>
  );
}
