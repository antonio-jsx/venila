'use client';

import { type EventSchema, eventSchema } from '@/admin/events/schema';
import { FormField } from '@/components/form-field';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

export function CreateEvent() {
  const MapLeaftlet = useMemo(
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
      cover: '',
      description: '',
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
      isActive: false,
    },
  });

  function onSubmit(data: EventSchema) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon /> {t('btn_create')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-3/4 min-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>
        </DialogHeader>

        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            label={t('name')}
            render={(field) => <Input {...field} />}
          />

          <FormField
            control={form.control}
            name="description"
            label={t('describe')}
            render={(field) => <Textarea {...field} />}
          />

          <Separator className="my-3" />
          <strong className="mb-3 inline-block">{t('dateTime')}</strong>

          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="start_date"
              label={t('startDate')}
              render={(field) => <Input type="date" {...field} />}
            />

            <FormField
              control={form.control}
              name="start_time"
              label={t('startTime')}
              render={(field) => <Input type="time" {...field} />}
            />

            <FormField
              control={form.control}
              name="end_date"
              label={t('endDate')}
              render={(field) => <Input type="date" {...field} />}
            />

            <FormField
              control={form.control}
              name="end_time"
              label={t('endTime')}
              render={(field) => <Input type="time" {...field} />}
            />
          </div>

          <Separator className="my-3" />
          <strong className="mb-3 inline-block">{t('location')}</strong>

          <FormField
            control={form.control}
            name="venue"
            label={t('venue')}
            render={(field) => <Input {...field} />}
          />
          <FormField
            control={form.control}
            name="address"
            label={t('address')}
            render={(field) => <Input {...field} />}
          />

          <MapLeaftlet />

          <FormField
            control={form.control}
            name="isActive"
            render={(field) => (
              <label className="flex items-center gap-2" htmlFor="active">
                <Checkbox
                  id="active"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                  ref={field.ref}
                  name={field.name}
                  onBlur={field.onBlur}
                />
                {t('active')}
              </label>
            )}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
