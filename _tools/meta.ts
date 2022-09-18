import { BuildOptions } from "https://deno.land/x/dnt@0.30.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  typeCheck: true,
  entryPoints: ["./db.json"],
  outDir: "./npm",
  package: {
    name: "http-header-db",
    version,
    description: "HTTP header field database",
    keywords: [
      "http",
      "database",
      "header",
      "field",
    ],
    license: "MIT",
    homepage: "https://github.com/httpland/http-header-db",
    repository: {
      type: "git",
      url: "git+https://github.com/httpland/http-header-db.git",
    },
    bugs: {
      url: "https://github.com/httpland/http-header-db/issues",
    },
    sideEffects: false,
    type: "module",
  },
  packageManager: "pnpm",
});
