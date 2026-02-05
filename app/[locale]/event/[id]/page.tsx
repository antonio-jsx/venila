import { Preview } from '@/app/event/[id]/_components/preview';
import { getEventById } from '@/app/event/[id]/query';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/event/[id]'>): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);

  return {
    title: event.title,
  };
}

export default async function EventPage({
  params,
}: PageProps<'/[locale]/event/[id]'>) {
  const { id } = await params;

  return <Preview id={id} />;
}
