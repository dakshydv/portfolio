# Development

How to set up and run the project locally.

## Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/dakshydv/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
pnpm i
```

### 3. Run the development server

```bash
pnpm dev
```

The site is now available at http://localhost:3000.

If styles stop updating while the dev server is running, stop it, clear the dev cache and start again:

```bash
rm -rf .next/dev && pnpm dev
```

## Building for production

```bash
pnpm build
NODE_ENV=production pnpm start
```

## Quality checks

```bash
pnpm lint
pnpm check-types
pnpm format:write
```
