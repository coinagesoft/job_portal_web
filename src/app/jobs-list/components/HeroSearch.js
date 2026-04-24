'use client';
import React from 'react';

const HeroSearch = () => {
  return (
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-single banner-single-bg">
          <div className="block-banner text-center">
            <h3 className="wow animate__animated animate__fadeInUp">
              <span className="color-brand-2">22 Jobs</span> Available Now
            </h3>
            <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
              Explore verified openings across maritime, industrial, and skilled trade sectors, <br className="d-none d-xl-block" />
              with salary, location, and experience filters aligned to your profile.
            </div>
            <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
              <form>
                <div className="box-industry">
                  <select className="form-input mr-10 select-active input-industry">
                    <option value="0">Industry</option>
                    <option value="1">Construction</option>
                    <option value="2">Marine</option>
                    <option value="3">Manufacturing</option>
                    <option value="4">Logistics</option>
                    <option value="5">Hospitality</option>
                    <option value="6">Oil and Gas</option>
                  </select>
                </div>
                <select className="form-input mr-10 select-active">
                  <option value="">Location</option>
                  <option value="IN">India</option>
                  <option value="AE">UAE</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="QA">Qatar</option>
                </select>
                <input className="form-input input-keysearch mr-10" type="text" placeholder="Role, skill, or company" />
                <button className="btn btn-default btn-find font-sm" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;

