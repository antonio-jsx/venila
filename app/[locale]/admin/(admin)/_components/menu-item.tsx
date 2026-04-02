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
    <li className={cn(isActive ? 'rounded-full bg-secondary' : '')}>
      <Link
        className={cn(
          'flex size-8 items-center justify-center gap-1.5 text-muted-foreground text-sm hover:text-foreground',
          isActive ? 'font-medium text-foreground' : ''
        )}
        href={`/admin${url}`}
      >
        <Icom className="size-4.5 stroke-foreground text-zinc-100 dark:text-zinc-400/20" />
      </Link>
    </li>
  );
}
