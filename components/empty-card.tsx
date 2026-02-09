import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { CalendarIcon } from 'lucide-react';

export function EmptyCard({ title, empty }: { title: string; empty: string }) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CalendarIcon />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{empty}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
