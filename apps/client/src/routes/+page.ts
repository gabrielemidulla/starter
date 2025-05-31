import { trpc } from '@/trpc/client'

export const load = async () => {
  const ping = await trpc.ping.ping.query();
  const users = await trpc.users.getAll.query();
  return { ping, users };
};
