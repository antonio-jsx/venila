'use client';

import { Button } from '@/ui/button';
import { Spinner } from '@/ui/spinner';
import { useTranslations } from 'next-intl';

export function ButtonSend({ state }: { state: boolean }) {
  const t = useTranslations('signin');

  return (
    <Button type="submit">
      {state && <Spinner />}
      {t('button')}
    </Button>
  );
}
