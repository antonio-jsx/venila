'use client';

import { type EventSchema, eventSchema } from '@/admin/events/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import { addEvent } from '@/server/mutation/add-event';
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
import { Separator } from '@/ui/separator';
import { Textarea } from '@/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function CreateEvent() {
  const MapLeaflet = useMemo(
    () =>
      dynamic(() => import('@/components/map-leaflet'), {
        ssr: false,
      }),
    []
  );

  const t = useTranslations('admin.events.form');

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      address: '',
    },
  });

  const { executeAsync } = useAction(addEvent, {
    onSuccess: () => {
      toast(t('success'));
    },
    onError: () => {
      toast(t('fail'));
    },
  });

  async function onSubmit(data: EventSchema) {
    await executeAsync(data);
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
              name="title"
              label={t('name')}
              render={(field) => <Input {...field} />}
            />

            <div className="flex items-center gap-5">
              <FormField
                control={form.control}
                name="startDate"
                label={t('startDate')}
                render={(field) => <Input type="date" {...field} />}
              />

              <FormField
                control={form.control}
                name="endDate"
                label={t('endDate')}
                render={(field) => <Input type="date" {...field} />}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              label={t('describe')}
              render={(field) => <Textarea {...field} />}
            />

            <Separator className="my-3" />
            <strong className="mb-3 inline-block">{t('location')}</strong>

            <FormField
              control={form.control}
              name="address"
              render={(field) => <Input type="hidden" {...field} />}
            />

            <MapLeaflet />

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
