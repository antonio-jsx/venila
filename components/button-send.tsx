'use client';

import { Button } from '@/ui/button';
import { Spinner } from '@/ui/spinner';

export function ButtonSend({ text, state }: { text: string; state: boolean }) {
  return (
    <Button type="submit" disabled={state}>
      {state && <Spinner />}
      {text}
    </Button>
  );
}
