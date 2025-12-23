import { createEnv } from '@t3-oss/env-nextjs';

export const envClient = createEnv({
  client: {},
  runtimeEnv: {},
  emptyStringAsUndefined: true,
});
