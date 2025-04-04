import { DashboardHeader } from "@/pages/layout/dashboard-header"
import { DashboardStats } from "@/pages/dashboard/stats"
import { TicketSalesGraph } from "@/pages/dashboard/ticket-sales-graph"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to your PassPorter Dashboard</h1>
        <p className="text-xl text-muted-foreground mb-8">
          View and manage your tickets for upcoming events, movies, concerts, and more.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardStats />
        </div>
        <div className="mt-8">
          <TicketSalesGraph />
        </div>
      </main>
    </div>
  )
}

