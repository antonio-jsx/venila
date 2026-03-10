'use client';

import { AddTicket } from '@/admin/create/_components/add-ticket';
import type { EventSchema } from '@/admin/create/schema';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { cn, priceRange } from '@/lib/utils';
import { ChevronRight, TicketsIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

export function Tickets() {
  const t = useTranslations('admin.events.form.ticket');

  const {
    formState: { errors },
    watch,
  } = useFormContext<EventSchema>();

  const tickets = watch('tickets');
  const allPrice = tickets.map((p) => p.price);
  const priceMin = Math.min(...allPrice);
  const priceMax = Math.max(...allPrice);
  const thereAreTickets = tickets.length > 0;

  return (
    <AddTicket>
      <Item
        className="border-input border-dashed hover:cursor-pointer"
        variant="outline"
      >
        <ItemMedia variant="icon">
          <TicketsIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={cn(errors.tickets && 'text-destructive')}>
            {t('title')}
          </ItemTitle>
          <ItemDescription className={cn(thereAreTickets && 'text-green-800')}>
            {thereAreTickets ? priceRange(priceMin, priceMax) : t('empty')}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="size-4 stroke-input group-hover/item:stroke-foreground" />
        </ItemActions>
      </Item>
    </AddTicket>
  );
}
