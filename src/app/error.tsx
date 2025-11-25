"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, AlertTriangle, Bug } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-destructive/10 rotate-12" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-destructive/5 -rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-4 border-destructive/10 rotate-45" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-destructive/10 -rotate-6" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[150px] font-black leading-none text-destructive/10 select-none">
              ERROR
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-destructive flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <AlertTriangle className="h-12 w-12 text-destructive-foreground" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg md:text-xl font-bold text-muted-foreground mb-4 max-w-md mx-auto">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-8 p-4 bg-destructive/10 border-4 border-destructive/30 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Bug className="h-4 w-4 text-destructive" strokeWidth={3} />
                <p className="text-xs font-black uppercase text-destructive">Error Details</p>
              </div>
              <p className="text-sm font-mono text-muted-foreground break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs font-mono text-muted-foreground mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={reset}
              className="w-full sm:w-auto font-black text-base px-8 bg-black text-white hover:bg-black/90 border-4 border-black shadow-[4px_4px_0px_0px_hsl(var(--destructive))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <RefreshCw className="mr-2 h-5 w-5" strokeWidth={3} />
              TRY AGAIN
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-black text-base px-8 border-4 border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Home className="mr-2 h-5 w-5" strokeWidth={3} />
                GO HOME
              </Button>
            </Link>
          </div>

          {/* Support Info */}
          <div className="p-6 bg-muted/30 border-4 border-border">
            <p className="text-sm font-black uppercase text-muted-foreground mb-2">Need Help?</p>
            <p className="text-sm font-bold text-muted-foreground mb-4">
              If this problem persists, please contact our support team.
            </p>
            <a
              href="mailto:hello@nalofinance.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-background border-2 border-primary text-primary text-sm font-black uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
