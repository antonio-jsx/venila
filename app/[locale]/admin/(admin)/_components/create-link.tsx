'use client';

import { Link, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CreateLink() {
  const t = useTranslations('admin.events.form');

  const pathname = usePathname();
  const isActive = pathname === '/admin/create';

  return (
    <Link
      className={cn(
        'flex h-6.5 items-center justify-center gap-1 text-sm hover:text-primary',
        isActive && 'hidden'
      )}
      href="/admin/create"
    >
      <PlusIcon className="size-4" strokeWidth={1} />
      {t('title')}
    </Link>
  );
}
