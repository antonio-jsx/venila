'use client';

import { Tooltip } from '@/components/tooltip';
import { Button } from '@/components/ui/button';
import { Link, usePathname } from '@/lib/i18n/navigation';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CreateLink() {
  const t = useTranslations('admin.events.form');

  const pathname = usePathname();
  const isActive = pathname === '/admin/create';

  return (
    <Tooltip text={t('title')}>
      <Button
        className="dark size-8 rounded-full"
        size="sm"
        variant="secondary"
        asChild
      >
        <Link href="/admin/create">
          <PlusIcon className="size-5" />
        </Link>
      </Button>
    </Tooltip>
  );
}
