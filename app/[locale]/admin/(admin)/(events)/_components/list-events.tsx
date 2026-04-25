import { Event } from '@/admin/(events)/_components/event';
import { getEvents } from '@/admin/(events)/query';
import { EmptyCard } from '@/components/empty-card';
import { Pagination } from '@/components/pagination';
import { getTranslations } from 'next-intl/server';

export async function ListEvents({ page }: { page: number }) {
  const [t, { data, pagination }] = await Promise.all([
    getTranslations('admin.events'),
    getEvents({ page }),
  ]);

  if (data.length <= 0) {
    return <EmptyCard empty={t('empty')} title={t('empty_title')} />;
  }

  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        {data.map((event) => (
          <Event key={event.id} value={event} />
        ))}
      </div>

      <Pagination
        actualPage={page}
        pages={pagination.totalPages}
        path="/admin"
      />
    </>
  );
}
