'use client';

import { NavTitle } from '@/admin/_components/nav-title';
import { Banner } from '@/admin/create/_components/banner';
import { Scheduler } from '@/admin/create/_components/scheduler';
import { Tickets } from '@/admin/create/_components/tickets';
import { addEvent } from '@/admin/create/action';
import {
  type EventSchema,
  eventDefaults,
  eventSchema,
} from '@/admin/create/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import { usePathname } from '@/lib/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonalIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { Suspense, useEffect, useId } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Editor = dynamic(() => import('@/components/editor'), {
  ssr: false,
});

export function CreateEvent() {
  const formId = useId();

  const pathname = usePathname();

  const t = useTranslations('admin.events.form');

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: eventDefaults,
    mode: 'onChange',
    shouldUnregister: false,
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
    <FormProvider {...form}>
      <div className="grid grid-cols-[1fr_260px] items-start gap-6">
        <div className="space-y-4">
          <NavTitle text={t('title')} subtitle={t('subtitle')} />

          <form className="space-y-3" id={formId} onSubmit={onSubmit}>
            <FormField
              control={control}
              name="title"
              label={t('name')}
              render={(field) => (
                <Input {...field} placeholder={t('ph_name')} />
              )}
            />

            <Suspense>
              <Scheduler />

              <div className="space-y-1">
                <p className="text-sm">{t('describe')}</p>
                <Editor />
              </div>
            </Suspense>
          </form>

          <ButtonSend
            form={formId}
            state={form.formState.isSubmitting}
            variant="elevated"
          >
            <SendHorizonalIcon /> {t('btn_send')}
          </ButtonSend>
        </div>

        <div className="space-y-3">
          <Tickets />
          <Banner />
        </div>
      </div>
    </FormProvider>
  );
}
