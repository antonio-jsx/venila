'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const Editor = dynamic(() => import('@/components/editor'), {
  ssr: false,
});

export function MoreDetails() {
  const t = useTranslations('admin.events.form');
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Button
        className="h-fit p-0 has-[>svg]:px-0"
        type="button"
        variant="link"
        onClick={() => setVisible((e) => !e)}
      >
        {t('more')}

        <ChevronDownIcon className={cn(visible && 'rotate-180')} />
      </Button>

      <div className={cn(!visible && 'hidden')}>
        <p>{t('describe')}</p>
        <Editor />
      </div>
    </>
  );
}
