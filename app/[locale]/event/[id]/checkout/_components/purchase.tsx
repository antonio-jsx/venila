'use client';

import type { CheckoutSchema } from '@/app/event/[id]/checkout/schema';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface Ticket {
  title: string;
  price: string;
  quantity: number;
  id: number;
}

interface Props {
  tickets: Ticket[];
}

export function Purchase({ tickets }: Props) {
  const { control } = useFormContext<CheckoutSchema>();

  const items = useWatch({
    control,
    name: 'items',
  });

  const summary = useMemo(() => {
    if (!items) return { total: 0, count: 0, lines: [] };

    let total = 0;
    let count = 0;

    const lines = items.map((item, index) => {
      const ticket = tickets[index];
      const quantity = item.quantity ?? 0;
      const subtotal = quantity * parseFloat(ticket.price);

      total += subtotal;
      count += quantity;

      return {
        title: ticket.title,
        quantity,
        price: ticket.price,
        subtotal,
      };
    });

    return { total, count, lines };
  }, [items, tickets]);

  const t = useTranslations('checkout');

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        {summary.lines.map((line) =>
          line.quantity > 0 ? (
            <div
              className="flex items-center justify-between text-sm"
              key={line.title}
            >
              <span>
                {line.title} x{line.quantity}
              </span>
              <span className="font-mono">${line.subtotal}</span>
            </div>
          ) : null
        )}
      </div>

      <div className="flex items-center justify-between border-t pt-3 font-semibold">
        <span>{t('total', { total: summary.count })}</span>
        <span className="font-mono text-lg text-primary">${summary.total}</span>
      </div>
    </div>
  );
}
