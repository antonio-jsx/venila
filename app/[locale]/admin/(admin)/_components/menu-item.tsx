'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  url: string;
};

export function MenuItem({ title, url }: Props) {
  const pathname = usePathname();

  const isActive = pathname === `/admin${url === '/' ? '' : url}`;

  return (
    <li>
      <Link
        className={cn(
          'flex h-6.5 items-center justify-center rounded-full px-3 text-muted-foreground text-sm hover:text-foreground',
          isActive && 'bg-input text-foreground'
        )}
        href={`/admin${url}`}
      >
        {title}
      </Link>
    </li>
  );
}
