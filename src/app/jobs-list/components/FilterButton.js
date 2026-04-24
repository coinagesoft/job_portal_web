'use client';
import React from 'react';

const FilterButton = ({ activeFilterCount = 0, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="filter-button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '10px 16px',
        borderRadius: '2px',
        border: activeFilterCount > 0 ? '1px solid var(--primary-navy)' : '1px solid var(--border-light)',
        backgroundColor: activeFilterCount > 0 ? 'var(--primary-navy)' : 'white',
        color: activeFilterCount > 0 ? 'white' : 'var(--text-mid)',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap'
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
      </svg>
      Filters
      {activeFilterCount > 0 && (
        <span style={{
          background: 'white',
          color: 'var(--primary-navy)',
          borderRadius: '10px',
          padding: '2px 6px',
          fontSize: '11px',
          fontWeight: '700',
          lineHeight: 1
        }}>
          {activeFilterCount}
        </span>
      )}
    </button>
  );
};

export default FilterButton;
