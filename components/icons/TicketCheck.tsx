/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <nosvg> */
import type { SVGProps } from 'react';

const TicketCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide-ticket-check"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="none"
      d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    />
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export default TicketCheck;
