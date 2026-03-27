'use client';

import { Logo } from '@/components/logo';
import { Link } from '@/lib/i18n/navigation';

export function Brand({ path }: { path: string }) {
  return (
    <div className="flex-1">
      <Link href={path} className="flex w-fit items-center gap-1">
        <Logo className="size-5 fill-black dark:fill-white" />
        <span className="font-medium text-lg">Venila</span>
      </Link>
    </div>
  );
}
