"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function TicketPurchaseForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Buy your favorite tickets</CardTitle>
        <p className="text-sm text-muted-foreground">
          We&apos;re here to help you get the best tickets
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Event Name</label>
            <Input placeholder="Enter the event name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of Tickets</label>
            <Input type="number" placeholder="Enter the number of tickets" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Interval</label>
            <Input placeholder="Enter the purchase interval" />
          </div>
          <Button className="w-full" type="submit">
            Buy Now
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

