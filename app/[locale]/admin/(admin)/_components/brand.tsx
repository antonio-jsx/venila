'use client';

import { Link } from '@/lib/i18n/navigation';
import { TicketIcon } from 'lucide-react';

export function Brand() {
  return (
    <Link href="/admin" className="flex items-center gap-1">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
        <TicketIcon className="size-5" />
      </div>
      <span className="font-medium text-lg">Venila</span>
    </Link>
  );
}
