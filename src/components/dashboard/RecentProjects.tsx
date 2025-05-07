
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderKanban, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const recentProjects = [
  {
    id: 1,
    name: "Summer Collection 2025",
    sketches: 24,
    lastUpdated: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    name: "Winter Essentials",
    sketches: 18,
    lastUpdated: "Yesterday",
    status: "Active",
  },
  {
    id: 3,
    name: "Eco-friendly Sportswear",
    sketches: 12,
    lastUpdated: "3 days ago",
    status: "Reviewing",
  },
  {
    id: 4,
    name: "Vintage Revival",
    sketches: 8,
    lastUpdated: "1 week ago",
    status: "Completed",
  },
];

export function RecentProjects() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>Your recently updated projects</CardDescription>
        </div>
        <Link to="/projects">
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md">
                  <FolderKanban className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {project.sketches} sketches • {project.lastUpdated}
                  </p>
                </div>
              </div>
              <Badge
                variant={
                  project.status === "Active"
                    ? "default"
                    : project.status === "Reviewing"
                    ? "secondary"
                    : "outline"
                }
              >
                {project.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full" asChild>
          <Link to="/projects">View all projects</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
