'use client';
import React, { useState } from 'react';
import ApplyJobModal from '@/app/Homepage/components/ApplyJobModal';
import { detailedJob } from '../data.js';

const JobDetailHero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-image-single">
          <img src={detailedJob.bannerImg} alt="jobBox" />
        </div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h3>{detailedJob.title}</h3>
            <div className="mt-0 mb-15">
              <span className="card-briefcase">{detailedJob.type}</span>
              <span className="card-time">{detailedJob.time}</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end">
            <div className="btn btn-apply-icon btn-apply btn-apply-big hover-up" onClick={toggleModal}>
              Apply now
            </div>
          </div>
        </div>
        <div className="border-bottom pt-10 pb-10"></div>
      </div>
      <ApplyJobModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default JobDetailHero;

