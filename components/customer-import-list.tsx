import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type Customer = {
  id: string
  name: string
  email: string
  company: string
}

type CustomerImportListProps = {
  customers: Customer[]
}

export function CustomerImportList({ customers }: CustomerImportListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.company}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

