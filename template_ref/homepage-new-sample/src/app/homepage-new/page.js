'use client';
import React, { useState, useEffect } from 'react';
import Preloader from '../Homepage/components/Preloader';
import HeroBanner from '../Homepage/components/HeroBanner';
import StatsSection from '../Homepage/components/StatsSection';
import ExploreMarketplace from '../Homepage/components/ExploreMarketplace';
import LatestJobsNew from '../Homepage/components/LatestJobsNew';
import JobsByLocation from '../Homepage/components/JobsByLocation';
import JobsByRole from '../Homepage/components/JobsByRole';
import TopRecruiters from '../Homepage/components/TopRecruiters';
import HowItWorks from '../Homepage/components/HowItWorks';

export default function HomepageNew() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded && <Preloader />}

      <main className="main">
        {/* 1. Hero Banner with Search */}
        <HeroBanner />

        {/* 2. Stats — trust signals */}
        <StatsSection />

        {/* 3. How It Works — simple 3-step guide for new users */}
        <HowItWorks />

        {/* 4. Latest Jobs — tabbed carousel by trade */}
        <LatestJobsNew />

        {/* 5. Browse by Location — city cards carousel */}
        <JobsByLocation />

        {/* 6. Explore by Role/Category — full image cards carousel */}
        <JobsByRole />

        {/* 7. Explore Marketplace — existing section */}
        <ExploreMarketplace />

        {/* 8. Top Recruiters — hiring partner logos carousel */}
        <TopRecruiters />
      </main>
    </>
  );
}
