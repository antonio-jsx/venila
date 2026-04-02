'use client';

import { Logo } from '@/components/logo';
import { Link } from '@/lib/i18n/navigation';

export function Brand({ path }: { path: string }) {
  return (
    <div className="shrink-0">
      <Link href={path} className="flex w-fit items-center gap-1">
        <Logo className="size-7 fill-black dark:fill-white" />
      </Link>
    </div>
  );
}
