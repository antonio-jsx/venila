import { createLoader, parseAsInteger, parseAsString } from 'nuqs/server';

export const searchParsers = {
  q: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1),
};

export const loadSearchParams = createLoader(searchParsers);
