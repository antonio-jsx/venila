import { ItemDate } from '@/app/event/[id]/_components/item-date';
import { getEventById } from '@/app/event/[id]/query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
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

  const [bgColor, textColor] = event.theme?.split(',') ?? [
    '#6366f1',
    '#ffffff',
  ];

  return (
    <main
      className="mx-auto max-w-4xl py-10"
      style={
        {
          '--primary': bgColor,
          '--primary-foreground': textColor,
        } as React.CSSProperties
      }
    >
      <section className="grid grid-cols-[1fr_260px] items-start gap-4">
        <div className="space-y-4">
          <h1 className="font-semibold text-5xl leading-[1.1] tracking-tight">
            {event.title}
          </h1>

          <ItemGroup className="w-fit flex-row items-center justify-start gap-4">
            <ItemDate
              variant="calendar"
              date={event.startDate}
              time={event.startTime}
            />
            <div className="h-5 w-px bg-input" />
            <ItemDate
              variant="clock"
              date={event.endDate}
              time={event.endTime}
            />
          </ItemGroup>

          <div
            className="prose prose-sm dark:prose-invert prose-blockquote:my-2 prose-headings:my-1.5 prose-ol:my-1 prose-p:my-1 prose-ul:my-1 prose-headings:font-normal prose-p:text-md"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <html>
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ItemGroup className="gap-1.5">
              {event.tickets?.map((ticket) => (
                <Item
                  variant="outline"
                  className="rounded-none border-x-0 border-t-0 px-0"
                  key={ticket.title}
                >
                  <ItemContent>
                    <ItemTitle>{ticket.title}</ItemTitle>
                  </ItemContent>
                  <ItemContent>
                    <ItemDescription className="font-bold font-mono text-primary">
                      ${ticket.price}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>

            <Button className="mt-3 w-full">
              {t('button')} <ArrowRightIcon />
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
