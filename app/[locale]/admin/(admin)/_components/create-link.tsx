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
        'flex h-6.5 items-center justify-center gap-1 rounded-full px-3 text-muted-foreground text-sm hover:text-foreground',
        isActive && 'bg-input text-foreground'
      )}
      href="/admin/create"
    >
      <PlusIcon className="size-4" strokeWidth={1} />
      {t('title')}
    </Link>
  );
}
