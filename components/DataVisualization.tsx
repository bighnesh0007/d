'use client'

import { useState, Suspense } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from '@/components/revenue-chart'
import { RegionalAnalysisChart } from '@/components/regional-analysis-chart'
import { UserGrowthChart } from '@/components/user-growth-chart'
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const ChartSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="space-y-4 w-full">
      <Skeleton className="h-[400px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  </div>
)

const ErrorAlert = ({ message }: { message: string }) => (
  <Alert variant="destructive" className="my-4">
    <AlertCircle className="h-4 w-4" />
    <AlertDescription>{message}</AlertDescription>
  </Alert>
)

export default function DataVisualization() {
  const [activeTab, setActiveTab] = useState('revenue')
  const [error] = useState(null)

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-tight">
            Business Analytics Dashboard
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Real-time insights into your business performance and metrics
          </p>
        </div>

        {/* Main Dashboard Card */}
        <Card className="backdrop-blur-sm bg-gray-900/80 border border-gray-800 shadow-xl">
          <div className="p-4 md:p-6 lg:p-8">
            {error && <ErrorAlert message={error} />}
            
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="w-full"
            >
              {/* Tabs Navigation */}
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-800/50 p-1 gap-1">
                <TabsTrigger
                  value="revenue"
                  className="transition-all data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 hover:text-blue-300"
                >
                  <span className="hidden md:inline">Revenue Analytics</span>
                  <span className="md:hidden">Revenue</span>
                </TabsTrigger>
                <TabsTrigger
                  value="regional"
                  className="transition-all data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400 hover:text-yellow-300"
                >
                  <span className="hidden md:inline">Regional Analysis</span>
                  <span className="md:hidden">Regional</span>
                </TabsTrigger>
                <TabsTrigger
                  value="growth"
                  className="transition-all data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-400 hover:text-pink-300"
                >
                  <span className="hidden md:inline">User Growth</span>
                  <span className="md:hidden">Growth</span>
                </TabsTrigger>
              </TabsList>

              {/* Chart Container */}
              <CardContent className="p-2 md:p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="w-full h-[400px] md:h-[450px] lg:h-[500px] relative overflow-hidden">
                  <Suspense fallback={<ChartSkeleton />}>
                    <TabsContent 
                      value="revenue" 
                      className="absolute inset-0 transition-opacity"
                    >
                      <RevenueChart />
                    </TabsContent>
                    <TabsContent 
                      value="regional" 
                      className="absolute inset-0 transition-opacity"
                    >
                      <RegionalAnalysisChart  />
                    </TabsContent>
                    <TabsContent 
                      value="growth" 
                      className="absolute inset-0 transition-opacity"
                    >
                      <UserGrowthChart />
                    </TabsContent>
                  </Suspense>
                </div>
              </CardContent>
            </Tabs>

            {/* Legend/Info Section */}
            <div className="mt-6 px-4 py-3 bg-gray-800/20 rounded-lg border border-gray-700/50">
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400/80" />
                  <span>Current Period</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400/50" />
                  <span>Previous Period</span>
                </div>
                <div className="ml-auto text-gray-500">
                  Updated every 24 hours
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}