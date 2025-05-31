import { router } from './trpc.ts'
import ping from './routers/ping.ts'
import users from './routers/users.ts'

const appRouter = router({
  ping,
  users,
})

export type AppRouter = typeof appRouter
export default appRouter
