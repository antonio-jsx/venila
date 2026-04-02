import { Brand } from '@/components/brand';
import { Decorator } from '@/components/decorator';

export function Menu() {
  return (
    <div className="w-full border-b bg-card">
      <div className="container relative relative flex h-11 items-center justify-between border-x px-4">
        <Brand path="/" />

        <Decorator />
      </div>
    </div>
  );
}
