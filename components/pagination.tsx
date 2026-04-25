import { PageNavigation } from '@/components/buttons/page-navigation';
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Link } from '@/lib/i18n/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export async function Pagination({
  pages,
  path,
  actualPage,
}: {
  pages: number;
  path: string;
  actualPage: number;
}) {
  const safePage = Math.max(1, Math.min(actualPage, pages));

  const isBack = safePage > 1;
  const isNext = safePage < pages;

  const createPageHref = (page: number) => {
    return { pathname: path, query: { page } };
  };

  return (
    <PaginationContainer>
      <PaginationContent>
        <PaginationItem className="mr-2">
          <Link
            aria-disabled={!isBack}
            className={!isBack ? 'pointer-events-none opacity-50' : ''}
            href={createPageHref(safePage - 1)}
            tabIndex={!isBack ? -1 : undefined}
          >
            <ChevronLeftIcon className="size-4" />
          </Link>
        </PaginationItem>

        {Array.from({ length: pages }).map((_, index) => {
          const page = index + 1;

          return (
            <PaginationItem key={page}>
              <PageNavigation
                isActive={page === safePage}
                page={page}
                path={path}
              />
            </PaginationItem>
          );
        })}

        <PaginationItem className="ml-2">
          <Link
            aria-disabled={!isNext}
            className={!isNext ? 'pointer-events-none opacity-50' : ''}
            href={createPageHref(safePage + 1)}
            tabIndex={!isNext ? -1 : undefined}
          >
            <ChevronRightIcon className="size-4" />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
}
