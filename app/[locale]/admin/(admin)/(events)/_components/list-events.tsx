import { Event } from '@/admin/(events)/_components/event';
import { EmptyCard } from '@/components/empty-card';
import { Pagination } from '@/components/pagination';
import type { EventWithPriceRange } from '@/types/admin';
import type { Paginated } from '@/types/index';
import { getTranslations } from 'next-intl/server';

type Props = {
  value: Paginated<EventWithPriceRange>;
  actualPage: number;
};

export async function ListEvents({ actualPage, value }: Props) {
  const t = await getTranslations('admin.events');
  const data = value.data;
  const page = value.pagination;

  if (data.length <= 0) {
    return <EmptyCard empty={t('empty')} title={t('empty_title')} />;
  }

  return (
    <>
      <div className="space-y-3">
        {data.map((event) => (
          <Event key={event.id} value={event} />
        ))}
      </div>

      <Pagination
        actualPage={actualPage}
        pages={page.totalPages}
        path="/admin"
      />
    </>
  );
}
