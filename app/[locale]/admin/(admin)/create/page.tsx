import { CreateEvent } from '@/admin/create/_components/create-event';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('admin.events.form');
  return { title: t('title') };
}

export default function CreatePage() {
  return <CreateEvent />;
}
