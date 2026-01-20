import { TableCell, TableRow } from '@/ui/table';

export async function Pagination({
  show,
  cols,
}: {
  show: string;
  cols: number;
}) {
  return (
    <TableRow>
      <TableCell colSpan={cols}>
        <p className="text-xs">{show}</p>
      </TableCell>
    </TableRow>
  );
}
