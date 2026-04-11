import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-5">
      <Skeleton className="h-5 w-14" />

      <div className="flex flex-1 flex-col gap-4">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <Skeleton
            className="flex w-full flex-1 flex-row gap-0 rounded-4xl border border-input/60 bg-card p-0"
            key={rowIndex}
          >
            <div className="relative flex w-20 shrink-0 flex-col items-center justify-center border-r-2 border-dashed">
              <Skeleton className="h-5 w-9 bg-black/10" />
              <div className="absolute -right-2.5 -bottom-px h-2.5 w-5 rounded-t-xl border border-b-0 bg-zinc-50 transition-colors group-hover:border-primary/30 dark:bg-background"></div>
              <div className="absolute -top-px -right-2.5 h-2.5 w-5 rounded-b-full border border-t-0 bg-zinc-50 transition-colors group-hover:border-primary/30 dark:bg-background"></div>
            </div>
            <div className="flex flex-1 flex-col gap-5 py-4">
              <div className="flex items-start justify-between gap-1 px-4">
                <div className="flex w-full flex-col gap-1.5">
                  <Skeleton className="h-5 w-3/5" />
                  <Skeleton className="h-3 w-1/5" />
                </div>
                <Skeleton className="size-4" />
              </div>

              <div className="flex gap-2 px-4">
                <Skeleton className="h-4 w-2/5" />
                <Skeleton className="h-4 w-2/5" />
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
