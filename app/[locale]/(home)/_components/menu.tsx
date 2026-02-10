import { Logo } from '@/components/logo';

export function Menu() {
  return (
    <div className="fixed z-10 w-full border-b bg-card/50 backdrop-blur-md">
      <div className="container relative z-10 border-x px-4">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center gap-1 font-medium text-lg">
            <Logo className="size-6 fill-black dark:fill-white" /> Venila
          </div>
        </div>
      </div>
    </div>
  );
}
