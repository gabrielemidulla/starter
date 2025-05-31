import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { trpcServer } from '@hono/trpc-server'
import router from './trpc/router.ts'
import { createContext } from './trpc/context.ts'

const app = new Hono()

// CORS middleware
app.use(
  '/*',
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
  }),
)

// tRPC handler
app.use(
  '/trpc/*',
  trpcServer({
    router,
    createContext,
  }),
)

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
})

// Root endpoint
app.get('/', (c) => {
  return c.json({
    message: 'Monolith API Server',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      trpc: '/trpc',
    },
  })
})

// Start the server
const port = Deno.env.get('PORT')!

Deno.serve({ port: Number(port) }, app.fetch)

export default app
export type { AppRouter } from './trpc/router.ts'
