"use client";

import { useEffect } from "react";
import { trackView } from "@/lib/blog";

interface ViewTrackerProps {
  postId: string;
}

export function ViewTracker({ postId }: ViewTrackerProps) {
  useEffect(() => {
    // Track view after a short delay to avoid counting bounces
    const timer = setTimeout(() => {
      const referrer = document.referrer || undefined;
      trackView(postId, referrer);
    }, 2000);

    return () => clearTimeout(timer);
  }, [postId]);

  return null;
}
