/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no index> */
import { PageNavigation } from '@/components/page-navigation';
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';

export async function Pagination({
  pages,
  path,
}: {
  pages: number;
  path: string;
}) {
  return (
    <PaginationContainer>
      <PaginationContent>
        {Array.from({ length: pages }).map((_, index) => (
          <PaginationItem key={index}>
            <PageNavigation page={index} path={path} />
          </PaginationItem>
        ))}
      </PaginationContent>
    </PaginationContainer>
  );
}
