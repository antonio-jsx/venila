'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export function MenuItem(item: {
  title: string;
  url: string;
  icon: LucideIcon;
}) {
  const pathname = usePathname();

  return (
    <li
      className={cn(
        '-mb-[2px]',
        pathname === `/admin${item.url}`
          ? 'border-primary border-b-2 font-semibold text-primary'
          : ''
      )}
    >
      <Link
        className={cn(
          'flex h-12 items-center gap-1 px-2 text-muted-foreground text-sm hover:text-foreground',
          pathname === `/admin${item.url}`
            ? 'text-primary hover:text-primary'
            : ''
        )}
        href={`/admin${item.url}`}
      >
        <item.icon className="size-4" /> {item.title}
      </Link>
    </li>
  );
}
