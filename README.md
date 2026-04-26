# Instant Music Lab (Personal One-Man Startup)

A compact but full-stack music app for laptop use: generate lyrics/melodies/drums, play music instantly, save projects to Supabase, and export downloadable project files.

## Why this project is not an empty shell
- Functional mini-DAW workflow with genre, BPM, instrument, transport controls.
- Lyrics generation (local + API route).
- Melody and drum pattern generation by genre.
- Supabase persistence with validated backend routes.
- Security hardening headers and server-only secrets.
- Guides for creation, commercialization, distribution workflow.

## Features included
- Lyrics generation (seed/random).
- Audio generation/playback (Tone.js synth + drum synth).
- Voice support path (browser TTS workflow guide).
- Video support path (guide + browser recorder workflow notes).
- FL Studio style mini features: step sequencing, channel-style track flow.
- Royalty-free starter approach (algorithmic + self-recorded assets).
- Download project snapshot (`.json`).

## Free/Open Source only
- Next.js, React, TypeScript, Tone.js, Zod, Supabase.
- No paid API required.
- No Google API dependency.

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure secrets:
   ```bash
   cp .env.example .env.local
   ```
3. Create DB table: run `supabase/schema.sql` in Supabase SQL editor.
4. Start app:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`.

## Security checklist
- Keep `SUPABASE_SERVICE_ROLE_KEY` only in server env.
- Never expose `.env.local`.
- Use RLS and monitor query logs in Supabase dashboard.
- Rotate keys periodically.

## Resume-ready talking points
- Full-stack architecture with Next.js API routes + Postgres.
- Client-side WebAudio synthesis and music generation logic.
- Security headers, validation, and secret management.
- Production-friendly docs and update ledger for maintainability.

## Documentation index
- Technical design: `docs/TECHNICAL_DESIGN.md`
- Commands/runbook: `docs/COMMANDS.md`
- Version ledger: `scripts/version-lock.md`
- DB schema: `supabase/schema.sql`


## FL Studio parity (important)
This app does **not** include all proprietary FL Studio All Plugins Edition features in v1. See `docs/FL_FEATURE_PARITY.md` for exact parity status and roadmap.

## Mobile version
A mobile companion app is included in `mobile/` (Expo React Native) for quick drafting and export with no sign-in required in v1.

## GitHub repository guidance
Use `docs/GITHUB_UPLOAD_GUIDE.md` for Music_maker-only web upload and Codespaces setup.

## Need “free FL + Cakewalk strength”?
Use the recommended legal stack in `docs/FREE_DAW_STACK.md`.
It explains how to combine this app + LMMS + Ardour + free plugins for a complete production pipeline.

## Run + GitHub upload guide
See `docs/GITHUB_UPLOAD_GUIDE.md` for exact commands to run web/mobile and push to `JanetStanmore/Music_maker`.


## Codespaces-first (recommended for you)
If you want **no local setup**, follow `docs/CODESPACES_FIRST.md` to:
1) push to GitHub first,
2) open in Codespaces,
3) set env vars,
4) run the app.
