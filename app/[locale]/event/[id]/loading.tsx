import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl py-10">
      <div className="grid grid-cols-[1fr_260px] items-start gap-6">
        <div className="space-y-4">
          <Skeleton className="h-9 w-3/4" />
          <div className="flex items-center gap-4">
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div className="flex items-center gap-1" key={rowIndex}>
                <Skeleton className="size-8" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-34" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="rounded-lg bg-card p-4 shadow-lg">
          <Skeleton className="mb-2 h-4 w-22" />

          <div className="mb-3 border-b py-2">
            <Skeleton className="h-4 w-22" />
          </div>

          <Skeleton className="mb-3 h-8 bg-primary/70" />
        </Skeleton>
      </div>
    </div>
  );
}
