import { z } from 'zod'
import { createUserSchema, userSchema } from '@app/shared'
import { publicProcedure, router } from '../trpc.ts'

export default router({
  getAll: publicProcedure
    .output(z.array(userSchema))
    .query(async ({ ctx }) => {
      return await ctx.services.user.getAllUsers()
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .output(userSchema.nullable())
    .query(async ({ input, ctx }) => {
      return await ctx.services.user.getUserById(input.id)
    }),

  create: publicProcedure
    .input(createUserSchema)
    .output(userSchema)
    .mutation(async ({ input, ctx }) => {
      return await ctx.services.user.createUser(input)
    }),
})
