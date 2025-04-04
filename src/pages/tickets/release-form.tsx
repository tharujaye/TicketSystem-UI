"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TicketReleaseForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Release tickets</CardTitle>
        <p className="text-sm text-muted-foreground">
          Releasing a ticket will make it available to other vendors. Tickets are released in intervals of 15 minutes.
          Once a ticket is released, it cannot be undone. Please release tickets responsibly.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Ticket ID</label>
            <Input placeholder="#" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Interval Time</label>
            <Select defaultValue="15">
              <SelectTrigger>
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="45">45 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Availability</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="in-person">In-person</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Event Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="concert">Concert</SelectItem>
                <SelectItem value="festival">Festival</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" type="submit">
            Release Ticket
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

