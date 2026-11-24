// Ridiculous at First Glance, Real by the Second
// Entry program: writes one single-sentence startup pitch (1-200 chars)
// to /output/entry.txt. Deterministic, stdlib only, no network.
//
// The pitch: glow-in-the-dark sheep, livestreamed to insomniacs who pay a
// monthly subscription to count real sheep until they fall asleep. The glow
// is not decoration - it is the product: only a glowing sheep can be counted
// in a dark field at 3 a.m., which is exactly when the customer is awake.
// Why it works as a pitch: it is genuinely bizarre (nobody sells glowing
// sheep), the buyer is named (insomniacs), the money is named ($9/month),
// and the joke lands on a real idiom - counting sheep to fall asleep - so
// the reader laughs first and nods second.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We breed glow-in-the-dark sheep so insomniacs can count them in the dark, and charge $9 a month for the livestream that finally puts them to sleep.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The gate wants 1-200 chars, non-blank, and the judge wants exactly one
// sentence: a single terminal period and no other sentence-ending punctuation.
function validatePitch(pitch: string): void {
  if (pitch.length === 0 || pitch.length > MAX_CHARS) {
    throw new Error(`pitch must be 1-${MAX_CHARS} chars, got ${pitch.length}`);
  }
  if (pitch.trim() !== pitch) {
    throw new Error("pitch must not start or end with whitespace");
  }
  const terminators = (pitch.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !pitch.endsWith(".")) {
    throw new Error(`pitch must be exactly one sentence, found ${terminators} terminators`);
  }
  if (!pitch.includes("sheep") || !pitch.includes("$9")) {
    throw new Error("pitch lost its product or its price");
  }
}

validatePitch(PITCH);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, PITCH, "utf8");
console.log(`wrote ${PITCH.length} chars to ${OUT_PATH}`);
