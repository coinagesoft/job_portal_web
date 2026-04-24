'use client';
import React, { useState } from 'react';

const ApplyJobModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* <button className="btn btn-default hover-up" onClick={toggleModal}>
        Apply Job
      </button> */}
      
      {showModal && (
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} id="ModalApplyJobForm" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content apply-job-form">
              <button className="btn-close" type="button" onClick={toggleModal}></button>
              <div className="modal-body pl-30 pr-30 pt-50">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Job Application</p>
                  <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                  <p className="font-sm text-muted mb-30">
                    Please fill in your information and send it to the employer.
                  </p>
                </div>
                <form className="login-register text-start mt-20 pb-30" action="#">
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-1">Full Name *</label>
                    <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-2">Email *</label>
                    <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="name@company.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="number">Contact Number *</label>
                    <input className="form-control" id="number" type="text" required name="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="des">Description</label>
                    <input className="form-control" id="des" type="text" required name="Description" placeholder="Your description..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="file">Upload Resume</label>
                    <input className="form-control" id="file" name="resume" type="file" />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Agree our terms and policy</span>
                      <span className="checkmark"></span>
                    </label>
                    <a className="text-muted" href="/page-contact">Learn more</a>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-default hover-up w-100" type="submit" name="login">
                      Apply Job
                    </button>
                  </div>
                  <div className="text-muted text-center">
                    Do you need support? <a href="/page-contact">Contact Us</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show" onClick={toggleModal} />}
    </>
  );
};

export default ApplyJobModal;

