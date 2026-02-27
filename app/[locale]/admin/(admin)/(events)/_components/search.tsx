'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { searchParsers } from '@/lib/searchParams';
import { SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { debounce, useQueryStates } from 'nuqs';

export function Search() {
  const t = useTranslations('admin.events');

  const [_, setFilters] = useQueryStates(searchParsers, {
    shallow: false,
    limitUrlUpdates: debounce(300),
  });

  return (
    <InputGroup>
      <InputGroupInput
        placeholder={t('search')}
        onChange={(e) => setFilters({ q: e.target.value })}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
