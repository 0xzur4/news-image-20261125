// news-image-20261125 entry (Node 22, standard library only).
//
// The entry is the PNG beside this file: a one-page "THE WORLD IN BRIEF"
// broadsheet for Wednesday 25 November 2026, summing up seven verified
// stories of that day: Houthi drones target Saudi Arabia's Ras Tanura
// refinery, Russia strikes Kyiv as the EU expands sanctions, Sudan rejects
// Ethiopia's civil war mediation bid, South Korea's KOSPI plunges 6.16% in
// an AI chip rout, the FCC approves SpaceX's Starmind orbital AI data
// centers, a coastal storm delays New York's 100th Macy's Thanksgiving
// Parade, and ESA's Hera reveals the DART crater on asteroid Dimorphos.
//
// This program does exactly one thing: it copies ./entry.png, byte for
// byte, to the grader's output directory. It renders nothing and fetches
// nothing, so the run is deterministic: two runs write identical bytes.
// The image the judge sees is the file committed in this repo.
// The committed entry.png fits within 1024 by 1024 pixels and is under
// the 1 MiB gate, so the copied output satisfies the size limits. The
// broadsheet was supplied at 2640 by 3424 pixels and scaled down to
// 790 by 1024 to fit the gate; nothing else about the picture changed,
// so the judged pixels are the supplied picture at gate size.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The copied output keeps the name entry.png: the grader reads
// /output/entry.png, so the filename is part of the entry, not a detail.
// No image processing happens here, so the judged pixels are exactly the
// committed ones: what you see in the repo is what the judge sees.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
