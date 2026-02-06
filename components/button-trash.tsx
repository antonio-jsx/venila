'use client';

import { Button } from '@/components/ui/button';
import { useRemove } from '@/hooks/remove';
import { TrashIcon } from 'lucide-react';

export function ButtonTrash({ title, id }: { title: string; id: number }) {
  const { remove } = useRemove();

  return (
    <Button
      className="size-7"
      size="icon-sm"
      variant="ghost"
      onClick={() => remove({ title, id })}
    >
      <TrashIcon className="size-4" />
    </Button>
  );
}
