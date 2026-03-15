/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <nosvg> */
import type { SVGProps } from 'react';

const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide-calendar"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8 2v4M16 2v4" />
    <rect
      width={18}
      height={12}
      x={3}
      y={10}
      fill="currentColor"
      stroke="none"
      rx={2}
    />
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <path d="M3 10h18" />
  </svg>
);
export default Calendar;
