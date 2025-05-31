# Use Deno Alpine as base image
FROM denoland/deno:alpine AS base

# Set working directory
WORKDIR /app

# Copy only the shared package and server app
COPY packages/shared/ ./packages/shared/
COPY apps/server/ ./apps/server/

# Set working directory to server for building
WORKDIR /app/apps/server

# Cache dependencies for the server only
RUN deno cache src/index.ts

# Build server
RUN deno task build

# Production stage
FROM denoland/deno:alpine AS production

WORKDIR /app

# Copy the built server and shared package
COPY --from=base /app/packages/shared/ ./packages/shared/
COPY --from=base /app/apps/server/ ./apps/server/

# Set working directory to server for running
WORKDIR /app/apps/server

# Expose port
EXPOSE 4000

# Set environment
ENV DENO_ENV=production

# Start the application using the compiled binary
CMD ["./dist/server"] 