/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no index> */
import { Skeleton } from '@/ui/skeleton';
import { TableCell, TableRow } from '@/ui/table';

export function LoadingEvent() {
  return Array.from({ length: 4 }).map((_, rowIndex) => (
    <TableRow key={rowIndex}>
      {Array.from({ length: 3 }).map((_, cellIndex) => (
        <TableCell key={cellIndex}>
          <Skeleton className="h-4 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));
}
