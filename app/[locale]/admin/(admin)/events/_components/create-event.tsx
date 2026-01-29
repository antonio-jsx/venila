'use client';

import { Tickets } from '@/admin/events/_components/tickets';
import {
  type EventSchema,
  eventDefaults,
  eventSchema,
} from '@/admin/events/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import { SectionTitle } from '@/components/section-title';
import { Separator } from '@/components/ui/separator';
import { usePathname } from '@/lib/i18n/navigation';
import { addEvent } from '@/server/mutation/add-event';
import { Input } from '@/ui/input';
import { MoreDetails } from './more-details';
import { SelectDate } from './select-date';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonalIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useId } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function CreateEvent() {
  const pathname = usePathname();

  const formId = useId();

  const t = useTranslations('admin.events.form');

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: eventDefaults,
  });
  const { reset, control, handleSubmit } = form;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <pathname is used as a navigation change trigger>
  useEffect(() => {
    reset();
  }, [pathname, reset]);

  const { executeAsync } = useAction(addEvent, {
    onSuccess: () => {
      toast(t('success'));
    },
    onError: () => {
      toast(t('fail'));
    },
  });

  const onSubmit = handleSubmit(async (data: EventSchema) => {
    await executeAsync(data);
  });

  return (
    <div className="px-14">
      <SectionTitle subtitle={t('subtitle')}>{t('title')}</SectionTitle>

      <FormProvider {...form}>
        <form className="mt-4 space-y-4" id={formId} onSubmit={onSubmit}>
          <FormField
            control={control}
            name="title"
            label={t('name')}
            render={(field) => <Input {...field} placeholder={t('ph_name')} />}
          />

          <div className="flex max-w-lg items-start gap-4">
            <SelectDate />
            <FormField
              control={control}
              name="startTime"
              label={t('startTime')}
              render={(field) => <Input type="time" step={1800} {...field} />}
            />
            <FormField
              control={control}
              name="endTime"
              label={t('endTime')}
              render={(field) => <Input type="time" step={1800} {...field} />}
            />
          </div>

          <MoreDetails />

          <Separator />

          <Tickets />

          <ButtonSend form={formId} state={form.formState.isSubmitting}>
            {t('btn_send')} <SendHorizonalIcon />
          </ButtonSend>
        </form>
      </FormProvider>
    </div>
  );
}
