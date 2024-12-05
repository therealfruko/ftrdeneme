import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'

type Invoice = {
  id: string
  customer: string
  amount: number
  date: string
  status: 'paid' | 'pending' | 'overdue'
}

type InvoiceExportListProps = {
  onSelect: (invoiceId: string) => void
}

export function InvoiceExportList({ onSelect }: InvoiceExportListProps) {
  // In a real application, this data would come from your backend or state management
  const [invoices] = useState<Invoice[]>([
    { id: '1', customer: 'John Doe', amount: 100, date: '2023-06-01', status: 'paid' },
    { id: '2', customer: 'Jane Smith', amount: 200, date: '2023-06-02', status: 'pending' },
    { id: '3', customer: 'Bob Johnson', amount: 150, date: '2023-06-03', status: 'overdue' },
  ])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Select</TableHead>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>
              <Checkbox onCheckedChange={() => onSelect(invoice.id)} />
            </TableCell>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.customer}</TableCell>
            <TableCell>${invoice.amount}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold
                ${invoice.status === 'paid' ? 'bg-green-200 text-green-800' :
                  invoice.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-red-200 text-red-800'}`}>
                {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

