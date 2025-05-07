
import { useState } from "react";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <header className="flex h-16 items-center px-6 border-b bg-white/70 backdrop-blur-md shadow-sm">
      <div className="flex flex-1 items-center gap-2">
        <Search className="h-4 w-4 text-fashion-neutral-gray" />
        <Input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search sketches, projects..."
          className="w-[300px] bg-fashion-light-pink/5 hover:bg-fashion-light-pink/10 transition-colors border-fashion-pink/10 focus-visible:ring-fashion-pink/20"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative hover:bg-fashion-light-pink/10">
          <Bell className="h-5 w-5 text-fashion-neutral-gray" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-fashion-pink"></span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-fashion-light-pink/10">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-to-br from-fashion-pink to-fashion-lavender text-white">FD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 card-shadow">
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
