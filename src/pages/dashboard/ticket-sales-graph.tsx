"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { hour: "00:00", sales: 12 },
  { hour: "02:00", sales: 8 },
  { hour: "04:00", sales: 5 },
  { hour: "06:00", sales: 7 },
  { hour: "08:00", sales: 15 },
  { hour: "10:00", sales: 25 },
  { hour: "12:00", sales: 30 },
  { hour: "14:00", sales: 35 },
  { hour: "16:00", sales: 40 },
  { hour: "18:00", sales: 50 },
  { hour: "20:00", sales: 45 },
  { hour: "22:00", sales: 30 },
]

export function TicketSalesGraph() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Ticket Sales by Hour</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="hour"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: unknown) => `${value}`}
            />
            <Bar dataKey="sales" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
