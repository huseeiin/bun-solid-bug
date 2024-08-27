import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      //   exclude: ["@node-rs/argon2"],
    },
  },
  server: { preset: "bun", prerender: { routes: ["/"] } },
});
