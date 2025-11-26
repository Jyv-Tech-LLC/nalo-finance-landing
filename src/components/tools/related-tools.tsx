import Link from "next/link";
import {
  Calculator,
  Building2,
  Bitcoin,
  Receipt,
  ArrowRight
} from "lucide-react";

type ToolKey = "pit" | "cit" | "crypto" | "wht";

const tools: Record<ToolKey, {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}> = {
  pit: {
    name: "PIT Calculator",
    description: "Personal income tax with 2026 rates",
    href: "/tools/pit-calculator",
    icon: Calculator,
    color: "text-primary",
    bgColor: "bg-primary/10 border-primary/30",
  },
  cit: {
    name: "CIT Calculator",
    description: "Company income tax & SME exemption",
    href: "/tools/cit-calculator",
    icon: Building2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10 border-blue-500/30",
  },
  crypto: {
    name: "Crypto Calculator",
    description: "Bitcoin & cryptocurrency CGT",
    href: "/tools/crypto-calculator",
    icon: Bitcoin,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10 border-orange-500/30",
  },
  wht: {
    name: "WHT Calculator",
    description: "Withholding tax on payments",
    href: "/tools/wht-calculator",
    icon: Receipt,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10 border-purple-500/30",
  },
};

interface RelatedToolsProps {
  currentTool: ToolKey;
}

export function RelatedTools({ currentTool }: RelatedToolsProps) {
  const relatedTools = (Object.keys(tools) as ToolKey[]).filter(
    (key) => key !== currentTool
  );

  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
        Related Tax Tools
      </h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {relatedTools.map((key) => {
          const tool = tools[key];
          const Icon = tool.icon;

          return (
            <Link
              key={key}
              href={tool.href}
              className="group p-4 bg-background border-2 border-border hover:border-current transition-all"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${tool.bgColor} border-2 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`h-5 w-5 ${tool.color}`} strokeWidth={3} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black uppercase text-sm group-hover:text-current transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-xs font-bold text-muted-foreground mt-1 line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight
                  className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  strokeWidth={3}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase hover:text-primary transition-colors"
        >
          View All Free Tools
          <ArrowRight className="h-4 w-4" strokeWidth={3} />
        </Link>
      </div>
    </div>
  );
}
