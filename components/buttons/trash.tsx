'use client';

import { Button } from '@/components/ui/button';
import { useRemove } from '@/hooks/remove';
import { TrashIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Trash({ title, id }: { title: string; id: number }) {
  const t = useTranslations('buttons');
  const { remove } = useRemove();

  return (
    <Button
      className="w-full"
      onClick={() => remove({ title, id })}
      size="sm"
      type="button"
      variant="ghost"
    >
      <TrashIcon strokeWidth={1} /> {t('remove')}
    </Button>
  );
}
