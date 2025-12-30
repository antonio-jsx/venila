'use client';

import { type TicketSchema, ticketSchema } from '@/admin/tickets/schema';
import { FormField } from '@/components/form-field';
import { Button } from '@/ui/button';
import { Checkbox } from '@/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

export function CreateTicket() {
  const t = useTranslations('admin.tickets.form');

  const form = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      name: '',
      sku: '',
      description: '',
      price: '',
      quantity: '',
      event: '',
      active: '',
      startDate: '',
      endDate: '',
      isActive: false,
    },
  });

  function onSubmit(data: TicketSchema) {
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
            name="name"
            label={t('name')}
            render={(field) => <Input {...field} />}
          />

          <FormField
            control={form.control}
            name="sku"
            label="SKU (optional)"
            render={(field) => <Input {...field} />}
          />

          <FormField
            control={form.control}
            name="description"
            label={t('describe')}
            render={(field) => <Textarea {...field} />}
          />

          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="price"
              label={t('price')}
              render={(field) => <Input {...field} />}
            />

            <FormField
              control={form.control}
              name="quantity"
              label={t('quantity')}
              render={(field) => <Input {...field} />}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
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
