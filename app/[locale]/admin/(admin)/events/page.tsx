import { NavHeader } from '@/admin/_components/nav-header';
import { Table, TableHead, TableHeader, TableRow } from '@/ui/table';

export default function EventsPage(_: PageProps<'/[locale]/admin/events'>) {
  return (
    <>
      <NavHeader />

      <div className="px-4">
        <section className="relative flex flex-col gap-4 overflow-auto rounded-sm border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Visibility</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </section>
      </div>
    </>
  );
}
