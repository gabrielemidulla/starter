import type { Generated, Insertable, Selectable } from 'kysely';

export interface UsersTable {
  id: Generated<string>;
  name: string;
  email: string;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;

export interface Database {
  users: UsersTable;
}
