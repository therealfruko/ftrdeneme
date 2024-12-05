'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FileSpreadsheet, FileText, Upload, Download } from 'lucide-react'

export default function ImportExportPage() {
  const [importedData, setImportedData] = useState<any[]>([])

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real application, you would process the file here
      // For this example, we'll just set some dummy data
      setImportedData([
        { id: '1', customer: 'John Doe', amount: 100, date: '2023-06-01' },
        { id: '2', customer: 'Jane Smith', amount: 200, date: '2023-06-02' },
        { id: '3', customer: 'Bob Johnson', amount: 150, date: '2023-06-03' },
      ])
    }
  }

  const handleExportExcel = () => {
    // In a real application, you would generate and download an Excel file here
    console.log('Exporting to Excel...')
  }

  const handleExportPDF = () => {
    // In a real application, you would generate and download a PDF file here
    console.log('Exporting to PDF...')
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Import/Export</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import Data</CardTitle>
            <CardDescription>Import invoice data from an Excel file</CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="file-upload">Select Excel file</Label>
            <Input id="file-upload" type="file" accept=".xlsx, .xls" onChange={handleFileImport} />
            <Button className="mt-4" onClick={() => document.getElementById('file-upload')?.click()}>
              <Upload className="mr-2 h-4 w-4" /> Import Excel
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Export Data</CardTitle>
            <CardDescription>Export invoice data to Excel or PDF</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <Button onClick={handleExportExcel}>
              <FileSpreadsheet className="mr-2 h-4 w-4" /> Export to Excel
            </Button>
            <Button onClick={handleExportPDF}>
              <FileText className="mr-2 h-4 w-4" /> Export to PDF
            </Button>
          </CardContent>
        </Card>
      </div>

      {importedData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Imported Data Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {importedData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.customer}</TableCell>
                    <TableCell>${row.amount}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

