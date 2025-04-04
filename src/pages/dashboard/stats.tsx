import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Available Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Purchased Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">20</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Most Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">#concerts</div>
        </CardContent>
      </Card>
    </div>
  )
}

