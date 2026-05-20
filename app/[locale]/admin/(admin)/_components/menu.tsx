'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  const menu = [
    { title: t('Events'), url: '/' },
    { title: t('Orders'), url: '/orders' },
  ];

  return (
    <nav className="pointer-events-none mr-auto">
      <ul className="pointer-events-auto flex h-full w-fit items-center gap-3">
        {menu.map((item) => (
          <MenuItem key={item.url} title={item.title} url={item.url} />
        ))}
      </ul>
    </nav>
  );
}
