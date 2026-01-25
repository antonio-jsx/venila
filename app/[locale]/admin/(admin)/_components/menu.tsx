'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import { CalendarIcon, ShoppingCartIcon, Users2Icon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  const menu = [
    { title: t('Events'), url: '/events', icon: CalendarIcon },
    { title: t('Orders'), url: '/orders', icon: ShoppingCartIcon },
    { title: t('Attendees'), url: '/attendees', icon: Users2Icon },
  ];

  return (
    <nav className="mx-auto">
      <ul className="flex items-center gap-3">
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
