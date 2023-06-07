FROM node:18-alpine AS base

RUN apk update

RUN apk add --no-cache libc6-compat

WORKDIR /app

FROM base AS builder

COPY . .

RUN npx --yes turbo@1.9.3 prune --scope=@markethaus/storefront && \
    cp -R .yarn .yarnrc.yml out/ && \
    cd out && \
    yarn install && \
    yarn turbo run build --filter=@markethaus/storefront && \
    yarn workspaces focus --all --production && \
    rm -rf node_modules/.cache .yarn/cache

FROM base as runner

COPY --chown=node:node --from=builder /app/out .

USER 1000

WORKDIR /app/packages/markethaus-storefront

ENV PORT=80

CMD ["npx", "remix-serve", "build"]