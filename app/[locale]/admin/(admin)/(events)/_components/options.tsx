'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRemove } from '@/hooks/remove';
import { EllipsisVerticalIcon, PencilLineIcon, Trash2Icon } from 'lucide-react';
import type { Route } from 'next';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export function Options({ id, title }: { id: number; title: string }) {
  const t = useTranslations('buttons');

  const router = useRouter();

  const { remove } = useRemove();

  const handleEdit = () => {
    router.push(`/admin/create?edit=${id}` as Route);
  };

  const handleRemove = () => {
    remove({ id, title });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-xs" variant="outline">
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[140px]">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={handleEdit}>
            <PencilLineIcon /> {t('edit')}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={handleRemove}>
            <Trash2Icon /> {t('remove')}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
