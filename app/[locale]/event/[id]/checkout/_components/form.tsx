'use client';

import { Purchase } from '@/app/event/[id]/checkout/_components/purchase';
import { checkoutAction } from '@/app/event/[id]/checkout/action';
import { checkoutSchema } from '@/app/event/[id]/checkout/schema';
import { SaveAction } from '@/components/buttons/save-action';
import { FormField } from '@/components/form-field';
import { Input } from '@/components/ui/input';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';
import { Link } from '@/lib/i18n/navigation';
import { QuantityField } from './quantity';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';
import { ArrowLeftIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useId } from 'react';
import { FormProvider } from 'react-hook-form';

interface Props {
  eventId: number;
  eventName: string;
  eventSlug: string;
  tickets: {
    id: number;
    title: string;
    price: string;
    quantity: number;
    sold: number;
  }[];
}

export function CheckoutForm({ eventId, eventSlug, tickets }: Props) {
  const formId = useId();

  const { form, action, handleSubmitWithAction } = useHookFormAction(
    checkoutAction,
    zodResolver(checkoutSchema),
    {
      formProps: {
        defaultValues: {
          items: tickets.map((ticket) => ({
            quantity: 0,
            ticketHash: ticket.id,
          })),
          name: '',
          email: '',
          phone: '',
        },
        mode: 'onChange',
        shouldUnregister: false,
      },
      actionProps: {
        onSuccess: () => {},
        onError: () => {},
      },
    }
  );
  const { control } = form;

  const t = useTranslations('checkout');

  return (
    <FormProvider {...form}>
      <form id={formId} onSubmit={handleSubmitWithAction}>
        <div className="grid grid-cols-[1fr_270px] items-start gap-8">
          <div className="space-y-4">
            <Link
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
              href={`/event/${eventSlug}.${eventId}`}
            >
              <ArrowLeftIcon /> {t('back')}
            </Link>
            <h1 className="font-bold text-xl">{t('title')}</h1>

            {tickets.map((ticket, index) => (
              <Item
                className="rounded-3xl bg-card px-4 py-2"
                key={ticket.id}
                variant="outline"
              >
                <ItemContent>
                  <ItemTitle className="text-lg">{ticket.title}</ItemTitle>
                  <ItemDescription className="font-bold font-mono text-md text-primary">
                    ${ticket.price}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <FormField
                    control={control}
                    name={`items.${index}.quantity`}
                    render={(field) => (
                      <QuantityField
                        field={field}
                        max={ticket.quantity}
                        min={0}
                      />
                    )}
                  />
                </ItemActions>
              </Item>
            ))}

            <h3 className="font-bold text-lg">{t('contact')}</h3>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={control}
                label={t('name')}
                name="name"
                render={(field) => <Input {...field} />}
              />
              <FormField
                control={control}
                label={t('email')}
                name="email"
                render={(field) => <Input {...field} />}
              />
              <FormField
                control={control}
                label={t('phone')}
                name="phone"
                render={(field) => <Input {...field} />}
              />
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-4 shadow-lg">
            <h3 className="font-bold text-lg">{t('purchase')}</h3>

            <Purchase tickets={tickets} />

            <SaveAction
              className="w-full"
              form={formId}
              state={action.isPending}
              text={t('pay')}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
