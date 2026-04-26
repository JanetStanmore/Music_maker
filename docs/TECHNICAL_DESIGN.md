# Technical Design - Instant Music Lab

## 1) Architecture
- **Frontend (Web):** Next.js App Router with React client component for DAW-like interactions.
- **Frontend (Mobile):** Expo React Native companion app for quick lyric/project capture.
- **Backend:** Next.js route handlers (`/api/lyrics`, `/api/projects`) for secure processing.
- **Database:** Supabase Postgres table `projects`.
- **AI/Generation:** Local deterministic generator functions + browser audio synthesis (no paid API).

## 2) Folder Structure
- `app/` - Pages, global styles, API route handlers.
- `components/` - `StudioApp` DAW UI.
- `lib/` - Generators, types, Supabase server client.
- `supabase/` - SQL schema.
- `docs/` - System design and command docs.
- `scripts/` - Version lock ledger and repo split guidance.
- `mobile/` - Expo app for mobile drafting (no login in v1).

## 3) System Design Logic
1. User chooses genre/instrument/BPM.
2. Generator creates melody + drum pattern + lyrics.
3. User edits manually for originality.
4. App plays music in browser via Tone.js.
5. User downloads project JSON or saves to Supabase through server route.

## 4) Security Design
- Service role key only on server via env vars.
- Input validation using Zod.
- Security headers (CSP, X-Frame-Options, etc.) via Next config.
- No secrets in client bundle.
- Recommend enabling Supabase rate limits, audit logs, and rotating keys.

## 5) Anti-Plagiarism and Commercial Safety Workflow
- Use generated draft only as starting point.
- Edit lyrics/melody manually, record own vocals.
- Keep provenance: date-stamped project JSON + Supabase record.
- Use only self-created or clearly licensed royalty-free assets.
