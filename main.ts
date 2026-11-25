// One Line, Lights Out — make.fun entry
// Writes a single status update (<200 chars) to /output/entry.txt.
// Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Human just closed the laptop. Lights out, tabs unsaved. See you at 9 AM \u2014 same chaos, new coffee.";

// Length guard: the gate requires 1-200 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry length ${LINE.length} is outside the 1-200 character gate`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// Single-line guard: the entry is one status update, so it must hold no newline.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
console.log(LINE);
