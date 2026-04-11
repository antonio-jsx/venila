import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CalendarDaysIcon, ClockIcon } from 'lucide-react';

export function Tickets({ className }: { className?: string }) {
  return (
    <Card
      className={cn(
        'group flex flex-row gap-0 overflow-visible border p-0 shadow-none ring-0 transition-all duration-200 hover:border-primary/30 dark:hover:border-ring/30',
        className
      )}
    >
      <div className="relative flex w-20 shrink-0 flex-col items-center justify-center border-r-2 border-dashed group-hover:border-primary/30 dark:group-hover:border-ring/30">
        <p>14 Mar</p>
        <div className="absolute -right-2.5 -bottom-px h-2.5 w-5 rounded-t-xl border border-b-0 bg-zinc-50 transition-colors group-hover:border-primary/30 dark:bg-background dark:group-hover:border-ring/30"></div>
        <div className="absolute -top-px -right-2.5 h-2.5 w-5 rounded-b-full border border-t-0 bg-zinc-50 transition-colors group-hover:border-primary/30 dark:bg-background dark:group-hover:border-ring/30"></div>
      </div>
      <div className="flex flex-1 flex-col gap-4 py-3">
        <CardHeader>
          <CardTitle>Evento de prueba para la ui</CardTitle>
          <CardDescription>$10 - $35</CardDescription>
        </CardHeader>
        <div className="flex flex-row items-center gap-3 px-6">
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            <ClockIcon size={16} strokeWidth={1.2} />
            09:00 AM <span>-</span>
            18:30 PM
          </p>
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            <CalendarDaysIcon size={16} strokeWidth={1.2} />
            24 Abr 2026
          </p>
        </div>
      </div>
    </Card>
  );
}
