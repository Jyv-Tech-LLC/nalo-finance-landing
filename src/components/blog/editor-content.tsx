"use client";

import React from "react";
import Image from "next/image";

// Editor.js data structure (v2.31.0)
interface EditorJSData {
  time?: number;
  version?: string;
  blocks: EditorJSBlock[];
}

interface EditorJSBlock {
  id: string;
  type: string;
  data: any;
}

interface ListItem {
  content: string;
  items?: ListItem[];
  meta?: Record<string, any>;
}

interface EditorContentProps {
  content: EditorJSData;
  className?: string;
}

export function EditorContent({ content, className = "" }: EditorContentProps) {
  if (!content?.blocks?.length) return null;

  return (
    <div
      className={`prose prose-lg max-w-none
        prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
        prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900 prose-pre:text-gray-100
        prose-img:rounded-lg prose-img:border-2 prose-img:border-border
        prose-ul:list-disc prose-ol:list-decimal
        prose-li:text-muted-foreground
        ${className}`}
    >
      {content.blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: EditorJSBlock }) {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock data={block.data} />;

    case "header":
      return <HeaderBlock data={block.data} />;

    case "list":
      return <ListBlock data={block.data} />;

    case "image":
      return <ImageBlock data={block.data} />;

    case "code":
      return <CodeBlock data={block.data} />;

    case "quote":
      return <QuoteBlock data={block.data} />;

    case "delimiter":
      return <hr className="my-8 border-t-2 border-border" />;

    case "table":
      return <TableBlock data={block.data} />;

    default:
      // Log unknown block types in development
      if (process.env.NODE_ENV === "development") {
        console.warn(`Unknown Editor.js block type: ${block.type}`, block.data);
      }
      return null;
  }
}

// Paragraph block
function ParagraphBlock({ data }: { data: { text: string } }) {
  if (!data.text?.trim()) return null;
  return <p dangerouslySetInnerHTML={{ __html: data.text }} />;
}

// Header block (h1-h6)
function HeaderBlock({ data }: { data: { text: string; level: number } }) {
  const level = Math.min(Math.max(data.level || 2, 1), 6);
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return <Tag dangerouslySetInnerHTML={{ __html: data.text }} />;
}

// List block with nested item support
function ListBlock({
  data,
}: {
  data: { style: string; items: ListItem[] };
}) {
  const isOrdered = data.style === "ordered";

  const renderItems = (items: ListItem[], depth = 0): React.JSX.Element => {
    const Tag = isOrdered ? "ol" : "ul";

    return (
      <Tag className={depth > 0 ? "mt-2" : ""}>
        {items.map((item, idx) => (
          <li key={idx}>
            <span dangerouslySetInnerHTML={{ __html: item.content }} />
            {item.items && item.items.length > 0 && renderItems(item.items, depth + 1)}
          </li>
        ))}
      </Tag>
    );
  };

  return renderItems(data.items);
}

// Image block
function ImageBlock({
  data,
}: {
  data: {
    file: { url: string };
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
  };
}) {
  const imageUrl = data.file?.url;
  if (!imageUrl) return null;

  return (
    <figure
      className={`my-8 ${data.stretched ? "w-full" : ""} ${
        data.withBackground ? "bg-muted p-4 rounded-lg" : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt={data.caption || ""}
        width={800}
        height={450}
        className={`w-full h-auto ${data.withBorder ? "border-2 border-border" : ""}`}
        unoptimized={imageUrl.includes("cloudfront.net")}
      />
      {data.caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          {data.caption}
        </figcaption>
      )}
    </figure>
  );
}

// Code block
function CodeBlock({ data }: { data: { code: string } }) {
  if (!data.code?.trim()) return null;
  return (
    <pre className="overflow-x-auto">
      <code>{data.code}</code>
    </pre>
  );
}

// Quote block
function QuoteBlock({ data }: { data: { text: string; caption?: string } }) {
  return (
    <blockquote>
      <p dangerouslySetInnerHTML={{ __html: data.text }} />
      {data.caption && (
        <cite className="text-sm text-muted-foreground">— {data.caption}</cite>
      )}
    </blockquote>
  );
}

// Table block
function TableBlock({
  data,
}: {
  data: { withHeadings?: boolean; content: string[][] };
}) {
  if (!data.content?.length) return null;

  const hasHeadings = data.withHeadings && data.content.length > 1;
  const headers = hasHeadings ? data.content[0] : null;
  const rows = hasHeadings ? data.content.slice(1) : data.content;

  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse border-2 border-border">
        {headers && (
          <thead>
            <tr className="bg-muted">
              {headers.map((cell, idx) => (
                <th
                  key={idx}
                  className="border-2 border-border px-4 py-2 text-left font-black uppercase text-sm"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? "" : "bg-muted/30"}>
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="border-2 border-border px-4 py-2 text-sm"
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
