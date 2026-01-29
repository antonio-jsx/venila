'use client';

import ToggleTheme from '@/components/toggle-theme';
import { authClient } from '@/lib/auth-client';
import { Link, useRouter } from '@/lib/i18n/navigation';
import { getInitials } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Button } from '@/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Skeleton } from '@/ui/skeleton';
import { LogOutIcon } from 'lucide-react';

export function NavUser() {
  const { data, error, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return <Skeleton className="h-8 w-14" />;
  }

  if (error || !data) {
    return (
      <Button asChild>
        <Link href="/signin">Sign In</Link>
      </Button>
    );
  }

  async function logout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/admin/signin');
        },
      },
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant="ghost"
          className="px-2 data-[state=open]:bg-muted data-[state=open]:text-muted-foreground"
        >
          <Avatar className="size-8 rounded-lg">
            <AvatarImage src={data.user.image ?? ''} alt={data.user.name} />
            <AvatarFallback className="rounded-lg">
              {getInitials(data.user.name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={data.user.image ?? ''} alt={data.user.name} />
              <AvatarFallback>{getInitials(data.user.name)}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{data.user.name}</span>
              <span className="truncate text-muted-foreground text-xs">
                {data.user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex justify-between">
          <DropdownMenuItem onClick={logout}>
            <LogOutIcon />
            Log out
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <ToggleTheme />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
