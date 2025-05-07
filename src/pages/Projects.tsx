
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FolderKanban, MoreVertical, Plus, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Summer Collection 2025",
    description: "Lightweight garments with floral patterns",
    sketches: 24,
    subprojects: 3,
    status: "Active",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    name: "Winter Essentials",
    description: "Cozy and warm designs for the cold season",
    sketches: 18,
    subprojects: 2,
    status: "Active",
    lastUpdated: "Yesterday",
  },
  {
    id: 3,
    name: "Eco-friendly Sportswear",
    description: "Sustainable athletic wear made from recycled materials",
    sketches: 12,
    subprojects: 1,
    status: "Reviewing",
    lastUpdated: "3 days ago",
  },
  {
    id: 4,
    name: "Vintage Revival",
    description: "Classic designs with a modern twist",
    sketches: 8,
    subprojects: 0,
    status: "Completed",
    lastUpdated: "1 week ago",
  },
  {
    id: 5,
    name: "Urban Streetwear",
    description: "Contemporary casual wear for city life",
    sketches: 15,
    subprojects: 2,
    status: "Active",
    lastUpdated: "5 days ago",
  },
  {
    id: 6,
    name: "Formal Elegance",
    description: "Sophisticated attire for special occasions",
    sketches: 10,
    subprojects: 1,
    status: "Paused",
    lastUpdated: "2 weeks ago",
  },
];

export default function ProjectsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProjects = projects.filter(project => {
    if (activeTab !== "all" && project.status.toLowerCase() !== activeTab) {
      return false;
    }
    
    if (searchValue && !project.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>
                Manage your fashion design projects
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search projects..."
                  className="pl-8 w-[200px]"
                />
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="reviewing">Reviewing</TabsTrigger>
              <TabsTrigger value="paused">Paused</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50 flex flex-row items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <FolderKanban className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs">Sketches</span>
                    <span className="text-xs font-medium">{project.sketches}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs">Subprojects</span>
                    <span className="text-xs font-medium">{project.subprojects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        project.status === "Active"
                          ? "default"
                          : project.status === "Reviewing"
                          ? "secondary"
                          : project.status === "Paused"
                          ? "outline"
                          : "outline"
                      }
                      className={project.status === "Completed" ? "bg-green-100 text-green-800 hover:bg-green-100 border-green-200" : ""}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Updated {project.lastUpdated}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
