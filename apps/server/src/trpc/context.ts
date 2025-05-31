import type { Context } from 'hono'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import { UserService } from '../services/user.ts'

export interface AppContext extends Record<string, unknown> {
  services: {
    user: UserService
  }
}

export const createContext = (_opts: FetchCreateContextFnOptions, _c: Context): AppContext => {
  return {
    services: {
      user: new UserService(),
    },
  }
}
