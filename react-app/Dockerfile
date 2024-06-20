FROM denoland/deno

WORKDIR /app

COPY deno.json deno.lock ./
COPY src ./src

RUN deno cache ./src/main.tsx

EXPOSE 8000

ENTRYPOINT  ["deno", "task", "start"]

