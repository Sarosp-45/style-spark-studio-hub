
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Image, 
  History, 
  Users, 
  FolderKanban, 
  Settings 
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Projects",
    icon: FolderKanban,
    href: "/projects",
  },
  {
    title: "AI Generator",
    icon: Image,
    href: "/generator",
  },
  {
    title: "Gallery",
    icon: Image,
    href: "/gallery",
  },
  {
    title: "History",
    icon: History,
    href: "/history",
  },
  {
    title: "Users",
    icon: Users,
    href: "/users",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "border-r bg-white/70 backdrop-blur-sm h-full transition-all duration-300 shadow-sm",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!collapsed && (
          <Link to="/" className="font-semibold text-lg text-gradient">
            StyleSpark
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto hover:bg-fashion-light-pink/10"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      <div className="py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "bg-gradient-to-r from-fashion-light-pink to-fashion-lavender/20 text-fashion-neutral-gray"
                  : "text-muted-foreground hover:bg-fashion-light-pink/10"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5", 
                collapsed ? "mx-auto" : "mr-3",
                location.pathname === item.href ? "text-fashion-pink" : "text-fashion-neutral-gray"
              )} />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
