
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal, Plus, Search } from "lucide-react";

// Sample user data
const users = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@example.com",
    role: "Admin",
    projects: 5,
    sketches: 48,
    status: "Active",
    lastActive: "Just now",
  },
  {
    id: 2,
    name: "Taylor Swift",
    email: "taylor@example.com",
    role: "Designer",
    projects: 3,
    sketches: 36,
    status: "Active",
    lastActive: "5 minutes ago",
  },
  {
    id: 3,
    name: "Jamie Chen",
    email: "jamie@example.com",
    role: "Designer",
    projects: 2,
    sketches: 25,
    status: "Active",
    lastActive: "1 hour ago",
  },
  {
    id: 4,
    name: "Morgan Freeman",
    email: "morgan@example.com",
    role: "Manager",
    projects: 4,
    sketches: 0,
    status: "Active",
    lastActive: "3 hours ago",
  },
  {
    id: 5,
    name: "Zoe Williams",
    email: "zoe@example.com",
    role: "Designer",
    projects: 1,
    sketches: 15,
    status: "Away",
    lastActive: "Yesterday",
  },
  {
    id: 6,
    name: "Chris Johnson",
    email: "chris@example.com",
    role: "Viewer",
    projects: 0,
    sketches: 0,
    status: "Inactive",
    lastActive: "1 week ago",
  },
];

export default function UsersPage() {
  const [searchValue, setSearchValue] = useState("");
  
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.role.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Team Members</CardTitle>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search users..."
              className="pl-8 w-[200px]"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>Sketches</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {user.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline"
                      className={`
                        ${user.role === "Admin" && "bg-purple-50 text-purple-700 border-purple-200"}
                        ${user.role === "Designer" && "bg-blue-50 text-blue-700 border-blue-200"}
                        ${user.role === "Manager" && "bg-amber-50 text-amber-700 border-amber-200"}
                        ${user.role === "Viewer" && "bg-gray-50 text-gray-700 border-gray-200"}
                      `}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.projects}</TableCell>
                  <TableCell>{user.sketches}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline"
                      className={`
                        ${user.status === "Active" && "bg-green-50 text-green-700 border-green-200"}
                        ${user.status === "Away" && "bg-amber-50 text-amber-700 border-amber-200"}
                        ${user.status === "Inactive" && "bg-gray-50 text-gray-700 border-gray-200"}
                      `}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>Change Role</DropdownMenuItem>
                        <DropdownMenuItem>Reset Password</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Deactivate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
