import Link from "next/link";
import { FolderOpen, Tag, TrendingUp, ArrowRight } from "lucide-react";
import { BlogCategory, BlogTag, BlogPost } from "@/lib/blog";
import { PostCardCompact } from "./post-card";
import { Newsletter } from "./newsletter";

interface SidebarProps {
  categories?: BlogCategory[];
  tags?: BlogTag[];
  popularPosts?: BlogPost[];
  currentCategory?: string;
  currentTag?: string;
}

export function Sidebar({
  categories = [],
  tags = [],
  popularPosts = [],
  currentCategory,
  currentTag,
}: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      {categories.length > 0 && (
        <div className="border-2 border-border">
          <div className="flex items-center gap-3 p-4 border-b-2 border-border bg-muted/30">
            <FolderOpen className="h-5 w-5 text-primary" />
            <h3 className="font-black uppercase">Categories</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className={`flex items-center justify-between py-2 px-3 text-sm font-medium transition-colors ${
                      currentCategory === category.slug
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.color && (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                      )}
                      {category.name}
                    </span>
                    {category._count && (
                      <span className="text-xs opacity-70">
                        {category._count.posts}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <Newsletter variant="card" source="sidebar" />

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <div className="border-2 border-border">
          <div className="flex items-center gap-3 p-4 border-b-2 border-border bg-muted/30">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-black uppercase">Popular Posts</h3>
          </div>
          <div className="p-4 space-y-4">
            {popularPosts.slice(0, 4).map((post) => (
              <PostCardCompact key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="border-2 border-border">
          <div className="flex items-center gap-3 p-4 border-b-2 border-border bg-muted/30">
            <Tag className="h-5 w-5 text-primary" />
            <h3 className="font-black uppercase">Tags</h3>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className={`inline-flex items-center px-3 py-1 text-xs font-bold transition-colors ${
                    currentTag === tag.slug
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-primary/10"
                  }`}
                >
                  #{tag.name}
                  <span className="ml-1 opacity-50">({tag.postCount})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="border-2 border-primary bg-primary/5 p-6">
        <h3 className="font-black uppercase text-lg mb-2">Start Your Journey</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Take control of your finances with Nalo Finance - Nigeria&apos;s all-in-one personal finance platform.
        </p>
        <Link
          href="https://app.nalofinance.com/register"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-black uppercase text-sm border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
