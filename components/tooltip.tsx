import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { ComponentProps } from 'react';

type TooltipProps = ComponentProps<typeof TooltipContent> & {
  text?: string;
  children: React.ReactNode;
};

export function Tooltip({
  children,
  text,
  align,
  side,
  sideOffset = 0,
}: TooltipProps) {
  return (
    <TooltipPrimitive>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent align={align} side={side} sideOffset={sideOffset}>
        <p>{text}</p>
      </TooltipContent>
    </TooltipPrimitive>
  );
}
