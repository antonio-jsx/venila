import { Separator } from '@/ui/separator';
import { SidebarTrigger } from '@/ui/sidebar';

export function NavHeader({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 rounded-t-xl bg-background px-4">
      <div className="flex items-center gap-1">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {title && <h1 className="font-medium text-base">{title}</h1>}
      </div>

      <div className="ml-auto">{children}</div>
    </header>
  );
}
