'use client';

import { ToggleDays } from '@/admin/tickets/_components/toggle-days';
import { type TicketSchema, ticketSchema } from '@/admin/tickets/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import { Button } from '@/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import { Input } from '@/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';

export function CreateTicket() {
  const t = useTranslations('admin.tickets.form');

  const form = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      name: '',
      days: [],
      schedules: {},
      price: 0,
      quantity: 0,
      event: 0,
    },
  });

  function onSubmit(data: TicketSchema) {
    console.log(data);
  }

  function dialogClose() {
    form.reset();
  }

  return (
    <Dialog onOpenChange={dialogClose}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon /> {t('btn_create')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-3/4 overflow-y-auto lg:min-w-3xl">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>
        </DialogHeader>

        <FormProvider {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              label={t('name')}
              render={(field) => <Input {...field} />}
            />

            <ToggleDays />

            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="price"
                label={t('price')}
                render={(field) => (
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                label={t('quantity')}
                render={(field) => (
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  disabled={form.formState.isSubmitting}
                >
                  {t('btn_cancel')}
                </Button>
              </DialogClose>
              <ButtonSend
                text={t('btn_send')}
                state={form.formState.isSubmitting}
              />
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
