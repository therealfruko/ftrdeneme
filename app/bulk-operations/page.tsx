'use client'

import { useState } from 'react'
import { withAuth } from '@/components/with-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { FileSpreadsheet, FileText, Upload, Download } from 'lucide-react'
import { CustomerImportList } from '@/components/customer-import-list'
import { InvoiceExportList } from '@/components/invoice-export-list'

function BulkOperationsPage() {
  const [importedCustomers, setImportedCustomers] = useState<any[]>([])
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])

  const handleCustomerImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real application, you would process the Excel file here
      // For this example, we'll just set some dummy data
      setImportedCustomers([
        { id: '1', name: 'John Doe', email: 'john@example.com', company: 'ABC Corp' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', company: 'XYZ Inc' },
        { id: '3', name: 'Bob Johnson', email: 'bob@example.com', company: '123 LLC' },
      ])
    }
  }

  const handleInvoiceSelection = (invoiceId: string) => {
    setSelectedInvoices(prev => 
      prev.includes(invoiceId)
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    )
  }

  const handleExportExcel = () => {
    // In a real application, you would generate and download an Excel file here
    console.log('Exporting to Excel:', selectedInvoices.length ? 'Selected invoices' : 'All invoices')
  }

  const handleExportPDF = () => {
    // In a real application, you would generate and download a PDF file here
    console.log('Exporting to PDF:', selectedInvoices.length ? 'Selected invoices' : 'All invoices')
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Bulk Operations</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Import Customers</CardTitle>
          <CardDescription>Import customer data from an Excel file</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="customer-file-upload">Select Excel file</Label>
          <Input id="customer-file-upload" type="file" accept=".xlsx, .xls" onChange={handleCustomerImport} />
          <Button className="mt-4" onClick={() => document.getElementById('customer-file-upload')?.click()}>
            <Upload className="mr-2 h-4 w-4" /> Import Customers
          </Button>
        </CardContent>
      </Card>

      {importedCustomers.length > 0 && (
        <CustomerImportList customers={importedCustomers} />
      )}

      <Card>
        <CardHeader>
          <CardTitle>Export Invoices</CardTitle>
          <CardDescription>Select invoices to export or export all</CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceExportList onSelect={handleInvoiceSelection} />
          <div className="flex justify-between mt-4">
            <Button onClick={handleExportExcel}>
              <FileSpreadsheet className="mr-2 h-4 w-4" /> Export to Excel
            </Button>
            <Button onClick={handleExportPDF}>
              <FileText className="mr-2 h-4 w-4" /> Export to PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default withAuth(BulkOperationsPage, ['admin'])

