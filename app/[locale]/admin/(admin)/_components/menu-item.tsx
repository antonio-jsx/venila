'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar';
import type { LucideIcon } from 'lucide-react';

export function MenuItem(item: {
  title: string;
  url: string;
  icon: LucideIcon;
}) {
  const pathname = usePathname();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={pathname === item.url}
        tooltip={item.title}
      >
        <Link href={`/admin${item.url}`}>
          <item.icon /> {item.title}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
