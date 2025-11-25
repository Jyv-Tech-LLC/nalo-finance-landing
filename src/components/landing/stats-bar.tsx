import { Users, Shield, TrendingUp, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Nigerian Users",
    color: "primary",
  },
  {
    icon: Shield,
    value: "500+",
    label: "Ajo Groups Managed",
    color: "success",
  },
  {
    icon: TrendingUp,
    value: "₦2M+",
    label: "Saved in Taxes",
    color: "primary",
  },
  {
    icon: Zap,
    value: "15,000+",
    label: "Transactions Tracked",
    color: "success",
  },
];

export function StatsBar() {
  return (
    <section className="py-12 md:py-16 border-y-4 border-border bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isSuccess = stat.color === "success";

            return (
              <div key={index} className="text-center space-y-3">
                <div className={`w-16 h-16 mx-auto ${isSuccess ? 'bg-success/10 border-success/20' : 'bg-primary/10 border-primary/20'} border-2 flex items-center justify-center`}>
                  <Icon className={`h-8 w-8 ${isSuccess ? 'text-success' : 'text-primary'}`} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black">{stat.value}</p>
                  <p className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wide mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
