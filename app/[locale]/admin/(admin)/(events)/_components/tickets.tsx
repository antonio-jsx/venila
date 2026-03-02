'use client';

import type { EventSchema } from '@/admin/(events)/schema';
import { FormField } from '@/components/form-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { DollarSignIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function Tickets() {
  const t = useTranslations('admin.events.form.ticket');

  const { control } = useFormContext<EventSchema>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tickets',
  });

  return (
    <div className="space-y-4">
      <Button
        className="h-fit px-[0!important]"
        type="button"
        size="sm"
        variant="link"
        onClick={() => {
          append({ title: '', price: 0, quantity: 0 });
        }}
      >
        <PlusIcon /> {t('button')}
      </Button>

      <div className="grid grid-cols-[310px_1fr_1fr_50px] gap-4">
        <p>{t('name')}</p>
        <p>{t('price')}</p>
        <p>{t('quantity')}</p>
      </div>

      {fields.map((field, index) => (
        <div
          className="grid grid-cols-[310px_1fr_1fr_50px] gap-4"
          key={field.id}
        >
          <FormField
            control={control}
            name={`tickets.${index}.title`}
            render={(field) => <Input {...field} />}
          />

          <FormField
            control={control}
            name={`tickets.${index}.price`}
            render={(field) => (
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type="number"
                  min={0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <InputGroupAddon>
                  <DollarSignIcon />
                </InputGroupAddon>
              </InputGroup>
            )}
          />

          <FormField
            control={control}
            name={`tickets.${index}.quantity`}
            render={(field) => (
              <Input
                {...field}
                type="number"
                min={0}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <Button
            type="button"
            size="icon-sm"
            variant="ghost"
            onClick={() => remove(index)}
            disabled={fields.length === 1}
          >
            <TrashIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}
