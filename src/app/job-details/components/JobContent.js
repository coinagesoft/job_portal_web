'use client';
import React, { useState } from 'react';
import ApplyJobModal from '@/app/Homepage/components/ApplyJobModal';
import { detailedJob } from '../data.js';

const JobContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="content-single">
      <div dangerouslySetInnerHTML={{ __html: detailedJob.description }} />
      <div className="author-single">
        <span>{detailedJob.companyFull}</span>
      </div>
      <div className="single-apply-jobs">
        <div className="row align-items-center">
          <div className="col-md-5">
            <a className="btn btn-default mr-15" href="#" onClick={toggleModal}>Apply now</a>
            <a className="btn btn-border" href="#">Save job</a>
          </div>
          <div className="col-md-7 text-lg-end social-share">
            <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">Share this</h6>
            <a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="/assets/imgs/template/icons/share-fb.svg" /></a>
            <a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="/assets/imgs/template/icons/share-tw.svg" /></a>
            <a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="/assets/imgs/template/icons/share-red.svg" /></a>
            <a className="d-inline-block d-middle" href="#"><img alt="jobBox" src="/assets/imgs/template/icons/share-whatsapp.svg" /></a>
          </div>
        </div>
      </div>
      <ApplyJobModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default JobContent;

