import { Leaf, Database, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-forest">
            <Leaf className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-forest bg-clip-text text-transparent">
              CarbonMRV
            </h1>
            <p className="text-xs text-muted-foreground">Environmental Monitoring Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" size="sm" className="gap-2">
            <Database className="h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Shield className="h-4 w-4" />
            Verification
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Connect Wallet
          </Button>
          <Button size="sm" className="bg-gradient-forest text-white hover:opacity-90">
            Upload Data
          </Button>
        </div>
      </div>
    </header>
  );
};