'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CreateLink() {
  const t = useTranslations('admin.events.form');

  return (
    <Button className="gap-0.5" size="sm" variant="ghost" asChild>
      <Link href="/admin/events/create">
        <PlusIcon /> {t('title')}
      </Link>
    </Button>
  );
}
