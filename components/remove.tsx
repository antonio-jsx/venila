'use client';

import type { InferRemoveEvent } from '@/admin/events/action';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useRemove } from '@/hooks/remove';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';

export function Remove({ action }: { action: InferRemoveEvent }) {
  const t = useTranslations('admin.delete');

  const { id, title, modal, closeModal } = useRemove();

  const { executeAsync } = useAction(action);

  const handleRemove = async () => {
    await executeAsync({ id });
  };

  return (
    <AlertDialog open={modal} onOpenChange={closeModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('title', { name: title })}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('subtitle', { name: title })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">{t('btn_cancel')}</Button>
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>
            {t('btn_confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
