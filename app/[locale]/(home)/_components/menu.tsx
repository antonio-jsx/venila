import { Brand } from '@/components/brand';

export function Menu() {
  return (
    <div className="fixed top-4 right-0 left-0 z-50 w-full">
      <div className="relative mx-auto flex h-12 max-w-xl items-center justify-between rounded-full bg-card/60 px-4 shadow-subtle backdrop-blur-sm">
        <Brand path="/" />
      </div>
    </div>
  );
}
