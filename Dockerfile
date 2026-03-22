#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:24-bookworm AS builder

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
# pnpm version comes from package.json "packageManager" (same version as .tool-versions / asdf).
RUN corepack enable && corepack install
COPY tsconfig*.json ./
COPY . .
# Next.js build can exceed default heap in CI; remote Docker has limited RAM.
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS=--max-old-space-size=6144
RUN pnpm install --frozen-lockfile && pnpm run build

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:24-bookworm-slim

WORKDIR /app
ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack install && pnpm install --frozen-lockfile --prod

## We just need the .next folder to execute the command
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./next.config.js
