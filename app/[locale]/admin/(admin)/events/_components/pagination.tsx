import { TableCell, TableRow } from '@/ui/table';

export async function PaginationEvents({ show }: { show: string }) {
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <p className="text-xs">{show}</p>
      </TableCell>
    </TableRow>
  );
}
