import { PageNavigation } from '@/components/page-navigation';
import { TableCell, TableRow } from '@/components/ui/table';

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
      <TableCell className="px-2 py-1" colSpan={cols}>
        <div className="flex items-center">
          <p className="text-muted-foreground text-xs">{show}</p>
          <PageNavigation total={pages} path={path} />
        </div>
      </TableCell>
    </TableRow>
  );
}
