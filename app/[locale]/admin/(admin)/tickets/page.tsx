import { NavHeader } from '@/admin/_components/nav-header';
import { Table, TableHead, TableHeader, TableRow } from '@/ui/table';

export default function TicketsPage(_: PageProps<'/[locale]/admin/tickets'>) {
  return (
    <>
      <NavHeader />

      <div className="px-4">
        <section className="relative flex flex-col gap-4 overflow-auto rounded-sm border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </section>
      </div>
    </>
  );
}
