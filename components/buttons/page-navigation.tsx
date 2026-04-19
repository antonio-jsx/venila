'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export function PageNavigation({ page, path }: { page: number; path: string }) {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href={{ pathname: path, query: { page: page + 1 } }}>
        {page + 1}
      </Link>
    </Button>
  );
}
