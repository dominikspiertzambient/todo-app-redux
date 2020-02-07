FROM node:10-alpine AS builder

WORKDIR /app
COPY package.json yarn.lock* ./

RUN yarn --no-progress && rm -rf /tmp/*

FROM builder AS bundler

WORKDIR /app
COPY . .

FROM bundler AS runner

WORKDIR /app
ENTRYPOINT ["yarn"]
CMD ["start"]
