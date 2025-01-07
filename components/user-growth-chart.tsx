'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const userGrowthData = [
  { subject: 'Acquisition', A: 120, B: 110, fullMark: 150 },
  { subject: 'Retention', A: 98, B: 130, fullMark: 150 },
  { subject: 'Engagement', A: 86, B: 130, fullMark: 150 },
  { subject: 'Referral', A: 99, B: 100, fullMark: 150 },
  { subject: 'Revenue', A: 85, B: 90, fullMark: 150 },
  { subject: 'Support', A: 65, B: 85, fullMark: 150 },
]

const chartConfig = {
  A: {
    label: 'Current Year',
    color: 'hsl(var(--chart-1))',
  },
  B: {
    label: 'Previous Year',
    color: 'hsl(var(--chart-2))',
  },
}

export function UserGrowthChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userGrowthData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Radar name="Current Year" dataKey="A" stroke="var(--color-A)" fill="var(--color-A)" fillOpacity={0.6} />
          <Radar name="Previous Year" dataKey="B" stroke="var(--color-B)" fill="var(--color-B)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

