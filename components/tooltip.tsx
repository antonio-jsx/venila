import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Tooltip({
  children,
  text,
  sideOffset = 0,
}: {
  children: React.ReactNode;
  text: string;
  sideOffset?: number;
}) {
  return (
    <TooltipPrimitive>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent align="center" side="right" sideOffset={sideOffset}>
        <p>{text}</p>
      </TooltipContent>
    </TooltipPrimitive>
  );
}
