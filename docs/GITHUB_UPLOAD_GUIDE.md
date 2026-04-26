# GitHub Web Upload Guide (Music_maker Only)

No GitHub CLI required.

## 1) Connect and push to Music_maker
```bash
git remote remove janet 2>/dev/null || true
git remote remove upstream 2>/dev/null || true
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/JanetStanmore/Music_maker.git
git branch -M main
git push -u origin main --force-with-lease
```

## 2) Verify remote
```bash
git remote -v
```
You should only see `https://github.com/JanetStanmore/Music_maker.git`.

## 3) Create PR in Music_maker (fix for "PR sticks to janetstanmore")
Do this exact flow:

```bash
git checkout -b feature/my-change
git add .
git commit -m "feat: my change"
git push -u origin feature/my-change
```

Then open this URL directly in your browser:

`https://github.com/JanetStanmore/Music_maker/compare/main...feature/my-change?expand=1`

If GitHub still opens the wrong repo, manually set:
- **base repository:** `JanetStanmore/Music_maker`
- **base branch:** `main`
- **head repository:** `JanetStanmore/Music_maker`
- **compare branch:** `feature/my-change`

## 4) Run in Codespaces
```bash
npm install
cp .env.example .env.local
npm run dev
```

## 5) Supabase setup
Run `supabase/schema.sql` in Supabase SQL editor.

## 6) Mobile app
```bash
cd mobile
npm install
npm run start
```
