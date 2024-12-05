import { CustomerList } from '@/components/customer-list'
import { AddCustomerForm } from '@/components/add-customer-form'

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Customers</h1>
      <AddCustomerForm />
      <CustomerList />
    </div>
  )
}

