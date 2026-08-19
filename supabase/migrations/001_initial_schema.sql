-- CaliForge — Initial schema
-- Run with: supabase db reset (local) or via Supabase dashboard (prod)

-- Identity & profile
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  display_name text,
  created_at timestamptz default now()
);

create table if not exists profiles (
  user_id uuid primary key references users(id) on delete cascade,
  level int default 1,
  xp_total int default 0,
  bio text,
  avatar_url text,
  is_public bool default true,
  country text,
  timezone text
);

-- Enable RLS
alter table users enable row level security;
alter table profiles enable row level security;

-- Users can read their own data
drop policy if exists "Users can read own user" on users;
create policy "Users can read own user"
  on users for select
  using (auth.uid() = id);

drop policy if exists "Users can update own user" on users;
create policy "Users can update own user"
  on users for update
  using (auth.uid() = id);

-- Profiles: public read, owner write
drop policy if exists "Public profiles are readable" on profiles;
create policy "Public profiles are readable"
  on profiles for select
  using (is_public = true);

drop policy if exists "Users can read own profile" on profiles;
create policy "Users can read own profile"
  on profiles for select
  using (auth.uid() = user_id);

drop policy if exists "Users can update own profile" on profiles;
create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own profile" on profiles;
create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = user_id);
