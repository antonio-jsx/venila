'use client';

import {
  type EventSchema,
  type TicketSchema,
  ticketSchama,
} from '@/admin/create/schema';
import { FormField } from '@/components/form-field';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { DollarSignIcon, Trash2Icon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useId } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export function AddTicket({ children }: { children?: React.ReactNode }) {
  const formId = useId();

  const t = useTranslations('admin.events.form.ticket');

  const { fields, append, remove } = useFieldArray<EventSchema>({
    name: 'tickets',
  });

  const form = useForm({
    resolver: zodResolver(ticketSchama),
    defaultValues: {
      title: '',
      price: 0,
      quantity: 0,
      setmax: false,
      max: 0,
    },
  });

  const { handleSubmit, control, reset, watch } = form;

  const isMaxEnabled = watch('setmax');

  const onSubmit = handleSubmit((data: TicketSchema) => {
    append(data);
    reset();
  });

  return (
    <Dialog
      onOpenChange={() => {
        reset();
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> {t('title')}</DialogTitle>
        </DialogHeader>

        <form className="space-y-3" id={formId} onSubmit={onSubmit}>
          <FormField
            control={control}
            label={t('name')}
            name={`title`}
            render={(field) => <Input {...field} />}
          />
          <div className="flex items-start gap-3">
            <FormField
              control={control}
              label={t('price')}
              name={`price`}
              render={(field) => (
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    min={0}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    type="number"
                  />
                  <InputGroupAddon>
                    <DollarSignIcon />
                  </InputGroupAddon>
                </InputGroup>
              )}
            />

            <FormField
              control={control}
              label={t('quantity')}
              name={`quantity`}
              render={(field) => (
                <Input
                  {...field}
                  min={0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  type="number"
                />
              )}
            />
          </div>

          <FormField
            control={control}
            name="setmax"
            render={(field) => (
              <div className="flex items-center gap-2">
                <Switch
                  checked={field.value}
                  id="setmax"
                  onCheckedChange={field.onChange}
                />
                <label className="hover:text-primary" htmlFor="setmax">
                  {t('setmax')}
                </label>
              </div>
            )}
          />

          {isMaxEnabled && (
            <FormField
              control={control}
              name="max"
              render={(field) => (
                <Input
                  {...field}
                  min={0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  type="number"
                />
              )}
            />
          )}
        </form>

        <Separator />

        <div className="max-h-[30vh] space-y-3 overflow-y-auto">
          {fields.map((field, index) => (
            <div
              className="flex items-center gap-3 border-b py-1"
              key={field.id}
            >
              <strong>{field.title}</strong>
              <p className="ml-auto">
                <span className="text-green-800">{field.price}</span>/
                <span className="text-muted-foreground">{field.quantity}</span>
              </p>
              <Button
                onClick={() => remove(index)}
                size="icon-sm"
                type="button"
                variant="destructive"
              >
                <Trash2Icon />
              </Button>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button form={formId} type="submit">
            {t('add')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
