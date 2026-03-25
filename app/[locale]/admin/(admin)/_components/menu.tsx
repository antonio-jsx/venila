'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import Calendar from '@/components/icons/Calendar';
import TicketCheck from '@/components/icons/TicketCheck';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  const menu = [
    { title: t('Events'), url: '/', icon: Calendar },
    { title: t('Orders'), url: '/orders', icon: TicketCheck },
  ];

  return (
    <nav className="mx-auto flex-1">
      <ul className="mx-auto flex items-center gap-4">
        {menu.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  );
}
