'use client';

import { useRemove } from '@/state/remove';
import { Button } from '@/ui/button';
import { TrashIcon } from 'lucide-react';

export function ButtonTrash({ title, id }: { title: string; id: number }) {
  const { remove } = useRemove();

  return (
    <Button
      size="icon-sm"
      variant="ghost"
      onClick={() => remove({ title, id })}
    >
      <TrashIcon />
    </Button>
  );
}
