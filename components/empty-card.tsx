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
      <EmptyHeader className="gap-0">
        <EmptyMedia variant="icon">
          <CalendarIcon strokeWidth={1} />
        </EmptyMedia>
        <EmptyTitle className="text-2xl">{title}</EmptyTitle>
        <EmptyDescription>{empty}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
