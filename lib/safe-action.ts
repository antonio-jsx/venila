import { auth } from './auth';
import { betterAuth } from '@next-safe-action/adapter-better-auth';
import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from 'next-safe-action';
import * as z from 'zod/v4';

export class ActionError extends Error {}

export const actionClient = createSafeActionClient({
  handleServerError(error) {
    console.error(error.message);

    if (error instanceof ActionError) {
      return error;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
  defineMetadataSchema() {
    return z.object({
      name: z.string(),
    });
  },
});

export const adminClient = actionClient.use(
  betterAuth(auth, {
    authorize: ({ authData, next }) => {
      if (!authData || authData.user.role !== 'admin') {
        throw new ActionError('FORBIDDEN');
      }
      return next({
        ctx: {
          auth: {
            name: authData.user.name,
            id: authData.user.id,
            email: authData.user.email,
          },
        },
      });
    },
  })
);
