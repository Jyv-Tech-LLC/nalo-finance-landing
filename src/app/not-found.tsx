import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary/10 rotate-12" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/5 -rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-4 border-primary/10 rotate-45" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-destructive/10 -rotate-6" />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-destructive/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="relative mb-8">
            <div className="text-[150px] md:text-[200px] font-black leading-none text-muted/20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-destructive flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <AlertCircle className="h-12 w-12 text-destructive-foreground" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl font-bold text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button
                size="lg"
                className="w-full sm:w-auto font-black text-base px-8 bg-black text-white hover:bg-black/90 border-4 border-black shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Home className="mr-2 h-5 w-5" strokeWidth={3} />
                GO HOME
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-black text-base px-8 border-4 border-border hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Search className="mr-2 h-5 w-5" strokeWidth={3} />
                VIEW PRICING
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="p-6 bg-muted/30 border-4 border-border">
            <p className="text-sm font-black uppercase text-muted-foreground mb-4">Popular Pages</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Ajo Groups", href: "/features/ajo-groups" },
                { name: "Tax Center", href: "/features/tax-center" },
                { name: "Budgeting", href: "/features/budgeting" },
                { name: "Smart Goals", href: "/features/smart-goals" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-background border-2 border-border hover:border-primary hover:text-primary text-sm font-black uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
