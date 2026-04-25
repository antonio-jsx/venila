'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';

export function PageNavigation({
  page,
  path,
  isActive,
}: {
  page: number;
  path: string;
  isActive: boolean;
}) {
  return (
    <Button
      asChild
      className={cn(isActive && 'bg-input underline')}
      size="sm"
      variant="ghost"
    >
      <Link href={{ pathname: path, query: { page } }}>{page}</Link>
    </Button>
  );
}
