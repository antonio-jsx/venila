'use client';

import { SelectDate } from '@/admin/(events)/_components/select-date';
import { Tickets } from '@/admin/(events)/_components/tickets';
import { addEvent } from '@/admin/(events)/action';
import {
  type EventSchema,
  eventDefaults,
  eventSchema,
} from '@/admin/(events)/schema';
import { ButtonSend } from '@/components/button-send';
import { FormField } from '@/components/form-field';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { usePathname } from '@/lib/i18n/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ArrowRight, Plus, SendHorizonalIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useId, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Editor = dynamic(() => import('@/components/editor'), {
  ssr: false,
});

export function CreateEvent() {
  const steps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const pathname = usePathname();

  const formId = useId();

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
    setCurrentStep(1);
  }, [pathname, reset]);

  const { executeAsync } = useAction(addEvent, {
    onSuccess: () => {
      toast(t('success'));
    },
    onError: () => {
      toast(t('fail'));
    },
  });

  const next = async () => {
    let fields: (keyof EventSchema)[] = [];

    if (currentStep === 1) fields = ['title', 'short'];
    if (currentStep === 2)
      fields = ['startDate', 'endDate', 'startTime', 'endTime'];
    if (currentStep === 3) fields = ['description'];
    if (currentStep === 4) fields = ['tickets'];

    const valid = await form.trigger(fields);

    if (valid) setCurrentStep((prev) => prev + 1);
  };

  const onSubmit = handleSubmit(async (data: EventSchema) => {
    await executeAsync(data);
  });

  const closeModal = () => {
    reset();
    setCurrentStep(1);
  };

  return (
    <Dialog onOpenChange={closeModal}>
      <DialogTrigger asChild>
        <Button className="gap-0.5" size="sm" variant="ghost">
          <Plus /> {t('title')}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-3xl">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('subtitle')}</DialogDescription>
        </DialogHeader>

        <FormProvider {...form}>
          <form className="space-y-4" id={formId} onSubmit={onSubmit}>
            {currentStep === 1 && (
              <>
                <FormField
                  control={control}
                  name="title"
                  label={t('name')}
                  render={(field) => (
                    <Input {...field} placeholder={t('ph_name')} />
                  )}
                />
                <FormField
                  control={control}
                  name="short"
                  label={t('short')}
                  render={(field) => <Textarea rows={2} {...field} />}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <SelectDate />
                <div className="flex items-start gap-4">
                  <FormField
                    control={control}
                    name="startTime"
                    label={t('startTime')}
                    render={(field) => (
                      <Input type="time" step={1800} {...field} />
                    )}
                  />
                  <FormField
                    control={control}
                    name="endTime"
                    label={t('endTime')}
                    render={(field) => (
                      <Input type="time" step={1800} {...field} />
                    )}
                  />
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <p className="mb-1 text-sm">{t('describe')}</p>
                <Editor />
              </>
            )}

            {currentStep === 4 && <Tickets />}
          </form>
        </FormProvider>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentStep === 1}
            onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
          >
            <ArrowLeft /> {t('back')}
          </Button>

          {currentStep === steps ? (
            <ButtonSend
              form={formId}
              state={form.formState.isSubmitting}
              disabled={currentStep !== 4}
            >
              {t('btn_send')} <SendHorizonalIcon />
            </ButtonSend>
          ) : (
            <Button
              type="button"
              size="sm"
              disabled={currentStep === steps}
              onClick={next}
            >
              {t('continue')} <ArrowRight />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
