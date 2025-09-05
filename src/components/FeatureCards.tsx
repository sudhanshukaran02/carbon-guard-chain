import { Upload, Satellite, Calculator, LineChart, Users, Shield, Download, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Upload,
    title: "Image Upload",
    description: "Upload drone or satellite imagery (GeoTIFF, JPEG, PNG) for environmental analysis",
    gradient: "bg-gradient-forest",
    action: "Upload Files"
  },
  {
    icon: Satellite,
    title: "Satellite API Integration",
    description: "Fetch real-time imagery from Sentinel-2, Landsat, and Planet APIs by coordinates",
    gradient: "bg-gradient-ocean",
    action: "Fetch Data"
  },
  {
    icon: Calculator,
    title: "NDVI Calculation",
    description: "Automated vegetation health analysis with precise NDVI and biomass calculations",
    gradient: "bg-gradient-earth",
    action: "Calculate NDVI"
  },
  {
    icon: LineChart,
    title: "Time-Series Analysis",
    description: "Monitor vegetation changes over time with before/after restoration comparisons",
    gradient: "bg-gradient-forest",
    action: "View Trends"
  },
  {
    icon: Shield,
    title: "Blockchain Verification",
    description: "Tamper-proof data storage with cryptographic hashing on Ethereum/Polygon",
    gradient: "bg-gradient-ocean",
    action: "Verify Data"
  },
  {
    icon: Calculator,
    title: "Carbon Credit Calculator",
    description: "Estimate potential carbon credits and revenue from sequestration projects",
    gradient: "bg-gradient-earth",
    action: "Calculate Credits"
  },
  {
    icon: Users,
    title: "Community Dashboard",
    description: "Aggregate multiple projects to show regional environmental impact",
    gradient: "bg-gradient-forest",
    action: "View Dashboard"
  },
  {
    icon: Download,
    title: "MRV Reports",
    description: "Generate comprehensive PDF/CSV reports for regulatory compliance",
    gradient: "bg-gradient-ocean",
    action: "Generate Report"
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-20 bg-gradient-sky">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Complete MRV Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From data collection to blockchain verification, everything you need for 
            transparent environmental monitoring and carbon credit generation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-primary hover:bg-primary/5 group-hover:translate-x-1 transition-transform"
                  >
                    {feature.action}
                    <MapPin className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};