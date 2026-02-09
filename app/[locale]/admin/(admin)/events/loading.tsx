import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-5 w-14" />

      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <Skeleton
            className="flex flex-row gap-0 overflow-hidden rounded-lg border bg-card p-0"
            // biome-ignore lint/suspicious/noArrayIndexKey: <no index>
            key={rowIndex}
          >
            <div className="flex w-20 shrink-0 flex-col items-center justify-center border-r bg-accent">
              <Skeleton className="h-5 w-9 bg-black/10" />
            </div>
            <div className="flex flex-1 flex-col gap-3 py-3">
              <div className="flex items-start justify-between gap-1 px-4">
                <div className="flex w-full flex-col gap-1">
                  <Skeleton className="h-5 w-3/5" />
                  <Skeleton className="h-3 w-1/5" />
                </div>
                <Skeleton className="h-4 w-12" />
              </div>

              <div className="flex flex-col gap-1 px-4">
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
