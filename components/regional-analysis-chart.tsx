'use client'

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const userDemographics = [
  { category: 'North America', value: 35000 },
  { category: 'Europe', value: 28000 },
  { category: 'Asia Pacific', value: 22000 },
  { category: 'Latin America', value: 15000 },
  { category: 'Africa', value: 8000 },
]

const chartConfig = {
  value: {
    label: 'Users',
    color: 'hsl(var(--chart-1))',
  },
}

export function RegionalAnalysisChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={userDemographics}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="category" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend wrapperStyle={{ color: '#D1D5DB' }} />
          <Bar
            dataKey="value"
            fill="var(--color-value)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

