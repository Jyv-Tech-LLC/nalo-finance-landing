import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Eye, Heart, ArrowRight } from "lucide-react";
import { BlogPost, formatDate, formatReadTime, getAuthorName } from "@/lib/blog";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={`group relative bg-background border-2 border-border hover:border-primary transition-all duration-300 ${
        featured
          ? "md:col-span-2 md:flex"
          : ""
      }`}
    >
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className={`block relative overflow-hidden ${
          featured
            ? "md:w-1/2 aspect-video md:aspect-auto"
            : "aspect-video"
        }`}
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-4xl font-black text-primary/30">N</span>
          </div>
        )}

        {/* Category Badge */}
        {post.category && (
          <span
            className="absolute top-4 left-4 px-3 py-1 text-xs font-black uppercase bg-primary text-primary-foreground"
            style={post.category.color ? { backgroundColor: post.category.color } : undefined}
          >
            {post.category.name}
          </span>
        )}

        {/* Featured Badge */}
        {post.isFeatured && (
          <span className="absolute top-4 right-4 px-3 py-1 text-xs font-black uppercase bg-black text-white">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className={`p-6 ${featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt || post.createdAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {formatReadTime(post.readTimeMinutes)}
          </span>
        </div>

        {/* Title */}
        <h2
          className={`font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className={`text-muted-foreground mb-4 line-clamp-2 ${featured ? "text-base" : "text-sm"}`}>
            {post.excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          {/* Author */}
          <div className="flex items-center gap-2">
            {post.author?.profilePicture ? (
              <Image
                src={post.author.profilePicture}
                alt={getAuthorName(post.author)}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                {getAuthorName(post.author).charAt(0)}
              </div>
            )}
            <span className="text-sm font-bold">{getAuthorName(post.author)}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {post.viewCount}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              {post.likeCount}
            </span>
          </div>
        </div>

        {/* Read More Arrow */}
        <Link
          href={`/blog/${post.slug}`}
          className="absolute bottom-6 right-6 w-10 h-10 border-2 border-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

// Compact version for sidebar/related posts
export function PostCardCompact({ post }: { post: BlogPost }) {
  return (
    <article className="group flex gap-4">
      <Link href={`/blog/${post.slug}`} className="relative shrink-0 w-20 h-20 overflow-hidden border-2 border-border">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
        )}
      </Link>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
          <span>{formatDate(post.publishedAt || post.createdAt)}</span>
          <span>·</span>
          <span>{formatReadTime(post.readTimeMinutes)}</span>
        </div>
      </div>
    </article>
  );
}
