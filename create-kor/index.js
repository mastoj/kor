#!/usr/bin/env node

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repo = "mastoj/kor";
const projectName = process.argv[2];

if (!projectName) {
  console.error("Usage: pnpm create kor <project-name>");
  process.exit(1);
}

const dest = path.resolve(process.cwd(), projectName);

if (fs.existsSync(dest)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`Cloning template into ${dest}...`);

const { default: tiged } = await import("tiged");
const emitter = tiged(repo, { disableCache: true });

try {
  await emitter.clone(dest);
} catch (err) {
  console.error("Failed to clone template:", err.message);
  process.exit(1);
}

// Remove the scaffolding package from the generated project
fs.rmSync(path.join(dest, "create-kor"), { recursive: true, force: true });

// Update root package.json name
const pkgPath = path.join(dest, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
pkg.name = path.basename(dest);
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

// Create apps/web/.env.local (Next.js only reads env files from its own directory)
const webEnvContent = "NEXT_PUBLIC_API_URL=http://localhost:3001/trpc\n";
fs.mkdirSync(path.join(dest, "apps/web"), { recursive: true });
fs.writeFileSync(path.join(dest, "apps/web/.env.local"), webEnvContent);

// Initialise a fresh git repository
execSync("git init && git add . && git commit -m 'Initial commit'", {
  cwd: dest,
  stdio: "inherit",
});

console.log("");
console.log("  ~~ ~  ______________");
console.log("          \\   K O R    \\___");
console.log("  ~~ ~     |  o      o  |==>");
console.log("            \\____________/");
console.log("             (_)      (_)");
console.log("");
console.log("Done! Next steps:\n");
console.log(`  cd ${projectName}`);
console.log("");
console.log("  If you have Make installed:");
console.log("    make kor");
console.log("");
console.log("  Otherwise:");
console.log("    pnpm install");
console.log("    pnpm db:push");
console.log("    pnpm dev");
