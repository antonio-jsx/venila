'use client';

import { Button } from '@/ui/button';
import { Spinner } from '@/ui/spinner';
import type { ComponentProps } from 'react';

type ButtonSendProps = ComponentProps<typeof Button> & {
  text: string;
  state: boolean;
};

export function ButtonSend({
  text,
  state,
  disabled,
  ...props
}: ButtonSendProps) {
  return (
    <Button type="submit" disabled={state || disabled} {...props}>
      {state && <Spinner />}
      {text}
    </Button>
  );
}
