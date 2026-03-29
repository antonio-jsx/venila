import { Preview } from '@/app/event/[id]/_components/preview';
import { getEventById } from '@/app/event/[id]/query';
import { extractIdFromSlug } from '@/lib/utils';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/event/[id]'>): Promise<Metadata> {
  const { id } = await params;

  const rawId = extractIdFromSlug(id);
  if (!rawId) return {};
  const event = await getEventById(rawId);

  return {
    title: { absolute: event?.title ?? 'Not Found' },
  };
}

export default async function EventPage({
  params,
}: PageProps<'/[locale]/event/[id]'>) {
  const { id } = await params;

  return <Preview id={id} />;
}
