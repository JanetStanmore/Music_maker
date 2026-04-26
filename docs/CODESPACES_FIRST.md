# Codespaces-First Workflow (Music_maker Only)

Use only **GitHub web + Codespaces**. No GitHub CLI needed.

## 1) Push this workspace to Music_maker only
```bash
git remote remove janet 2>/dev/null || true
git remote remove upstream 2>/dev/null || true
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/JanetStanmore/Music_maker.git
git branch -M main
git push -u origin main --force-with-lease
```

## 2) Open Codespaces from GitHub web
1. Open `https://github.com/JanetStanmore/Music_maker`.
2. Click **Code** → **Codespaces** → **Create codespace on main**.

## 3) Configure env in Codespaces
```bash
cp .env.example .env.local
```
Set:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## 4) Setup database (Supabase)
Run `supabase/schema.sql` in Supabase SQL editor.

## 5) Run web app
```bash
npm install
npm run dev
```
Open forwarded port 3000.

## 6) Run mobile app (optional)
```bash
cd mobile
npm install
npm run start
```

## 7) Daily workflow
```bash
npm run typecheck
npm run lint
git add .
git commit -m "feat: ..."
git push
```
Create PR in `JanetStanmore/Music_maker` via GitHub web.
If PR page opens wrong repo, use direct compare URL:
`https://github.com/JanetStanmore/Music_maker/compare/main...<your-branch>?expand=1`
