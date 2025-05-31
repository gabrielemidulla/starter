import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import type { AppRouter } from '@app/server'

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://localhost:4000/trpc`,
      transformer: superjson,
    }),
  ],
});