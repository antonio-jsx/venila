'use client';

import { Button } from '@/components/ui/button';
import { Link, usePathname } from '@/lib/i18n/navigation';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CreateLink() {
  const t = useTranslations('admin.events.form');

  const pathname = usePathname();
  const isActive = pathname === '/admin/create';

  return (
    <Button
      active={isActive}
      className="gap-0.5"
      size="sm"
      variant="ghost"
      asChild
    >
      <Link href="/admin/create">
        <PlusIcon /> {t('title')}
      </Link>
    </Button>
  );
}
