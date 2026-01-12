'use client';

import { MenuItem } from '@/admin/_components/menu-item';
import { SidebarGroup, SidebarGroupContent, SidebarMenu } from '@/ui/sidebar';
import {
  CalendarIcon,
  HouseIcon,
  ShoppingCartIcon,
  TicketIcon,
  UsersIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Menu() {
  const t = useTranslations('admin.menu');

  const menu = [
    { title: t('Dashboard'), url: '', icon: HouseIcon },
    { title: t('Events'), url: '/events', icon: CalendarIcon },
    { title: t('Tickets'), url: '/tickets', icon: TicketIcon },
    { title: t('Orders'), url: '/orders', icon: ShoppingCartIcon },
    { title: t('Attendees'), url: '/attendees', icon: UsersIcon },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {menu.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              url={item.url}
              icon={item.icon}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
