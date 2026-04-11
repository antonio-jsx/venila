'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import { CreateLink } from './create-link';
import { Calendar, Ticket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  return (
    <nav className="fixed top-14 left-4 z-50">
      <ul className="flex h-full w-fit flex-col items-center gap-1.5 rounded-4xl border bg-card px-1.5 py-2 shadow-xs">
        <MenuItem title={t('Events')} url="/" icon={Calendar} />
        <CreateLink />
        <MenuItem title={t('Orders')} url="/orders" icon={Ticket} />
      </ul>
    </nav>
  );
}
