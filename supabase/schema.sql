create extension if not exists "pgcrypto";

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  genre text not null,
  bpm integer not null check (bpm between 60 and 180),
  lyrics text not null,
  melodyNotes jsonb not null,
  drumPattern jsonb not null,
  instrument text not null,
  created_at timestamptz default now()
);

alter table public.projects enable row level security;

create policy "read own anon" on public.projects
for select to anon using (true);

create policy "insert own anon" on public.projects
for insert to anon with check (true);
