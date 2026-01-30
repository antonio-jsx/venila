import { ac, admin, moderador } from './permissions';
import { adminClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  plugins: [adminClient({ ac, roles: { admin, moderador } })],
});
