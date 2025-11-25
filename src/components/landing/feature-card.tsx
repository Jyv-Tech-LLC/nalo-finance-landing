import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  accentColor?: "primary" | "success" | "warning" | "destructive";
}

export function FeatureCard({ icon: Icon, title, description, href, accentColor = "primary" }: FeatureCardProps) {
  const colorClasses = {
    primary: "border-t-primary bg-primary/5",
    success: "border-t-success bg-success/5",
    warning: "border-t-[var(--warning)] bg-[var(--warning)]/5",
    destructive: "border-t-destructive bg-destructive/5",
  };

  const iconColorClasses = {
    primary: "bg-primary/10 border-primary/20 text-primary",
    success: "bg-success/10 border-success/20 text-success",
    warning: "bg-[var(--warning)]/10 border-[var(--warning)]/20 text-[var(--warning)]",
    destructive: "bg-destructive/10 border-destructive/20 text-destructive",
  };

  const content = (
    <Card className={`border-t-4 ${colorClasses[accentColor]} hover:shadow-2xl transition-all duration-200 h-full ${href ? 'cursor-pointer group' : ''}`}>
      <CardContent className="p-6 space-y-4">
        <div className={`w-14 h-14 ${iconColorClasses[accentColor]} border-2 flex items-center justify-center`}>
          <Icon className="h-7 w-7" strokeWidth={3} />
        </div>

        <div>
          <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm font-bold text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {href && (
          <div className="flex items-center gap-2 text-sm font-black uppercase text-primary group-hover:gap-3 transition-all">
            Learn More
            <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
