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
        'mb-[-2px]',
        pathname === `/admin${item.url}`
          ? 'border-indigo-500 border-b-2 text-indigo-500'
          : ''
      )}
    >
      <Link
        className={cn(
          'flex h-14 items-center gap-1 px-2 font-medium text-sm hover:text-indigo-500',
          pathname === `/admin${item.url}` ? 'text-indigo-500' : ''
        )}
        href={`/admin${item.url}`}
      >
        <item.icon className="size-4" /> {item.title}
      </Link>
    </li>
  );
}
