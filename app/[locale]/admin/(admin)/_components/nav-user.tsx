'use client';

import ToggleTheme from '@/components/buttons/toggle-theme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { authClient } from '@/lib/auth/client';
import { Link, useRouter } from '@/lib/i18n/navigation';
import { getInitials } from '@/lib/utils';
import { LogOutIcon } from 'lucide-react';

export function NavUser() {
  const { data, error, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return <Skeleton className="size-8 rounded-full" />;
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
      <DropdownMenuTrigger>
        <Avatar className="size-7">
          <AvatarImage alt={data.user.name} src={data.user.image ?? ''} />
          <AvatarFallback className="border p-2 text-xs">
            {getInitials(data.user.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-56 rounded-lg"
        side="bottom"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage alt={data.user.name} src={data.user.image ?? ''} />
              <AvatarFallback>{getInitials(data.user.name)}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left leading-tight">
              <span className="truncate font-medium text-foreground">
                {data.user.name}
              </span>
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
