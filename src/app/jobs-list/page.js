'use client';
import React, { useState, useCallback } from 'react';
import Preloader from '../Homepage/components/Preloader';
import HeroSearch from './components/HeroSearch';
import JobList from './components/JobList';
import JobFiltersSidebar from './components/JobFiltersSidebar';
import NewsSection from './components/NewsSection';
import Newsletter from './components/Newsletter';
import Footer from '@/components/Footer';
import FilterButton from './components/FilterButton';
import JobFilterSheet from './components/JobFilterSheet';


const JobsListPage = () => {
  const [filters, setFilters] = useState({});
  const [showFilterSheet, setShowFilterSheet] = useState(false);

  const totalFilterCount = Object.values(filters).reduce((sum, cat) => sum + (Array.isArray(cat) ? cat.length : 0), 0);

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters || {});
  }, []);

  const handleSheetApply = useCallback((sheetFilters) => {
    setFilters(sheetFilters || {});
  }, []);

  const handleSheetClose = useCallback(() => {
    setShowFilterSheet(false);
  }, []);

  return (
    <>
      <Preloader />
      {/* <Header /> */}
      <HeroSearch />
      <section className="section-box mt-30">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', padding: '0 15px' }}>
                <FilterButton 
                  activeFilterCount={totalFilterCount}
                  onClick={() => setShowFilterSheet(true)} 
                />
              </div>
              <JobList filters={filters} />
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <JobFiltersSidebar onFilterChange={handleFiltersChange} />
            </div>
          </div>
        </div>
      </section>
      <NewsSection />
      <Newsletter />
      <Footer />
      {showFilterSheet && (
        <JobFilterSheet 
          initialFilters={filters}
          onApply={handleSheetApply}
          onClose={handleSheetClose}
        />
      )}
    </>
  );
};

export default JobsListPage;


