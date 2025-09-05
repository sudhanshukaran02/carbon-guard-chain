import { TrendingUp, Database, Zap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Database,
    label: "Projects Monitored",
    value: "1,247",
    change: "+23% this month",
    gradient: "bg-gradient-forest"
  },
  {
    icon: TrendingUp,
    label: "Carbon Sequestered",
    value: "45.2K",
    suffix: "tCO₂",
    change: "+12% this quarter",
    gradient: "bg-gradient-ocean"
  },
  {
    icon: Zap,
    label: "Verified Transactions",
    value: "8,931",
    change: "100% verified",
    gradient: "bg-gradient-earth"
  },
  {
    icon: Globe,
    label: "Countries Covered",
    value: "67",
    change: "Across 5 continents",
    gradient: "bg-gradient-forest"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="p-6 bg-card border-border/50 hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.gradient} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl lg:text-3xl font-bold text-card-foreground">
                        {stat.value}
                      </span>
                      {stat.suffix && (
                        <span className="text-sm text-muted-foreground">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xs text-success">
                      {stat.change}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};