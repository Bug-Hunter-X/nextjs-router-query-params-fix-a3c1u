# Next.js useRouter Query Parameter Issue

This repository demonstrates a bug in Next.js related to using the `useRouter` hook for client-side navigation with query parameters.

## Bug Description
When navigating from the About page back to the Home page using `router.push` with query parameters, the query parameters are not correctly appended to the URL.  This leads to unexpected behavior in the Home page, as it doesn't receive the expected query parameters.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to the `/about` page.
5. Click the "Go Home" button.
6. Observe that the URL does not include the query parameter `name=John%20Doe`.

## Solution
The issue is resolved by using the correct method for adding query parameters to the router.push method.  See the solution branch for the fix.