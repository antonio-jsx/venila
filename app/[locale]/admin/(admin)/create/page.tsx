import { CreateEvent } from '@/admin/create/_components/create-event';
import { eventDefaults } from '@/admin/create/schema';
import { loadSearchParams } from '@/admin/create/search-params';
import { getEventById } from '@/app/event/[id]/query';
import { omitKeys } from '@/lib/utils';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('admin.events.form');
  return { title: t('title') };
}

export default async function CreatePage({
  searchParams,
}: PageProps<'/[locale]/admin/create'>) {
  const { edit } = await loadSearchParams(searchParams);

  const isEditing = edit !== null && !Number.isNaN(edit) && edit > 0;

  console.log(isEditing, edit);

  const event = isEditing ? await getEventById(edit) : null;

  const eventFormData = event
    ? {
        ...omitKeys(event, ['id', 'slug', 'isActive']),
        tickets: event.tickets.map((ticket) => ({
          ...omitKeys(ticket, ['eventId', 'sold', 'id']),
          price: Number(ticket.price),
        })),
      }
    : eventDefaults;

  return <CreateEvent isEdit={isEditing} values={eventFormData} />;
}
