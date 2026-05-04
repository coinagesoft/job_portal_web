# TODO: Fix Next.js build - Wrap useSearchParams in Suspense for /jobs-list

## Steps:
1. [x] Create new client component: src/app/jobs-list/JobsListPageClient.js (move all logic from page.js)
2. [x] Refactor src/app/jobs-list/page.js to server component with Suspense boundary
3. [x] Test: Run `npm run build` to verify fix
4. [ ] [Optional] Fix similar issue in src/app/register/page.js if build still fails
5. [ ] attempt_completion
