import { Brand } from '@/components/brand';
import ToggleTheme from '@/components/toggle-theme';

export function Menu() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full border-b bg-card">
      <div className="container relative relative flex h-11 items-center justify-between">
        <Brand path="/" />
        <ToggleTheme />
      </div>
    </div>
  );
}
