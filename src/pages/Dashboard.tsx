
import { LayoutDashboard, Image, CheckSquare, Clock } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { RecentProjects } from "@/components/dashboard/RecentProjects";
import { AIActivity } from "@/components/dashboard/AIActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Projects" 
          value={12}
          description="+2 from last month"
          icon={LayoutDashboard} 
        />
        <StatsCard 
          title="AI Generated Sketches" 
          value={247}
          description="+18% this week" 
          icon={Image} 
        />
        <StatsCard 
          title="Finalized Designs" 
          value={86} 
          description="35% finalization rate"
          icon={CheckSquare} 
        />
        <StatsCard 
          title="Hours Saved" 
          value="124h" 
          description="Using AI vs. manual sketching"
          icon={Clock} 
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <AnalyticsChart />
        <RecentProjects />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AIActivity />
      </div>
    </div>
  );
}
