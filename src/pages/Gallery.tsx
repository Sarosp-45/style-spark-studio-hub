
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Search, Upload, MoreHorizontal, Filter } from "lucide-react";

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    image: "/placeholder.svg",
    project: "Summer Collection 2025",
    prompt: "A light summer dress with floral pattern",
    isFavorite: true,
    status: "Finalized",
    createdAt: "2 days ago",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    project: "Summer Collection 2025",
    prompt: "Casual linen shirt with rolled-up sleeves",
    isFavorite: false,
    status: "Shortlisted",
    createdAt: "3 days ago",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    project: "Winter Essentials",
    prompt: "Knitted sweater with geometric patterns",
    isFavorite: true,
    status: "In Review",
    createdAt: "1 week ago",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    project: "Winter Essentials",
    prompt: "Wool blend coat with wide lapels",
    isFavorite: false,
    status: "Finalized",
    createdAt: "1 week ago",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    project: "Eco-friendly Sportswear",
    prompt: "Breathable running shorts with side pockets",
    isFavorite: false,
    status: "In Review",
    createdAt: "2 weeks ago",
  },
  {
    id: 6,
    image: "/placeholder.svg",
    project: "Eco-friendly Sportswear",
    prompt: "Moisture-wicking performance top",
    isFavorite: true,
    status: "Shortlisted",
    createdAt: "2 weeks ago",
  },
  {
    id: 7,
    image: "/placeholder.svg",
    project: "Vintage Revival",
    prompt: "High-waisted jeans with tapered leg",
    isFavorite: false,
    status: "In Review",
    createdAt: "3 weeks ago",
  },
  {
    id: 8,
    image: "/placeholder.svg",
    project: "Vintage Revival",
    prompt: "Retro-style blouse with puff sleeves",
    isFavorite: true,
    status: "Finalized",
    createdAt: "3 weeks ago",
  },
];

export default function GalleryPage() {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
  const filteredItems = galleryItems.filter(item => {
    if (activeTab === "favorites" && !item.isFavorite) return false;
    if (activeTab === "finalized" && item.status !== "Finalized") return false;
    if (activeTab === "shortlisted" && item.status !== "Shortlisted") return false;
    if (activeTab === "review" && item.status !== "In Review") return false;
    
    if (searchValue && !item.prompt.toLowerCase().includes(searchValue.toLowerCase()) && 
        !item.project.toLowerCase().includes(searchValue.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const toggleSelect = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const isSelected = (id: number) => {
    return selectedItems.includes(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Browse AI Sketches
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle>Sketches</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search sketches..."
                  className="pl-8 w-[200px]"
                />
              </div>
            </div>
          </div>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="finalized">Finalized</TabsTrigger>
              <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
              <TabsTrigger value="review">In Review</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className={`
                border rounded-lg overflow-hidden group 
                ${isSelected(item.id) ? "ring-2 ring-primary" : ""}
              `}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.prompt}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  
                  <div className="absolute top-2 left-2">
                    <Checkbox 
                      checked={isSelected(item.id)} 
                      onClick={() => toggleSelect(item.id)}
                      className="bg-white/80 border-white/80"
                    />
                  </div>
                  
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="bg-white/80 hover:bg-white/100 h-8 w-8" 
                    >
                      <Heart className={`h-4 w-4 ${item.isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="bg-white/80 hover:bg-white/100 h-8 w-8" 
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-700" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  <h3 className="font-medium line-clamp-1 text-sm">{item.prompt}</h3>
                  <div className="flex justify-between items-center">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        item.status === "Finalized" ? "bg-green-50 text-green-700 border-green-200" :
                        item.status === "Shortlisted" ? "bg-blue-50 text-blue-700 border-blue-200" :
                        "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      {item.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
