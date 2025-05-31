import db from '../db/index.ts'
import type { CreateUserInput, User } from '@app/shared'

export class UserService {
  async getAllUsers(): Promise<User[]> {
    const users = await db.selectFrom('users').selectAll().execute();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }))
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst()

    if (!user) return null

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
      updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date(),
    }
  }

  async createUser(input: CreateUserInput): Promise<User> {
    const user = await db
      .insertInto('users')
      .values({
        name: input.name,
        email: input.email,
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
      updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date(),
    }
  }
}
