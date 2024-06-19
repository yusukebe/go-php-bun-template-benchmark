FROM oven/bun:latest

WORKDIR /app

COPY package.json tsconfig.json ./
COPY src ./src

RUN bun install

EXPOSE 3000

ENTRYPOINT  ["bun", "run", "/app/src/index.tsx"]