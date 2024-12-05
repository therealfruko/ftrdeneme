'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Edit, Trash2 } from 'lucide-react'

type Invoice = {
  id: string
  date: string
  amount: number
  status: 'paid' | 'pending' | 'overdue'
  project: string
  customer: string
}

const initialInvoices: Invoice[] = [
  { id: '1', date: '2023-05-01', amount: 100, status: 'paid', project: 'Project A', customer: 'John Doe' },
  { id: '2', date: '2023-05-15', amount: 200, status: 'pending', project: 'Project B', customer: 'Jane Smith' },
  { id: '3', date: '2023-04-30', amount: 150, status: 'overdue', project: 'Project C', customer: 'Bob Johnson' },
]

export function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredInvoices = invoices
    .filter(invoice => statusFilter === 'all' || invoice.status === statusFilter)
    .filter(invoice => 
      invoice.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.includes(searchTerm)
    )

  const handleDelete = (id: string) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Input
          placeholder="Search by project or invoice ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${invoice.status === 'paid' ? 'bg-green-200 text-green-800' :
                    invoice.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'}`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </TableCell>
              <TableCell>{invoice.project}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(invoice.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

