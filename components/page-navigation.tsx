/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no index> */
'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Link } from '@/lib/i18n/navigation';

export function PageNavigation({
  total,
  path,
}: {
  total: number;
  path: string;
}) {
  return (
    <Pagination>
      <PaginationContent className="ml-auto">
        {Array.from({ length: total }).map((_, index) => (
          <PaginationItem key={index}>
            <Link
              className="flex size-7 items-center justify-center rounded-md font-medium text-md hover:bg-accent"
              href={{ pathname: path, query: { page: index + 1 } }}
            >
              {index + 1}
            </Link>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
