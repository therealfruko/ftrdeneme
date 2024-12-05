'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function AddInvoiceForm() {
  const [project, setProject] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('pending')
  const [customer, setCustomer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('New invoice:', { project, amount, status, customer })
    setProject('')
    setAmount('')
    setStatus('pending')
    setCustomer('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Invoice</h2>
      <div className="flex space-x-4">
        <Input
          placeholder="Project Name"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Input
          placeholder="Customer Name"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Add Invoice</Button>
      </div>
    </form>
  )
}

