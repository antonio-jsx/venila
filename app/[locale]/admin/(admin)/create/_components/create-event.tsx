'use client';

import { NavTitle } from '@/admin/_components/nav-title';
import { Banner } from '@/admin/create/_components/banner';
import { Scheduler } from '@/admin/create/_components/scheduler';
import { Tickets } from '@/admin/create/_components/tickets';
import { addEvent } from '@/admin/create/action';
import { type EventSchema, eventSchema } from '@/admin/create/schema';
import { SaveAction } from '@/components/buttons/save-action';
import Tiptap from '@/components/editor/tiptap';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import { usePathname } from '@/lib/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';
import { useTranslations } from 'next-intl';
import { Suspense, useEffect, useId } from 'react';
import { FormProvider } from 'react-hook-form';
import { toast } from 'sonner';

interface Props {
  isEdit?: boolean;
  values: EventSchema;
}

export function CreateEvent({ isEdit, values }: Props) {
  const formId = useId();

  const pathname = usePathname();

  const t = useTranslations('admin.events.form');

  const { form, action, handleSubmitWithAction } = useHookFormAction(
    addEvent,
    zodResolver(eventSchema),
    {
      formProps: {
        defaultValues: values,
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
    }
  );
  const { control, reset } = form;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <pathname is used as a navigation change trigger>
  useEffect(() => {
    reset(values);
  }, [pathname, reset]);

  return (
    <FormProvider {...form}>
      <div className="grid grid-cols-[1fr_auto_260px] items-start gap-4">
        <div className="space-y-6">
          <NavTitle subtitle={t('subtitle')} text={t('title')} />

          <form
            className="space-y-3"
            id={formId}
            onSubmit={handleSubmitWithAction}
          >
            <FormField
              control={control}
              label={t('name')}
              name="title"
              render={(field) => (
                <Input {...field} placeholder={t('ph_name')} />
              )}
            />

            <Suspense>
              <Scheduler />
            </Suspense>
            <div className="space-y-1">
              <p className="font-semibold text-sm">{t('describe')}</p>
              <Tiptap value={values.description} />
            </div>
          </form>
        </div>

        <div className="h-full w-px bg-gradient-to-b from-transparent via-input to-transparent" />

        <div className="sticky top-16 space-y-3">
          <Tickets />
          <Banner />
          <SaveAction
            form={formId}
            state={action.isPending}
            text={isEdit ? t('btn_update') : t('btn_create')}
          />
        </div>
      </div>
    </FormProvider>
  );
}
