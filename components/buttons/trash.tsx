'use client';

import { Button } from '@/components/ui/button';
import { useRemove } from '@/hooks/remove';
import { Tooltip } from '../tooltip';
import { TrashIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Trash({ title, id }: { title: string; id: number }) {
  const t = useTranslations('buttons');
  const { remove } = useRemove();

  return (
    <Tooltip side="right" text={t('remove')}>
      <Button
        className="size-auto text-muted-foreground"
        size="icon-sm"
        type="button"
        variant="link"
        onClick={() => remove({ title, id })}
      >
        <TrashIcon strokeWidth={1} />
      </Button>
    </Tooltip>
  );
}
