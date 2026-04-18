'use client';

import { Logo } from '@/components/logo';
import { Link } from '@/lib/i18n/navigation';

export function Brand({ path }: { path: string }) {
  return (
    <div className="shrink-0">
      <Link href={path}>
        <Logo className="size-6" />
      </Link>
    </div>
  );
}
