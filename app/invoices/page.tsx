import { InvoiceList } from '@/components/invoice-list'
import { AddInvoiceForm } from '@/components/add-invoice-form'

export default function InvoicesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Invoices</h1>
      <AddInvoiceForm />
      <InvoiceList />
    </div>
  )
}

