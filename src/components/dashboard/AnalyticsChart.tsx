
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sketches: 40 },
  { name: "Feb", sketches: 30 },
  { name: "Mar", sketches: 60 },
  { name: "Apr", sketches: 80 },
  { name: "May", sketches: 65 },
  { name: "Jun", sketches: 90 },
  { name: "Jul", sketches: 100 },
];

export function AnalyticsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Sketch Generation Analytics</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sketches" fill="#9b87f5" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
