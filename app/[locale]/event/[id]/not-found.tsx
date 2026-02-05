import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { CalendarX2 } from 'lucide-react';

export default async function NotFound() {
  return (
    <Empty className="mx-auto mt-4 max-w-md bg-card shadow-lg">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CalendarX2 />
        </EmptyMedia>
        <EmptyTitle>Page not found</EmptyTitle>
      </EmptyHeader>
    </Empty>
  );
}
