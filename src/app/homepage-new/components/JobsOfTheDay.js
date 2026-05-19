"use client";

import React, { useMemo, useState } from "react";
const JOB_CATEGORIES = [
  {
    label: "Construction",
    icon: "fa-solid fa-helmet-safety",
  },
  {
    label: "Technician",
    icon: "fa-solid fa-screwdriver-wrench",
  },
  {
    label: "Oil & Gas",
    icon: "fa-solid fa-oil-well",
  },
  {
    label: "Factory",
    icon: "fa-solid fa-industry",
  },
  {
    label: "Logistics",
    icon: "fa-solid fa-truck-fast",
  },
  {
    label: "Mechanical",
    icon: "fa-solid fa-gears",
  },
];

export default function JobsOfTheDay() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = useMemo(() => JOB_CATEGORIES, []);

  return (
    <section className="section-box mt-70">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Jobs of the day
          </h2>

          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Search and connect with the right candidates faster.
          </p>

          <div className="list-tabs mt-40">
            <ul className="nav nav-tabs" role="tablist">
              {tabs.map((tab, index) => (
                <li key={tab.label}>
                  <a
                    className={activeTab === index ? "active" : ""}
                    id={`nav-tab-job-${index + 1}`}
                    href={`#tab-job-${index + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(index);
                    }}
                    role="tab"
                    aria-controls={`tab-job-${index + 1}`}
                    aria-selected={activeTab === index}
                  >
                    <i className={tab.icon}></i>
                    <span>{tab.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-50">
          <div className="tab-content" id="myTabContent-1">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab-pane fade ${
                  activeTab === index ? "show active" : ""
                }`}
                id={`tab-job-${index + 1}`}
                role="tabpanel"
                aria-labelledby={`nav-tab-job-${index + 1}`}
              >
                <div className="row">
                  {/* CARD 1 */}
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-2 grid-bd-16 hover-up">
                      <div className="card-block-info pt-25">
                        <h6>
                          <a href="job-details.html">
                            UX Designer & Researcher Remote
                          </a>
                        </h6>

                        <div className="mt-5">
                          <span className="card-briefcase mr-15">Remote</span>
                          <span className="card-time">3 mins ago</span>
                        </div>

                        <div className="mt-20 border-bottom pb-20">
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Figma
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Adobe XD
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Sketch
                          </a>
                        </div>

                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-md-7">
                              <div className="d-flex">
                                <img
                                  className="img-rounded"
                                  src="/assets/imgs/brands/brand-1.png"
                                  alt="jobBox"
                                />

                                <div className="info-right-img">
                                  <h6 className="color-brand-1 lh-14">
                                    Linkedin
                                  </h6>

                                  <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                    New York, US
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-5 text-end">
                              <span className="card-text-price">$200</span>
                              <span className="text-muted">/Hour</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-2 grid-bd-16 hover-up">
                      <div className="card-block-info pt-25">
                        <h6>
                          <a href="job-details.html">Full Stack Engineer</a>
                        </h6>

                        <div className="mt-5">
                          <span className="card-briefcase mr-15">Remote</span>
                          <span className="card-time">10 mins ago</span>
                        </div>

                        <div className="mt-20 border-bottom pb-20">
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            React
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Node.js
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            MongoDB
                          </a>
                        </div>

                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-md-7">
                              <div className="d-flex">
                                <img
                                  className="img-rounded"
                                  src="/assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />

                                <div className="info-right-img">
                                  <h6 className="color-brand-1 lh-14">
                                    Google
                                  </h6>

                                  <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                    California, US
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-5 text-end">
                              <span className="card-text-price">$250</span>
                              <span className="text-muted">/Hour</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-2 grid-bd-16 hover-up">
                      <div className="card-block-info pt-25">
                        <h6>
                          <a href="job-details.html">Frontend Developer</a>
                        </h6>

                        <div className="mt-5">
                          <span className="card-briefcase mr-15">Hybrid</span>
                          <span className="card-time">20 mins ago</span>
                        </div>

                        <div className="mt-20 border-bottom pb-20">
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            React
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Next.js
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Tailwind
                          </a>
                        </div>

                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-md-7">
                              <div className="d-flex">
                                <img
                                  className="img-rounded"
                                  src="/assets/imgs/brands/brand-3.png"
                                  alt="jobBox"
                                />

                                <div className="info-right-img">
                                  <h6 className="color-brand-1 lh-14">
                                    Microsoft
                                  </h6>

                                  <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                    Seattle, US
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-5 text-end">
                              <span className="card-text-price">$180</span>
                              <span className="text-muted">/Hour</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4 */}
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card-grid-2 grid-bd-16 hover-up">
                      <div className="card-block-info pt-25">
                        <h6>
                          <a href="job-details.html">UI / UX Designer</a>
                        </h6>

                        <div className="mt-5">
                          <span className="card-briefcase mr-15">Fulltime</span>
                          <span className="card-time">30 mins ago</span>
                        </div>

                        <div className="mt-20 border-bottom pb-20">
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            UI Design
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Figma
                          </a>
                          <a
                            className="btn btn-grey-small bg-14 mb-5 mr-5"
                            href="jobs-grid.html"
                          >
                            Adobe XD
                          </a>
                        </div>

                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-md-7">
                              <div className="d-flex">
                                <img
                                  className="img-rounded"
                                  src="/assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />

                                <div className="info-right-img">
                                  <h6 className="color-brand-1 lh-14">Adobe</h6>

                                  <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                                    Texas, US
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-5 text-end">
                              <span className="card-text-price">$220</span>
                              <span className="text-muted">/Hour</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .list-tabs .nav-tabs li a {
          display: flex;
          align-items: center;
          gap: 10px;

          transition: all 0.35s ease;
        }

        .list-tabs .nav-tabs li a i {
          font-size: 18px;

          color: #122359;

          transition: all 0.35s ease;
        }

        /* Hover */
        .list-tabs .nav-tabs li a:hover i {
          color: #ffa300;
          transform: scale(1.08);
        }

        /* Hover */
        .list-tabs .nav-tabs li a:hover i {
          color: #ffa300;
          transform: scale(1.08);
        }

        /* Active Icon */
        .list-tabs .nav-tabs li a.active i {
          color: #ffa300;
          transform: scale(1.08);
        }

        /* Active Text */
        .list-tabs .nav-tabs li a.active span {
          color: #ffa300 !important;
        }

        /* Hover Text */
        .list-tabs .nav-tabs li a:hover span {
          color: #ffa300 !important;
        }
      `}</style>
    </section>
  );
}
