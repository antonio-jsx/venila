import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/ui/empty';
import { TableCell, TableRow } from '@/ui/table';
import { CalendarIcon } from 'lucide-react';

export function EmptyEvents({
  title,
  empty,
}: {
  title: string;
  empty: string;
}) {
  return (
    <TableRow>
      <TableCell colSpan={3}>
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
