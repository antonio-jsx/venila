'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import Calendar from '@/components/icons/Calendar';
import TicketCheck from '@/components/icons/TicketCheck';
import { CreateLink } from './create-link';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  return (
    <nav className="fixed right-0 bottom-4 left-0 z-50">
      <ul className="mx-auto flex w-fit items-center gap-1 rounded-full border bg-card px-3 py-1.5 shadow-2xl">
        <MenuItem title={t('Events')} url="/" icon={Calendar} />
        <CreateLink />
        <MenuItem title={t('Orders')} url="/orders" icon={TicketCheck} />
      </ul>
    </nav>
  );
}
