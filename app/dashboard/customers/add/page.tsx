import Form from '@/app/ui/customers/addForm';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Add Customer',
            href: '/dashboard/customers/add',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}