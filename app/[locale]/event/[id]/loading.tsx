import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl">
      <Skeleton className="mt-4 flex h-60 flex-col flex-col justify-end rounded-lg bg-accent p-4">
        <Skeleton className="h-7 w-62 bg-black/20" />
      </Skeleton>

      <div className="mt-6 grid grid-cols-[1fr_260px] items-start">
        <div></div>
        <Skeleton className="rounded-lg bg-card p-4 shadow-lg">
          <Skeleton className="mb-5 h-4 w-22" />

          <Skeleton className="mb-3 p-2">
            <Skeleton className="h-4 w-22 bg-black/20" />
          </Skeleton>

          <Skeleton className="mb-3 h-8 bg-primary/70" />

          <Separator />
        </Skeleton>
      </div>
    </div>
  );
}
