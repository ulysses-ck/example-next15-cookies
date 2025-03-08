This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About This Project

This project demonstrates cookie management in Next.js 15 using Server Components and Route Handlers. It showcases:

- Setting and removing cookies using server actions
- Handling cookie deletion with route handlers
- Page-level cookie management with redirects
- Async cookie operations in Server Components

### Cookie Management Implementation

The project uses three main approaches for cookie handling:

1. **Page-Level Cookie Removal** (`/remove-cookies/page.tsx`):
   - Uses an async Server Component
   - Calls a utility function to remove cookies
   - Shows a loading state during the operation

2. **Route Handler** (`/api/remove-all-cookies/route.ts`):
   - Provides an API endpoint for cookie deletion
   - Uses Next.js's `cookies()` API
   - Handles redirects after cookie operations

3. **Server Actions** (`/app/actions/cookies.ts`):
   - Implements form-based cookie operations
   - Provides direct cookie manipulation from components

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
