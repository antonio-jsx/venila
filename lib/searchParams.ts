import { createLoader, parseAsInteger } from 'nuqs/server';

export const filterParsers = {
  page: parseAsInteger.withDefault(1),
};

export const loadfilterParams = createLoader(filterParsers);
