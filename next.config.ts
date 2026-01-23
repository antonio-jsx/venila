import './lib/env/server';
import './lib/env/client';

import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  cacheComponents: true,
  typedRoutes: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },
};

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');
export default withNextIntl(nextConfig);
