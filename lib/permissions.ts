import { createAccessControl } from 'better-auth/plugins/access';
import {
  adminAc,
  defaultStatements,
  userAc,
} from 'better-auth/plugins/admin/access';

export const statement = {
  ...defaultStatements,
  events: ['create', 'update', 'delete'],
} as const;

export const ac = createAccessControl(statement);

export const admin = ac.newRole({
  events: ['create', 'update', 'delete'],
  ...adminAc.statements,
});

export const moderador = ac.newRole({ ...userAc.statements });
