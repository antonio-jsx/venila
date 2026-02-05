import { Header } from '@/app/event/[id]/_components/header';
import { ItemDate } from '@/app/event/[id]/_components/item-date';
import { getEventById } from '@/app/event/[id]/query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item';
import { extractIdFromSlug } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export async function Preview({ id }: { id: string }) {
  const rawId = extractIdFromSlug(id);
  if (!rawId) return notFound();

  const event = await getEventById(rawId);
  if (!event) return notFound();

  const t = await getTranslations('event');

  return (
    <main className="mx-auto mt-4 max-w-4xl">
      <Header title={event.title} />

      <section className="grid grid-cols-[1fr_260px] items-start py-6">
        <div></div>
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>{t('title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ItemGroup className="gap-1.5">
              {event.tickets?.map((ticket) => (
                <Item variant="muted" key={ticket.title}>
                  <ItemContent>
                    <ItemTitle>{ticket.title}</ItemTitle>
                  </ItemContent>
                  <ItemContent>
                    <ItemDescription className="font-bold text-lg text-primary">
                      ${ticket.price}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>

            <Button className="mt-3 w-full">
              {t('button')} <ArrowRightIcon />
            </Button>

            <ItemSeparator className="my-3" />

            <ItemGroup className="gap-1.5">
              <ItemDate
                variant="calendar"
                date={event.startDate}
                time={event.startTime}
              />

              <ItemDate
                variant="clock"
                date={event.endDate}
                time={event.endTime}
              />
            </ItemGroup>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
