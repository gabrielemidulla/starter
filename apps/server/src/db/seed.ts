import db from './index.ts'

(async () => {
  try {
    console.log('🌱 Seeding database...');

    // Here we can seed the database with some data (eg. config records, etc...)
    // For example:
    await db
      .insertInto('users')
      .values([
        {
          name: 'John Doe',
          email: 'john@example.com',
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
        },
      ])
      .onConflict((oc) => oc.column('email').doNothing())
      .execute()

    console.log('✅ Database seeded successfully')
    Deno.exit(0)
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    Deno.exit(1)
  }
})()