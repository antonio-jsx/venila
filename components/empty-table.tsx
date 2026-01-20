import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/ui/empty';
import { TableCell, TableRow } from '@/ui/table';
import { CalendarIcon } from 'lucide-react';

export function EmptyTable({
  title,
  empty,
  cols,
}: {
  title: string;
  empty: string;
  cols: number;
}) {
  return (
    <TableRow>
      <TableCell colSpan={cols}>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CalendarIcon />
            </EmptyMedia>
            <EmptyTitle>{title}</EmptyTitle>
            <EmptyDescription>{empty}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </TableCell>
    </TableRow>
  );
}
