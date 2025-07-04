
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const InsightsChart = () => {
  const data = [
    { name: 'Jan', views: 2400, saves: 240 },
    { name: 'Feb', views: 1398, saves: 198 },
    { name: 'Mar', views: 9800, saves: 680 },
    { name: 'Apr', views: 3908, saves: 308 },
    { name: 'May', views: 4800, saves: 400 },
    { name: 'Jun', views: 3800, saves: 350 },
  ];

  const chartConfig = {
    views: {
      label: "Views",
      color: "#917f4f",
    },
    saves: {
      label: "Saves",
      color: "#d1c7a3",
    },
  };

  return (
    <Card className="bg-white shadow-sm rounded-2xl border-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Performance Insights</CardTitle>
        <p className="text-sm text-gray-500">Album views and saves over time</p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="views" 
              stroke="var(--color-views)" 
              strokeWidth={3}
              dot={{ fill: "var(--color-views)", strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="saves" 
              stroke="var(--color-saves)" 
              strokeWidth={3}
              dot={{ fill: "var(--color-saves)", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default InsightsChart;
