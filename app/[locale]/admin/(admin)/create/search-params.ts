import { createLoader, parseAsInteger } from 'nuqs/server';

export const filterParsers = {
  edit: parseAsInteger.withDefault(null),
};

export const loadSearchParams = createLoader(filterParsers);
