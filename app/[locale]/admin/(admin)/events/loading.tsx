import { LoadingTable } from '@/components/loading-table';
import { Table, TableBody } from '@/components/ui/table';

export default function Loading() {
  return (
    <Table>
      <TableBody>
        <LoadingTable rows={4} cols={6} />
      </TableBody>
    </Table>
  );
}
