import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Item, ItemContent } from '@/components/ui/item';
import { cn } from '@/lib/utils';
import { CalendarDaysIcon, ClockIcon } from 'lucide-react';

export function Tickets({ className }: { className?: string }) {
  return (
    <Card className={cn('flex flex-row gap-0 overflow-hidden p-0', className)}>
      <div className="flex w-20 shrink-0 flex-col items-center justify-center bg-accent">
        <p>14 Mar</p>
      </div>
      <div className="flex flex-1 flex-col gap-2 py-3">
        <CardHeader>
          <CardTitle>Evento de prueba para la ui</CardTitle>
          <CardDescription>$10 - $35</CardDescription>
          <CardAction>
            <Badge variant="secondary">Active</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Item>
            <ItemContent className="flex-row items-center gap-3">
              <p className="flex items-center gap-1 text-muted-foreground text-sm">
                <ClockIcon size={16} strokeWidth={1.2} />
                09:00 AM <span>-</span>
                18:30 PM
              </p>
              <p className="flex items-center gap-1 text-muted-foreground text-sm">
                <CalendarDaysIcon size={16} strokeWidth={1.2} />
                24 Abr 2026
              </p>
            </ItemContent>
          </Item>
        </CardContent>
      </div>
    </Card>
  );
}
