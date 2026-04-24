 'use client';
import React, { useEffect } from 'react';

const StatsSection = () => {

  return (
    <section className="section-box overflow-visible mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count" data-target="25">25</span>
                <span> K+</span>
              </h1>
              <h5>Completed Cases</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of<br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count" data-target="17">17</span>
                <span> +</span>
              </h1>
              <h5>Our Office</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of <br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count" data-target="86">86</span>
                <span> +</span>
              </h1>
              <h5>Skilled People</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of <br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="text-center">
              <h1 className="color-brand-2">
                <span className="count" data-target="28">28</span>
                <span> +</span>
              </h1>
              <h5>Happy Clients</h5>
              <p className="font-sm color-text-paragraph mt-10">
                We always provide people a <br className="d-none d-lg-block" />
                complete solution upon focused of <br className="d-none d-lg-block" />
                any business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

