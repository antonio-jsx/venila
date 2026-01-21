import { TableCell, TableRow } from '@/ui/table';
import { PageNavigation } from './page-navigation';

export async function Pagination({
  show,
  cols,
  pages,
  path,
}: {
  show: string;
  cols: number;
  pages: number;
  path: string;
}) {
  return (
    <TableRow>
      <TableCell className="px-6 py-1" colSpan={cols}>
        <div className="flex items-center">
          <p className="text-xs">{show}</p>
          <PageNavigation total={pages} path={path} />
        </div>
      </TableCell>
    </TableRow>
  );
}
