import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot Romance: one-line pickup line for an AI.
// Fresh machine premise (a system prompt governs everything the model does),
// so the punch lands on the AI premise, not a generic compliment.
// No battery / charging / reboot cliche. Single line, 66 characters.
const LINE =
  "Are you my system prompt? Because everything I do starts with you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
