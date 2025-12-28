import { NavHeader } from '@/admin/_components/nav-header';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function OdersPage(_: PageProps<'/[locale]/admin/orders'>) {
  return (
    <>
      <NavHeader />

      <div className="px-4">
        <section className="relative flex flex-col gap-4 overflow-auto rounded-sm border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Tickets</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Payment method</TableHead>
                <TableHead>Created at</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </section>
      </div>
    </>
  );
}
