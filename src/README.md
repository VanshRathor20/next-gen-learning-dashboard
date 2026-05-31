# 🚀 Next-Gen Learning Dashboard

A futuristic, highly animated student dashboard built as part of a Frontend Intern Challenge. The app fetches live course data from Supabase and renders it using Next.js Server Components, with buttery-smooth animations powered by Framer Motion.

## ✨ Live Demo

🔗 [View Live on Vercel](https://next-gen-learning-dashboard-gamma.vercel.app/)

## 📸 Preview

<!-- Add a screenshot here after deploy -->

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework & Server Components |
| Supabase | PostgreSQL database & BaaS |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & interactions |
| Lucide React | Icons |
| TypeScript | Type safety |

---

## 🏗 Architecture

### Folder Structure
```
├── 📁 actions
│   └── 📄 getCourses.ts
├── 📁 app
│   ├── 📄 error.tsx
│   ├── 📄 favicon.ico
│   ├── 🎨 globals.css
│   ├── 📄 layout.tsx
│   ├── 📄 loading.tsx
│   └── 📄 page.tsx
├── 📁 components
│   ├── 📄 ActivityTile.tsx
│   ├── 📄 BentoGrid.tsx
│   ├── 📄 CourseCard.tsx
│   ├── 📄 HeroTile.tsx
│   ├── 📄 Sidebar.tsx
│   └── 📄 SkeletonCard.tsx
├── 📁 lib
│   └── 📄 supabase.ts
└── 📁 types
    └── 📄 course.ts
```

---
# Server / Client Component Split

This project follows a clear Server Component and Client Component architecture to keep data fetching secure while enabling rich UI animations.

## Data Flow

```text
Supabase DB
↓
getCourses.ts          ← Server only (secure, no client exposure)
↓
page.tsx               ← Server Component + Suspense boundary
↓
BentoGrid.tsx          ← Client Component (Framer Motion)
↓
CourseCard / HeroTile / ActivityTile  ← Client Components
```
**Why this split?**
- Data fetching stays on the server — Supabase credentials never reach the browser
- Client components are used only where interactivity or animation is needed
- Suspense boundary shows skeleton loaders while server fetch completes

---

## 🎬 Animation Strategy

All animations use `transform` and `opacity` exclusively — **zero layout shifts**.

| Feature | Implementation |
|---------|---------------|
| Staggered tile entrance | `staggerChildren: 0.1` in BentoGrid variants |
| Card hover elevation | `whileHover={{ scale: 1.02 }}` with spring physics |
| Sidebar active highlight | `layoutId` shared element transition |
| Progress bar | `animate()` utility — 0% → actual value on mount |
| Page load tiles | `opacity: 0, y: 24` → `opacity: 1, y: 0` |

Spring config used throughout:
```ts
{ type: "spring", stiffness: 300, damping: 20 }
```

---

## 📱 Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Desktop `> 1024px` | Full sidebar + 3-column Bento grid |
| Tablet `768–1024px` | Icons-only sidebar + 2-column grid |
| Mobile `< 768px` | Hamburger drawer + bottom nav + single column |

---

## 🗄 Database Schema

```sql
create table public.courses (
  id          uuid    default gen_random_uuid() primary key,
  title       text    not null,
  progress    integer not null default 0,
  icon_name   text    not null,
  created_at  timestamp with time zone default now()
);
```

Seed data includes 4 courses:
- Advanced React Patterns (75%)
- TypeScript Mastery (40%)
- System Design Fundamentals (60%)
- Framer Motion & Animation (90%)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/next-gen-learning-dashboard.git
cd next-gen-learning-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Set up Supabase

Run this SQL in your Supabase SQL Editor:

```sql
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null default 0,
  icon_name text not null,
  created_at timestamp with time zone default now()
);

insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Layers'),
  ('TypeScript Mastery', 40, 'Code2'),
  ('System Design Fundamentals', 60, 'GitBranch'),
  ('Framer Motion & Animation', 90, 'Sparkles');

alter table public.courses disable row level security;
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

See `.env.example` for all required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> ⚠️ Never commit your `.env.local` file. It is already in `.gitignore`.

---

## 📦 Deployment

Deployed on **Vercel** with environment variables configured in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 👤 Author

**Vansh**
- GitHub: [@VanshRathor20](https://github.com/VanshRathor20)
