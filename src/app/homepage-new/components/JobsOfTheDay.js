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
                  {[
                    {
                      title: "UX Designer & Researcher Remote",
                      company: "Linkedin",
                      location: "New York, US",
                      price: "$200",
                      time: "3 mins ago",
                      type: "Remote",
                      img: "/assets/imgs/brands/brand-1.png",
                      tags: ["Figma", "Adobe XD", "Sketch"],
                    },
                    {
                      title: "Full Stack Engineer",
                      company: "Google",
                      location: "California, US",
                      price: "$250",
                      time: "10 mins ago",
                      type: "Remote",
                      img: "/assets/imgs/brands/brand-2.png",
                      tags: ["React", "Node.js", "MongoDB"],
                    },
                    {
                      title: "Frontend Developer",
                      company: "Microsoft",
                      location: "Seattle, US",
                      price: "$180",
                      time: "20 mins ago",
                      type: "Hybrid",
                      img: "/assets/imgs/brands/brand-3.png",
                      tags: ["React", "Next.js", "Tailwind"],
                    },
                    {
                      title: "UI / UX Designer",
                      company: "Adobe",
                      location: "Texas, US",
                      price: "$220",
                      time: "30 mins ago",
                      type: "Fulltime",
                      img: "/assets/imgs/brands/brand-4.png",
                      tags: ["UI Design", "Figma", "Adobe XD"],
                    },
                  ].map((job, idx) => (
                    <div
                      key={idx}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-30"
                    >
                      <div className="card-grid-2 grid-bd-16 hover-up">
                        <div className="card-block-info pt-25">
                          <h6>
                            <a href="job-details.html">{job.title}</a>
                          </h6>

                          <div className="mt-5">
                            <span className="card-briefcase mr-15">
                              {job.type}
                            </span>

                            <span className="card-time">{job.time}</span>
                          </div>

                          {/* TAGS */}
                          <div className="mt-20 border-bottom pb-20">
                            {job.tags.map((tag, tagIndex) => (
                              <a
                                key={tagIndex}
                                className="btn btn-grey-small bg-14 mb-5 mr-5"
                                href="jobs-grid.html"
                              >
                                {tag}
                              </a>
                            ))}
                          </div>

                          {/* FOOTER */}
                          {/* FOOTER */}
                          <div
                            className="card-2-bottom mt-16"
                            style={{
                              paddingTop: 12,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 12,
                              }}
                            >
                              {/* LEFT */}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                  flex: 1,
                                  minWidth: 0,
                                }}
                              >
                                <img
                                  className="img-rounded"
                                  src={job.img}
                                  alt="jobBox"
                                  style={{
                                    width: 42,
                                    height: 42,
                                    objectFit: "contain",
                                    borderRadius: "50%",
                                    flexShrink: 0,
                                  }}
                                />

                                <div
                                  style={{
                                    minWidth: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                  }}
                                >
                                  <h6
                                    style={{
                                      margin: 0,
                                      fontSize: 16,
                                      lineHeight: 1.2,
                                      fontWeight: 700,
                                      color: "#122359",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    {job.company}
                                  </h6>

                                  <span
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 4,
                                      fontSize: 12,
                                      color: "#8A94A6",
                                      marginTop: 6,
                                      lineHeight: 1.2,
                                    }}
                                  >
                                    <i
                                      className="fi-rr-marker"
                                      style={{
                                        fontSize: 10,
                                      }}
                                    ></i>

                                    {job.location}
                                  </span>
                                </div>
                              </div>

                              {/* RIGHT */}
                              <div
                                style={{
                                  textAlign: "right",
                                  flexShrink: 0,
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: 24,
                                    fontWeight: 800,
                                    color: "#ffa300",
                                    lineHeight: 1,
                                  }}
                                >
                                  {job.price}
                                </div>

                                <span
                                  style={{
                                    fontSize: 12,
                                    color: "#7B8794",
                                  }}
                                >
                                  /Hour
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =========================================
           TABS
        ========================================= */

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

        .list-tabs .nav-tabs li a:hover i {
          color: #ffa300;
          transform: scale(1.08);
        }

        .list-tabs .nav-tabs li a.active i {
          color: #ffa300;
          transform: scale(1.08);
        }

        .list-tabs .nav-tabs li a.active span {
          color: #ffa300 !important;
        }

        .list-tabs .nav-tabs li a:hover span {
          color: #ffa300 !important;
        }

        /* =========================================
           SAME CARD HEIGHT
        ========================================= */

        .card-grid-2.grid-bd-16 {
          min-height: 390px;

          height: 100%;

          display: flex;
          flex-direction: column;
        }

        .card-grid-2.grid-bd-16 .card-block-info {
          flex: 1;

          display: flex;
          flex-direction: column;
        }

        /* Same title height */
        .card-grid-2.grid-bd-16 h6 {
          min-height: 64px;

          display: flex;
          align-items: flex-start;
        }

        .card-grid-2.grid-bd-16 h6 a {
          display: -webkit-box;

          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          overflow: hidden;
        }

        /* Same tags height */
        .card-grid-2.grid-bd-16 .border-bottom {
          min-height: 92px;

          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
        }

        /* Bottom always aligned */
        .card-grid-2.grid-bd-16 .card-2-bottom {
          margin-top: auto !important;
        }

        /* Company section fixed */
        .card-grid-2.grid-bd-16 .info-right-img {
          min-height: 42px;
        }

        /* Equal company row */
        .card-grid-2.grid-bd-16 .card-2-bottom .row {
          align-items: center;
        }

        /* =========================================
           PREMIUM TAGS
        ========================================= */

        .btn.btn-grey-small.bg-14 {
          border-radius: 999px !important;

          padding: 7px 14px !important;

          border: 1px solid #b9dcff !important;

          background: #eaf4ff !important;

          color: #1d4ed8 !important;

          font-size: 12px !important;
          font-weight: 600 !important;

          transition: all 0.3s ease;
        }

        .btn.btn-grey-small.bg-14:hover {
          background: #1d4ed8 !important;

          color: #ffffff !important;

          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .card-grid-2.grid-bd-16 {
            min-height: auto;
          }

          .card-grid-2.grid-bd-16 h6 {
            min-height: auto;
          }

          .card-grid-2.grid-bd-16 .border-bottom {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
