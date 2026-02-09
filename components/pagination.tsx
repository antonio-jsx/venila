import { PageNavigation } from '@/components/page-navigation';

export async function Pagination({
  show,
  pages,
  path,
}: {
  show: string;
  pages: number;
  path: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <p className="w-full text-muted-foreground text-xs">{show}</p>
      <PageNavigation total={pages} path={path} />
    </div>
  );
}
