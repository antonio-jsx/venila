'use client';

import { Link } from '@/lib/i18n/navigation';
import { Button } from './ui/button';

export function PageNavigation({ page, path }: { page: number; path: string }) {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href={{ pathname: path, query: { page: page + 1 } }}>
        {page + 1}
      </Link>
    </Button>
  );
}
