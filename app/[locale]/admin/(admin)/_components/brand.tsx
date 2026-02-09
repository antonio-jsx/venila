'use client';

import { Logo } from '@/components/logo';
import { Link } from '@/lib/i18n/navigation';

export function Brand() {
  return (
    <Link href="/admin" className="flex items-center gap-1 justify-self-start">
      <Logo className="size-5 fill-black dark:fill-white" />
      <span className="font-medium text-lg">Venila</span>
    </Link>
  );
}
