import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { TableCell, TableRow } from '@/components/ui/table';
import { CalendarIcon } from 'lucide-react';

type Props = {
  title: string;
  empty: string;
  cols: number;
};

export function EmptyTable({ title, empty, cols }: Props) {
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
