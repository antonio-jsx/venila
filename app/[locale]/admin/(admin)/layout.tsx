import { AppSidebar } from '@/app/admin/(admin)/_components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/ui/sidebar';

export default function Layout({ children }: LayoutProps<'/[locale]/admin'>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
