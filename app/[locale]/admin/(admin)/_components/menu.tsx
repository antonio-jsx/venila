'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import { CalendarIcon, SettingsIcon, TicketCheckIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  const menu = [
    { title: t('Events'), url: '/events', icon: CalendarIcon },
    { title: t('Orders'), url: '/orders', icon: TicketCheckIcon },
    { title: t('Settings'), url: '/settings', icon: SettingsIcon },
  ];

  return (
    <nav className="justify-self-center">
      <ul className="flex items-center gap-2">
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
