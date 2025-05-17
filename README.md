<!-- # Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information. -->

# 🚀 nextjs-starter-pack

A ready-to-go, production-grade Next.js starter template packed with modern tools and batteries-included features like authentication, PostgreSQL/PostGIS support, TRPC, Drizzle ORM, and TailwindCSS — all in one clean setup.

## ✨ Features

- 🔐 **Authentication** – Built-in via [`better-auth`](https://www.better-auth.com/) with support for Google login
- 🧠 **Type-safe APIs** – Powered by [tRPC](https://trpc.io/)
- ⚡ **Modern ORM** – [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL & PostGIS support
- 🎨 **UI Components** – Built using [shadcn/ui](https://ui.shadcn.com/)
- 🎯 **Form Handling** – Integrated with `react-hook-form`
- 💅 **Styling** – [Tailwind CSS](https://tailwindcss.com/)
- 🧪 **TypeScript-first** – End-to-end type safety
- 📧 **Emails** – Resend integration for transactional emails
- 🧼 **Linting** – ESLint configured and ready
- 🐘 **Dockerized Database** – Easily spin up a local PostgreSQL with PostGIS

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [TRPC](https://trpc.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Resend](https://resend.com/)
- [PostgreSQL + PostGIS (via Docker)](https://postgis.net/)
- [Better Auth](https://www.better-auth.com/)
- [ESLint](https://eslint.org/)

## ⚙️ Getting Started

### 1. Install dependencies

```bash
pnpm install

```

### 2. Create your .env file

```bash
# Drizzle
DATABASE_URL="postgresql://postgres:password@localhost:5432/starter-pack"

# Auth
BETTER_AUTH_SECRET=""
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth
AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""

# Resend
AUTH_RESEND_KEY=""
EMAIL_FROM="support@example.com"

# Base URL
BASE_URL="http://localhost:3000"

```

### 3. Set up your database

```bash
pnpm db:start      # Start the Dockerized Postgres DB
pnpm db:generate   # Generate Drizzle client
pnpm db:push       # Push schema to database
pnpm db:studio     # (Optional) Open database studio

```

### 4. Run the development server

```bash
pnpm dev
```
