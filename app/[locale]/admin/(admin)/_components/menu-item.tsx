'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import type { ComponentType, SVGProps } from 'react';

export function MenuItem(item: {
  title: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  const pathname = usePathname();

  const isActive = pathname === `/admin${item.url === '/' ? '' : item.url}`;

  return (
    <li
      className={cn(
        '-mb-[2px]',
        isActive ? 'border-zinc-300 border-b-2 dark:border-secondary' : ''
      )}
    >
      <Link
        className={cn(
          'flex h-12 items-center gap-1.5 px-2 text-muted-foreground text-sm hover:text-foreground',
          isActive ? 'text-foreground' : ''
        )}
        href={`/admin${item.url}`}
      >
        <item.icon className="size-4.5 stroke-foreground text-zinc-100 dark:text-indigo-200/20" />
        {item.title}
      </Link>
    </li>
  );
}
