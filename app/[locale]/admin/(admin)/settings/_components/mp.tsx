'use client';

import { addMercadoPago } from '@/admin/settings/action';
import { type MpSchema, mpSchema } from '@/admin/settings/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useMP } from '@/hooks/mp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function Mercadopago() {
  const t = useTranslations('admin.settings.payments.mercadopago.form');

  const { modal, closeModal } = useMP();

  const form = useForm({
    resolver: zodResolver(mpSchema),
    defaultValues: { publicKey: '', accessToken: '' },
  });

  const { control, handleSubmit, formState } = form;

  const { executeAsync } = useAction(addMercadoPago, {
    onSuccess: () => {
      toast(t('success'));
    },
    onError: () => {
      toast(t('fail'));
    },
  });

  const onSubmit = handleSubmit(async (data: MpSchema) => {
    await executeAsync(data);
  });

  return (
    <Dialog open={modal} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Mercado Pago</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={onSubmit}>
          <FormField
            control={control}
            name="publicKey"
            label={t('publicKey')}
            render={(field) => <Input {...field} />}
          />

          <FormField
            control={control}
            name="accessToken"
            label={t('accessToken')}
            render={(field) => <Input {...field} />}
          />

          <ButtonSend state={formState.isSubmitting}>{t('button')}</ButtonSend>
        </form>
      </DialogContent>
    </Dialog>
  );
}
