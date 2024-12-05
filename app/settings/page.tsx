'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Settings</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" placeholder="Your Company" />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="email-notifications"
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
          <Label htmlFor="email-notifications">Enable email notifications</Label>
        </div>
        <Button>Save Settings</Button>
      </div>
    </div>
  )
}

