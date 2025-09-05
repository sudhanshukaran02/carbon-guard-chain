import { Upload, Satellite, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-environmental.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Environmental monitoring satellite view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium border border-success/20">
                <Zap className="h-3 w-3" />
                Blockchain-Verified MRV System
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Monitor & Verify
                <span className="block bg-gradient-forest bg-clip-text text-transparent">
                  Carbon Impact
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Advanced satellite imagery analysis, NDVI calculation, and blockchain verification 
                for transparent environmental monitoring and carbon credit generation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-forest text-white hover:opacity-90 shadow-primary">
                <Upload className="h-4 w-4 mr-2" />
                Upload Imagery
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Satellite className="h-4 w-4 mr-2" />
                Fetch Satellite Data
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-primary transition-all duration-300 animate-slide-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <BarChart3 className="h-5 w-5 text-success" />
                </div>
                <h3 className="font-semibold">NDVI Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Real-time vegetation health monitoring with precise NDVI calculations
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover:shadow-secondary transition-all duration-300 animate-slide-up [animation-delay:100ms]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Satellite className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold">Satellite API</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automated data fetching from Sentinel-2, Landsat, and other sources
              </p>
            </Card>
            
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-warning/20 hover:shadow-soft transition-all duration-300 animate-slide-up [animation-delay:200ms] col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Zap className="h-5 w-5 text-warning" />
                </div>
                <h3 className="font-semibold">Blockchain Verification</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Tamper-proof environmental data storage with smart contract verification
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};