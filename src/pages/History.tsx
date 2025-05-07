
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar as CalendarIcon, Filter } from "lucide-react";
import { format } from "date-fns";

// Sample history data
const historyItems = [
  {
    id: 1,
    prompt: "A light summer dress with floral pattern, sleeveless, mid-length with a flowing silhouette",
    images: 4,
    project: "Summer Collection 2025",
    saved: 2,
    date: new Date(2024, 6, 15, 14, 30),
  },
  {
    id: 2,
    prompt: "Casual linen shirt with rolled-up sleeves, button-down front, relaxed fit for hot weather",
    images: 4,
    project: "Summer Collection 2025",
    saved: 1,
    date: new Date(2024, 6, 14, 10, 15),
  },
  {
    id: 3,
    prompt: "Knitted sweater with geometric patterns, crew neck, ribbed cuffs and hem",
    images: 4,
    project: "Winter Essentials",
    saved: 3,
    date: new Date(2024, 6, 10, 16, 45),
  },
  {
    id: 4,
    prompt: "Wool blend coat with wide lapels, double-breasted, knee length with side pockets",
    images: 4,
    project: "Winter Essentials",
    saved: 1,
    date: new Date(2024, 6, 10, 11, 20),
  },
  {
    id: 5,
    prompt: "Breathable running shorts with side pockets, elastic waistband with internal drawstring",
    images: 4,
    project: "Eco-friendly Sportswear",
    saved: 0,
    date: new Date(2024, 6, 5, 9, 40),
  },
  {
    id: 6,
    prompt: "Moisture-wicking performance top, sleeveless, with racerback design for maximum mobility",
    images: 4,
    project: "Eco-friendly Sportswear",
    saved: 2,
    date: new Date(2024, 6, 5, 9, 10),
  },
  {
    id: 7,
    prompt: "High-waisted jeans with tapered leg, vintage wash with distressed details",
    images: 4,
    project: "Vintage Revival",
    saved: 0,
    date: new Date(2024, 5, 28, 15, 30),
  },
  {
    id: 8,
    prompt: "Retro-style blouse with puff sleeves, peter pan collar, and button-down front",
    images: 4,
    project: "Vintage Revival",
    saved: 3,
    date: new Date(2024, 5, 28, 13, 50),
  },
];

export default function HistoryPage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const filteredHistory = historyItems.filter(item => {
    if (selectedProject && item.project !== selectedProject) return false;
    
    if (selectedDate && 
        !(item.date.getDate() === selectedDate.getDate() &&
          item.date.getMonth() === selectedDate.getMonth() &&
          item.date.getFullYear() === selectedDate.getFullYear())) {
      return false;
    }
    
    if (searchValue && !item.prompt.toLowerCase().includes(searchValue.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Prompt History</h1>
      
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Generation History</CardTitle>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search prompts..."
                className="pl-8 w-[200px]"
              />
            </div>
            <Select value={selectedProject || ""} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="All Projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Projects</SelectItem>
                <SelectItem value="Summer Collection 2025">Summer Collection</SelectItem>
                <SelectItem value="Winter Essentials">Winter Essentials</SelectItem>
                <SelectItem value="Eco-friendly Sportswear">Eco Sportswear</SelectItem>
                <SelectItem value="Vintage Revival">Vintage Revival</SelectItem>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[160px] justify-start text-left">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {(selectedProject || selectedDate) && (
              <Button variant="ghost" onClick={() => {
                setSelectedProject(null);
                setSelectedDate(null);
              }}>
                Clear Filters
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {item.project}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {format(item.date, "PPp")}
                      </span>
                    </div>
                    <p className="font-medium">{item.prompt}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{item.images} images generated</span>
                      <span>{item.saved} saved to gallery</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Regenerate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
