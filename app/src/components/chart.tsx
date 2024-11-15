"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", order: 186, amt: 80 },
  { month: "February", order: 305, amt: 200 },
  { month: "March", order: 237, amt: 120 },
  { month: "April", order: 73, amt: 190 },
  { month: "May", order: 209, amt: 130 },
  { month: "June", order: 214, amt: 140 },
]

const chartConfig = {
  order: {
    label: "sales order",
    color: "hsl(var(--chart-1))",
  },
  amt: {
    label: "sales amount",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <>
    <div className="pl-16">
    <div className="max-w-full sm:mx-auto sm:px-6 sm:pr-0 lg:px-8 lg:pr-0">
        <div className="sm:flex sm:space-x-4">
            {/* Card with flexible height */}
            <Card className="w-full border-black border-[1px]">
              <CardHeader>
                <CardTitle>Sales order and Sales amount per month</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent className="h-auto p-0">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <BarChart data={chartData} className="h-full w-full">
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="order" fill="#3b3838" radius={4} />
                    <Bar dataKey="amt" fill="#878b91" radius={4} />
                </BarChart>
                </ChartContainer>
                </CardContent>
            </Card>

        {/* Dividing Line */}
        <div className="border-l border-black"></div>
        </div>
    </div>
    </div>
    </>
  )
}
