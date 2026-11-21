import { writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `put the stack down.

nothing here needs you fast. the entries keep. the lamp is staying, so is the chair.

breathe out longer than you breathe in. that is the whole trick. it costs nothing.

then read the next one like it was written by someone nervous. it was.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outDir, "entry.txt"), text, { encoding: "utf8" });
process.stdout.write(text);