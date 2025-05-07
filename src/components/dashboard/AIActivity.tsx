
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    user: {
      name: "Alex Morgan",
      avatar: "",
      initials: "AM",
    },
    action: "generated 5 new sketches for",
    project: "Summer Collection 2025",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Taylor Swift",
      avatar: "",
      initials: "TS",
    },
    action: "created a new subproject under",
    project: "Winter Essentials",
    time: "4 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Jamie Chen",
      avatar: "",
      initials: "JC",
    },
    action: "updated tech pack for",
    project: "Eco-friendly Sportswear",
    time: "Yesterday",
  },
  {
    id: 4,
    user: {
      name: "Morgan Freeman",
      avatar: "",
      initials: "MF",
    },
    action: "finalized 3 sketches in",
    project: "Vintage Revival",
    time: "2 days ago",
  },
  {
    id: 5,
    user: {
      name: "Zoe Williams",
      avatar: "",
      initials: "ZW",
    },
    action: "added size charts to",
    project: "Summer Collection 2025",
    time: "3 days ago",
  },
];

export function AIActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across projects</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  {activity.user.avatar && <AvatarImage src={activity.user.avatar} />}
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <p className="text-sm leading-none">
                    <span className="font-medium">{activity.user.name}</span>{" "}
                    {activity.action}{" "}
                    <Link to="/projects" className="text-primary font-medium hover:underline">
                      {activity.project}
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
