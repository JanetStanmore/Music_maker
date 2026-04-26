# Version Lock Ledger

Use this file as a fast debug/deploy reference in GitHub Codespaces.

## Runtime & Framework
- Node.js: 20.x recommended
- Next.js: 14.2.29
- React: 18.3.1
- TypeScript: 5.8.3

## Major Libraries
- @supabase/supabase-js: 2.49.4
- tone: 15.1.22
- zod: 3.24.4
- eslint: 8.57.1
- eslint-config-next: 14.2.29

## Quick update flow
1. `npm outdated`
2. `npm i <pkg>@latest`
3. `npm run typecheck && npm run lint && npm run build`
4. Update this ledger + changelog section in README.
