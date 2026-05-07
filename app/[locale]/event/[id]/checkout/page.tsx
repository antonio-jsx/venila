import { CheckoutForm } from '@/app/event/[id]/checkout/_components/form';
import { getEventById } from '@/app/event/[id]/query';
import { extractIdFromSlug } from '@/lib/utils';
import { notFound } from 'next/navigation';

export default async function CheckoutPage({
  params,
}: PageProps<'/[locale]/event/[id]/checkout'>) {
  const { id } = await params;

  const rawId = extractIdFromSlug(id);
  if (!rawId) return notFound();

  const event = await getEventById(rawId);
  if (!event) return notFound();

  const [bgColor, textColor] = event.theme?.split(',') ?? [
    '#6366f1',
    '#ffffff',
  ];

  const tickets = event.tickets ?? [];

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
      <CheckoutForm
        eventId={rawId}
        eventName={event.title}
        eventSlug={event.slug}
        tickets={tickets}
      />
    </main>
  );
}
