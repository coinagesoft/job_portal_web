'use client';
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="paginations">
      <ul className="pager">
        <li><a className="pager-prev" href="#" onClick={() => onPageChange(currentPage - 1)}>&laquo;</a></li>
        {pages.map(page => (
          <li key={page}>
            <a 
              className={`pager-number ${currentPage === page ? 'active' : ''}`} 
              href="#" 
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li><a className="pager-next" href="#" onClick={() => onPageChange(currentPage + 1)}>&raquo;</a></li>
      </ul>
    </div>
  );
};

export default Pagination;

