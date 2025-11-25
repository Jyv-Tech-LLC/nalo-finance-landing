"use client";

import { useState } from "react";
import { Mail, Loader2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter, SubscribeOptions } from "@/lib/blog";

interface NewsletterProps {
  variant?: "default" | "inline" | "card";
  source?: SubscribeOptions["source"];
  className?: string;
}

export function Newsletter({ variant = "default", source = "footer", className = "" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const result = await subscribeToNewsletter({
        email,
        name: name || undefined,
        source,
      });
      setStatus("success");
      setMessage(result.message || "Thanks for subscribing!");
      setEmail("");
      setName("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border-2 border-border bg-background text-sm font-medium focus:outline-none focus:border-primary"
          required
          disabled={status === "loading" || status === "success"}
        />
        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === "success" ? (
            <Check className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  if (variant === "card") {
    return (
      <div className={`border-2 border-border p-6 bg-muted/30 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-black uppercase">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Get weekly finance tips</p>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 border-2 border-green-200">
            <Check className="h-5 w-5" />
            <span className="text-sm font-bold">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full px-4 py-3 border-2 border-border bg-background text-sm font-medium focus:outline-none focus:border-primary"
              disabled={status === "loading"}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-border bg-background text-sm font-medium focus:outline-none focus:border-primary"
              required
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              className="w-full font-black uppercase border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {status === "error" && (
              <p className="text-sm text-red-600">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Default full-width variant
  return (
    <section className={`bg-primary/5 border-y-4 border-primary py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Stay Financially Informed
          </h2>
          <p className="text-muted-foreground mb-8">
            Get weekly tips on budgeting, saving, investing, and building wealth in Nigeria.
            No spam, unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-4 border-2 border-green-200 max-w-md mx-auto">
              <Check className="h-6 w-6" />
              <span className="font-bold">{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="flex-1 px-6 py-4 border-2 border-black bg-background text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={status === "loading"}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-2 border-black bg-background text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  disabled={status === "loading"}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="font-black uppercase border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all px-8"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-600">{message}</p>
          )}

          <p className="mt-6 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}
