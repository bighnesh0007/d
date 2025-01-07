'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid,  Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const monthlyRevenue = [
  { month: 'Jan', revenue: 65000, users: 1200, growth: 12 },
  { month: 'Feb', revenue: 78000, users: 1350, growth: 15 },
  { month: 'Mar', revenue: 92000, users: 1500, growth: 18 },
  { month: 'Apr', revenue: 105000, users: 1750, growth: 22 },
  { month: 'May', revenue: 128000, users: 2100, growth: 25 },
  { month: 'Jun', revenue: 155000, users: 2400, growth: 28 },
  { month: 'Jul', revenue: 189000, users: 2800, growth: 32 },
  { month: 'Aug', revenue: 220000, users: 3200, growth: 35 },
]

const chartConfig = {
  revenue: {
    label: 'Revenue ($)',
    color: 'hsl(var(--chart-1))',
  },
  users: {
    label: 'Active Users',
    color: 'hsl(var(--chart-2))',
  },
}

export function RevenueChart() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={monthlyRevenue}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend wrapperStyle={{ color: '#D1D5DB' }} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={3}
            dot={{ fill: 'var(--color-revenue)', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="var(--color-users)"
            strokeWidth={3}
            dot={{ fill: 'var(--color-users)', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

