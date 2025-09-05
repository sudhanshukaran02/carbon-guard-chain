import { useState } from "react";
import { Upload, FileText, Image, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
      toast({
        title: "Files uploaded",
        description: `${newFiles.length} file(s) ready for analysis`,
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      toast({
        title: "Files uploaded",
        description: `${newFiles.length} file(s) ready for analysis`,
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upload Environmental Data</h2>
            <p className="text-muted-foreground">
              Upload satellite imagery, drone photos, or fetch data directly from satellite APIs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <Card className="p-8">
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept=".tiff,.tif,.jpg,.jpeg,.png,.geotiff"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-forest rounded-xl flex items-center justify-center">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Drop files here or click to browse</h3>
                    <p className="text-sm text-muted-foreground">
                      Supports GeoTIFF, JPEG, PNG formats
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Select Files
                  </Button>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h4 className="font-medium text-sm">Uploaded Files:</h4>
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <FileText className="h-4 w-4 text-primary" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Satellite API */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-ocean rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Fetch Satellite Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Get imagery from Sentinel-2, Landsat APIs
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="latitude">Latitude</Label>
                      <Input 
                        id="latitude"
                        placeholder="e.g., -10.4567"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="longitude">Longitude</Label>
                      <Input 
                        id="longitude"
                        placeholder="e.g., 105.6789"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date-range">Date Range</Label>
                    <Input 
                      id="date-range"
                      type="date"
                      className="mt-1"
                    />
                  </div>

                  <Button className="w-full bg-gradient-ocean text-white hover:opacity-90">
                    <MapPin className="h-4 w-4 mr-2" />
                    Fetch Satellite Data
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Analysis Options */}
          <Card className="mt-8 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Ready to Analyze</h3>
                <p className="text-sm text-muted-foreground">
                  {files.length > 0 
                    ? `${files.length} file(s) uploaded and ready for NDVI analysis`
                    : "Upload files or fetch satellite data to begin analysis"
                  }
                </p>
              </div>
              <Button 
                size="lg" 
                disabled={files.length === 0}
                className="bg-gradient-forest text-white hover:opacity-90"
              >
                <Image className="h-4 w-4 mr-2" />
                Start Analysis
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};