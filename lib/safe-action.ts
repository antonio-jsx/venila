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
