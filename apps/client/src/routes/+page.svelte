<script lang="ts">
  let { data } = $props();
</script>

<div class="container mx-auto p-8">
  <h1 class="text-4xl font-bold mb-8 text-center">Monolith Starter</h1>
    <!-- Ping Response -->
    {#if data.ping}
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        <h2 class="text-xl font-semibold mb-2">🏓 Ping Response</h2>
        <p><strong>Message:</strong> {data.ping.message}</p>
        <p><strong>Timestamp:</strong> {data.ping.timestamp}</p>
        {#if data.ping.data}
          <p><strong>User Count:</strong> {data.ping.data.userCount}</p>
        {/if}
      </div>
    {/if}

    <!-- Users List -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="px-6 py-4 bg-gray-50 border-b">
        <h2 class="text-xl font-semibold">👥 Users ({data.users.length})</h2>
      </div>
      
      {#if data.users.length > 0}
        <div class="divide-y divide-gray-200">
          {#each data.users as user}
            <div class="px-6 py-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-medium text-gray-900">{user.name}</h3>
                  <p class="text-gray-600">{user.email}</p>
                </div>
                <div class="text-sm text-gray-500">
                  <p>ID: {user.id}</p>
                  <p>Created: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="px-6 py-4 text-center text-gray-500">
          No users found
        </div>
      {/if}
    </div>

    <!-- API Info -->
    <div class="mt-8 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
      <h2 class="text-xl font-semibold mb-2">🔗 API Information</h2>
      <p><strong>Frontend:</strong> SvelteKit + TypeScript</p>
      <p><strong>Backend:</strong> Hono + tRPC + Kysely</p>
      <p><strong>Database:</strong> PostgreSQL</p>
      <p><strong>Monorepo:</strong> Turborepo + PNPM</p>
    </div>
</div>
