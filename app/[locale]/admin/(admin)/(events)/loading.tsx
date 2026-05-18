import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="h-6 w-14" />

      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <Skeleton
            className="flex w-full flex-1 flex-row gap-0 rounded-4xl border border-input/60 bg-card p-0"
            key={rowIndex}
          >
            <div className="relative flex w-20 shrink-0 flex-col items-center justify-center border-r-2 border-dashed">
              <Skeleton className="h-4 w-9" />
              <div className="absolute -right-2.5 -bottom-px h-2.5 w-5 rounded-t-xl border border-b-0 bg-zinc-50 transition-colors group-hover:border-primary/30 dark:bg-background"></div>
              <div className="absolute -top-px -right-2.5 h-2.5 w-5 rounded-b-full border border-t-0 bg-zinc-50 transition-colors group-hover:border-primary/30 dark:bg-background"></div>
            </div>
            <div className="flex flex-1 flex-col gap-1 p-4">
              <div className="flex items-start justify-between gap-1">
                <Skeleton className="h-4 w-2/5" />

                <div className="flex gap-2 px-4">
                  <Skeleton className="h-4 w-42" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-22" />
                </div>
              </div>

              <Skeleton className="h-4 w-1/9" />
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
