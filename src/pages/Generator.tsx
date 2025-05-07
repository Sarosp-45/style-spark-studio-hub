
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Image, Wand2 } from "lucide-react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationResults, setGenerationResults] = useState<string[]>([]);
  
  const handleGenerate = () => {
    if (!prompt) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationResults([
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
      ]);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Sketch Generator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Create New Sketch</CardTitle>
            <CardDescription>
              Describe the garment you want to create
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="text" className="flex-1">Text Prompt</TabsTrigger>
                <TabsTrigger value="upload" className="flex-1">Upload Reference</TabsTrigger>
              </TabsList>
              <TabsContent value="text" className="pt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Describe your design</Label>
                  <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A summer dress with floral patterns, sleeveless, knee length..."
                    className="min-h-[120px]"
                  />
                </div>
              </TabsContent>
              <TabsContent value="upload" className="pt-4">
                <div className="space-y-4">
                  <Label>Upload reference image</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Image className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop files here or click to browse
                    </p>
                    <Input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept="image/*"
                    />
                    <Label htmlFor="file-upload" asChild>
                      <Button variant="outline" size="sm">
                        Browse Files
                      </Button>
                    </Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label>Style</Label>
                <Select defaultValue="fashion">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion Sketch</SelectItem>
                    <SelectItem value="technical">Technical Drawing</SelectItem>
                    <SelectItem value="artistic">Artistic Illustration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Project</Label>
                <Select defaultValue="summer">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summer">Summer Collection 2025</SelectItem>
                    <SelectItem value="winter">Winter Essentials</SelectItem>
                    <SelectItem value="eco">Eco-friendly Sportswear</SelectItem>
                    <SelectItem value="new">Create New Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Creativity Level</Label>
                  <span className="text-xs text-muted-foreground">70%</span>
                </div>
                <Slider 
                  defaultValue={[70]}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
            >
              <Wand2 className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating..." : "Generate Sketches"}
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Generated Results</CardTitle>
            <CardDescription>
              Select sketches to save to your gallery
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generationResults.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {generationResults.map((result, index) => (
                  <div key={index} className="border rounded-lg p-2 relative group">
                    <img 
                      src={result} 
                      alt={`Generated sketch ${index + 1}`}
                      className="w-full aspect-square object-cover rounded"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-b">
                      <div className="flex justify-between">
                        <Button variant="secondary" size="sm">Save</Button>
                        <Button variant="secondary" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
                <div className="rounded-full bg-muted p-6">
                  <Wand2 className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">No sketches generated yet</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Use the form on the left to describe the fashion design you want to create.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
