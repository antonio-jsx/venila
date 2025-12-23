import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets-zod';

export const envServer = createEnv({
  isServer: typeof window === 'undefined',
  extends: [vercel()],
  server: {},
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
