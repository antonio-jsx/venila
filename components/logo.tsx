'use client';

import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <no svgtitle>
  <svg
    {...props}
    viewBox="0 0 190 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fill="#eee"
        d="M10 24.509L45.2941 143.396L58.1284 158.76L73.5294 166.808C73.5294 166.808 85.7219 166.808 95.3476 158.76C104.973 150.713 108.824 143.396 108.824 143.396L73.5294 24.509H10Z"
      />
      <g>
        <path d="M128.396 144.128L190 0H128.396L71.2834 125.472L71.2395 125.561C66.2511 135.668 57.4196 153.561 45.615 144.128C77.9572 209.096 114.278 171.198 128.396 144.128Z" />
      </g>
    </g>
  </svg>
);

export { Logo };
