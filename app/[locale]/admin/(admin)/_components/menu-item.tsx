'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import type { ComponentType, SVGProps } from 'react';

type Props = {
  title: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function MenuItem({ icon: Icom, title, url }: Props) {
  const pathname = usePathname();

  const isActive = pathname === `/admin${url === '/' ? '' : url}`;

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
        href={`/admin${url}`}
      >
        <Icom className="size-4.5 stroke-foreground text-zinc-100 dark:text-indigo-200/20" />
        {title}
      </Link>
    </li>
  );
}
