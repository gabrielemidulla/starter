import { z } from 'zod'

export const pingResponseSchema = z.object({
  message: z.string(),
  timestamp: z.string(),
  data: z.any().optional(),
})

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z.string().optional(),
    timestamp: z.string(),
  })

export const environmentSchema = z.enum(['development', 'production', 'test'])

// Database schemas
export const createUserSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type PingResponse = z.infer<typeof pingResponseSchema>
export type User = z.infer<typeof userSchema>
export type Environment = z.infer<typeof environmentSchema>
