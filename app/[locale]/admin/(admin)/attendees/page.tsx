import { NavHeader } from '@/admin/_components/nav-header';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AttendeesPage(
  _: PageProps<'/[locale]/admin/attendees'>
) {
  return (
    <>
      <NavHeader />

      <div className="px-4">
        <section className="relative flex flex-col gap-4 overflow-auto rounded-sm border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              <TableRow>
                <TableHead>Attendee</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Ticket</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>QR code</TableHead>
                <TableHead>Check-in</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </section>
      </div>
    </>
  );
}
