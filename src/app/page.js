'use client';
import React, { useState, useEffect } from 'react';
import Preloader from '@/app/Homepage/components/Preloader';
import HeroBanner from '@/app/Homepage/components/HeroBanner';
import StatsSection from '@/app/Homepage/components/StatsSection';
import ApplyJobModal from '@/app/Homepage/components/ApplyJobModal';
import ExploreMarketplace from '@/app/Homepage/components/ExploreMarketplace';
import LatestJobs from '@/app/Homepage/components/LatestJobs';
import Head from 'next/head';

export default function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Jobbox - Job Portal HTML Template</title>
        <meta name="description" content="Index page" />
        <meta name="keywords" content="index, page" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="msapplication-TileColor" content="#0E0E0E" />
        <meta name="template-color" content="#0E0E0E" />
      </Head>
      
      {!isLoaded && <Preloader />}
      <ApplyJobModal />
      
      <main className="main">
        <HeroBanner />
        <StatsSection />
        <ExploreMarketplace />
        <LatestJobs />
        {/* More sections coming... */}
      </main>
    </>
  );
}
