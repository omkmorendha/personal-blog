# personal-blog

Source for [omkmorendha.com](https://omkmorendha.com), a Next.js 16 site deployed to Cloudflare Workers via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript, Tailwind CSS v4
- MDX for blog posts
- Cloudflare Workers (via `@opennextjs/cloudflare`)

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & deploy

```bash
npm run build        # next build
npm run preview      # local Workers preview via wrangler
npm run deploy       # build + deploy to Cloudflare
```

Production deploys run automatically on push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Quality

```bash
npm run format       # prettier write
npm run format:check # CI check
npx tsc --noEmit     # typecheck
```

CI runs typecheck, build, and format checks in parallel on every PR ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)).
