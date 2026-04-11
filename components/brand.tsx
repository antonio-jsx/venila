'use client';

import { Logo } from '@/components/logo';
import { Link } from '@/lib/i18n/navigation';

export function Brand({ path }: { path: string }) {
  return (
    <div className="shrink-0">
      <Link
        href={path}
        className="dark flex size-7.5 items-center justify-center gap-1 rounded-lg border bg-muted"
      >
        <Logo className="size-5 fill-black dark:fill-white" />
      </Link>
    </div>
  );
}
