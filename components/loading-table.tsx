/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no index> */
import { Skeleton } from '@/ui/skeleton';
import { TableCell, TableRow } from '@/ui/table';

export function LoadingTable({ rows, cols }: { rows: number; cols: number }) {
  return Array.from({ length: rows }).map((_, rowIndex) => (
    <TableRow key={rowIndex}>
      {Array.from({ length: cols }).map((_, cellIndex) => (
        <TableCell key={cellIndex}>
          <Skeleton className="h-4 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));
}
