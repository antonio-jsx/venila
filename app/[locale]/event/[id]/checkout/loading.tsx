import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-[1fr_270px] items-start gap-8 py-10">
      <div className="space-y-4">
        <Skeleton className="h-9 w-72" />

        <div className="rounded-2xl border bg-card p-2">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-3 w-14" />
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="size-6 rounded-full" />
              <Skeleton className="size-6 rounded-full" />
              <Skeleton className="size-6 rounded-full" />
            </div>
          </div>
        </div>

        <Skeleton className="h-9 w-42" />

        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-8" />
          <Skeleton className="h-8" />
          <Skeleton className="h-8" />
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border bg-card p-4 shadow-lg">
        <Skeleton className="h-8 w-48" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-12" />
          </div>

          <Skeleton className="h-px w-full" />
          <Skeleton className="h-8 bg-primary/70" />
        </div>
      </div>
    </div>
  );
}
