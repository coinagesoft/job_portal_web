import { Suspense } from 'react';
import JobsListPageClient from './JobsListPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div className="container">Loading jobs...</div>}>
      <JobsListPageClient />
    </Suspense>
  );
}

