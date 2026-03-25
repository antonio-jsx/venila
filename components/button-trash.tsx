'use client';

import { useRemove } from '@/hooks/remove';
import { TrashIcon } from 'lucide-react';

export function ButtonTrash({ title, id }: { title: string; id: number }) {
  const { remove } = useRemove();

  return (
    <button
      className="text-muted-foreground hover:cursor-pointer hover:text-foreground"
      type="button"
      onClick={() => remove({ title, id })}
    >
      <TrashIcon className="size-3" />
    </button>
  );
}
