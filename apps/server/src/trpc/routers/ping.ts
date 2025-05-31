import { pingResponseSchema } from '@app/shared';
import { publicProcedure, router } from '../trpc.ts';

export default router({
  ping: publicProcedure
    .output(pingResponseSchema)
    .query(async ({ ctx }) => {
      const users = await ctx.services.user.getAllUsers()

      return {
        message: 'pong',
        timestamp: new Date().toISOString(),
        data: {
          users: users.slice(0, 2), // Return first 2 users
          userCount: users.length,
        },
      }
    }),
})
