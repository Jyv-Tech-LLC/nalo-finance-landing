"use client";

import { useState } from "react";
import { Share2, Twitter, Facebook, Linkedin, Link, Check } from "lucide-react";
import { trackShare } from "@/lib/blog";

interface ShareButtonsProps {
  url: string;
  title: string;
  postId: string;
}

export function ShareButtons({ url, title, postId }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleShare = (platform: string) => {
    trackShare(postId);
    window.open(shareLinks[platform as keyof typeof shareLinks], "_blank", "width=600,height=400");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackShare(postId);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold text-muted-foreground flex items-center gap-2">
        <Share2 className="h-4 w-4" />
        Share:
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleShare("twitter")}
          className="w-10 h-10 flex items-center justify-center border-2 border-border hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
          title="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleShare("facebook")}
          className="w-10 h-10 flex items-center justify-center border-2 border-border hover:border-[#4267B2] hover:bg-[#4267B2] hover:text-white transition-colors"
          title="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleShare("linkedin")}
          className="w-10 h-10 flex items-center justify-center border-2 border-border hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
          title="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </button>
        <button
          onClick={copyToClipboard}
          className={`w-10 h-10 flex items-center justify-center border-2 transition-colors ${
            copied
              ? "border-green-500 bg-green-500 text-white"
              : "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
          }`}
          title={copied ? "Copied!" : "Copy link"}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

// Floating share bar for mobile
export function FloatingShare({ url, title, postId }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        trackShare(postId);
      } catch {
        // User cancelled or error
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackShare(postId);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      {isOpen && !navigator.share && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#1DA1F2] text-white shadow-lg"
            onClick={() => trackShare(postId)}
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#4267B2] text-white shadow-lg"
            onClick={() => trackShare(postId)}
          >
            <Facebook className="h-5 w-5" />
          </a>
          <button
            onClick={copyToClipboard}
            className={`w-12 h-12 flex items-center justify-center shadow-lg ${
              copied ? "bg-green-500" : "bg-gray-800"
            } text-white`}
          >
            {copied ? <Check className="h-5 w-5" /> : <Link className="h-5 w-5" />}
          </button>
        </div>
      )}
      <button
        onClick={handleNativeShare}
        className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground shadow-lg border-2 border-black"
      >
        <Share2 className="h-6 w-6" />
      </button>
    </div>
  );
}
