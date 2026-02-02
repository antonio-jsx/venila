import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets-zod';
import * as z from 'zod/v4';

export const envServer = createEnv({
  isServer: typeof window === 'undefined',
  extends: [vercel()],
  server: { DATABASE_URL: z.url() },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
