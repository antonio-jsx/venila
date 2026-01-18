import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar';
import { TicketIcon } from 'lucide-react';

export function Brand() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          {/** biome-ignore lint/a11y/useValidAnchor: <no anchor> */}
          <a href="#">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
              <TicketIcon className="size-5" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-bold">Venila</span>
              <span className="text-xs">v1.0.0</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
