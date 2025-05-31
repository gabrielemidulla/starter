import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import type { Database } from './types.ts'

const createDatabase = () => {
  const dialect = new PostgresDialect({
    pool: new Pool({
      database: Deno.env.get('DB_NAME')!,
      host: Deno.env.get('DB_HOST')!,
      user: Deno.env.get('DB_USER')!,
      password: Deno.env.get('DB_PASSWORD')!,
      port: Number(Deno.env.get('DB_PORT')!),
      max: 10,
    }),
  });

  return new Kysely<Database>({
    dialect,
    plugins: [new CamelCasePlugin()],
  })
}

export default createDatabase()
