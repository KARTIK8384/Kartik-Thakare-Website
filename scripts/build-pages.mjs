import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repository = process.env.GITHUB_REPOSITORY || "KARTIK8384/Kartik-Thakare-Website";
const [owner, name] = repository.split("/");
const basePath = name.toLowerCase() === `${owner.toLowerCase()}.github.io` ? "" : `/${name}`;

const result = spawnSync(process.execPath, [
  fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url)),
  "build", "--webpack",
], {
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? basePath,
    NEXT_TELEMETRY_DISABLED: "1",
  },
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
