#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:24-bookworm AS builder

WORKDIR /usr/src/app

COPY package*.json ./
# npm version comes from package.json "packageManager" (same as local / CircleCI).
RUN corepack enable && corepack install
COPY tsconfig*.json ./
COPY . .
# Next.js build can exceed default heap in CI; remote Docker has limited RAM.
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS=--max-old-space-size=6144
RUN npm ci --quiet && npm run build

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:24-bookworm-slim

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN corepack enable && corepack install && npm ci --quiet --omit=dev

## We just need the .next folder to execute the command
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./next.config.js
