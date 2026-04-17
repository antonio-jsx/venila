'use client';

import { NavTitle } from '@/admin/_components/nav-title';
import { Banner } from '@/admin/create/_components/banner';
import { Scheduler } from '@/admin/create/_components/scheduler';
import { Tickets } from '@/admin/create/_components/tickets';
import { addEvent } from '@/admin/create/action';
import { eventDefaults, eventSchema } from '@/admin/create/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import { usePathname } from '@/lib/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { Suspense, useEffect, useId } from 'react';
import { FormProvider } from 'react-hook-form';
import { toast } from 'sonner';

const Editor = dynamic(() => import('@/components/editor'), {
  ssr: false,
});

export function CreateEvent() {
  const formId = useId();

  const pathname = usePathname();

  const t = useTranslations('admin.events.form');

  const { form, action, handleSubmitWithAction, resetFormAndAction } =
    useHookFormAction(addEvent, zodResolver(eventSchema), {
      formProps: {
        defaultValues: eventDefaults,
        mode: 'onChange',
        shouldUnregister: false,
      },
      actionProps: {
        onSuccess: () => {
          toast(t('success'));
        },
        onError: () => {
          toast(t('fail'));
        },
      },
    });
  const { control } = form;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <pathname is used as a navigation change trigger>
  useEffect(() => {
    resetFormAndAction();
  }, [pathname, resetFormAndAction]);

  return (
    <FormProvider {...form}>
      <div className="grid grid-cols-[1fr_auto_260px] items-start gap-6">
        <div className="space-y-6">
          <NavTitle text={t('title')} subtitle={t('subtitle')} />

          <form
            className="space-y-3"
            id={formId}
            onSubmit={handleSubmitWithAction}
          >
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
            </Suspense>
            <div className="space-y-1">
              <p className="font-semibold text-sm">{t('describe')}</p>
              <Editor />
            </div>
          </form>
        </div>

        <div className="h-full w-px bg-gradient-to-b from-transparent via-input to-transparent" />

        <div className="sticky top-16 space-y-3">
          <Tickets />
          <Banner />
          <ButtonSend form={formId} state={action.isPending}>
            {t('btn_send')}
          </ButtonSend>
        </div>
      </div>
    </FormProvider>
  );
}
