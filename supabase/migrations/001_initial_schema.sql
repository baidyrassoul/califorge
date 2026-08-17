-- CaliForge — Initial schema
-- Run with: supabase db reset (local) or via Supabase dashboard (prod)

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Identity & profile
create table users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  display_name text,
  created_at timestamptz default now()
);

create table profiles (
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
create policy "Users can read own profile"
  on users for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on users for update
  using (auth.uid() = id);

-- Profiles: public read, owner write
create policy "Public profiles are readable"
  on profiles for select
  using (is_public = true);

create policy "Users can read own profile"
  on profiles for select
  using (auth.uid() = user_id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = user_id);

create policy "Users can insert own profile"
  on profiles for insert
  with check (auth.uid() = user_id);
