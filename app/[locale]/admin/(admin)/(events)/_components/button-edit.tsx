'use client';

import { Tooltip } from '@/components/tooltip';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';
import { PencilLineIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ButtonEdit({ id }: { id: number }) {
  const t = useTranslations('buttons');

  return (
    <Tooltip side="right" text={t('edit')}>
      <Button
        className="size-auto text-muted-foreground"
        size="icon-sm"
        variant="link"
        asChild
      >
        <Link href={`/admin/create?edit=${id}`}>
          <PencilLineIcon strokeWidth={1} />
        </Link>
      </Button>
    </Tooltip>
  );
}
