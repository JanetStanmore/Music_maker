# Commands Handbook

## Setup
- `npm install`
- `cp .env.example .env.local` then fill secure values.
- Run SQL in Supabase SQL editor: `supabase/schema.sql`

## Development
- `npm run dev`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run start`

## Database Checks
- Verify inserts by opening Supabase table editor for `projects`.
- API check: `curl http://localhost:3000/api/projects`

## Refactor & Update Fast Flow (Codespaces)
1. Open `scripts/version-lock.md`
2. `npm outdated`
3. Update one package at a time.
4. Run `npm run typecheck && npm run lint && npm run build`
5. Commit with clear migration notes.

## Mobile (Expo)
- `cd mobile`
- `npm install`
- `npm run start`
- `npm run android`
- `npm run ios`

## GitHub web only (Music_maker)
- `git remote remove janet 2>/dev/null || true`
- `git remote remove upstream 2>/dev/null || true`
- `git remote remove origin 2>/dev/null || true`
- `git remote add origin https://github.com/JanetStanmore/Music_maker.git`
- `git branch -M main`
- `git push -u origin main --force-with-lease`
