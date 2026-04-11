'use client';

import { Tooltip } from '@/components/tooltip';
import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export function MenuItem({ icon: Icom, title, url }: Props) {
  const pathname = usePathname();

  const isActive = pathname === `/admin${url === '/' ? '' : url}`;

  return (
    <Tooltip text={title}>
      <li
        className={cn(isActive ? 'rounded-3xl bg-input/50 dark:bg-input' : '')}
      >
        <Link
          className={cn(
            'flex size-8 items-center justify-center text-muted-foreground hover:text-foreground',
            isActive ? 'text-foreground' : ''
          )}
          href={`/admin${url}`}
        >
          <Icom className="size-5" strokeWidth={1.5} />
        </Link>
      </li>
    </Tooltip>
  );
}
