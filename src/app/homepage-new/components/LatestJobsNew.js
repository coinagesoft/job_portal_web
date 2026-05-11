"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const tabCategories = [
  { name: "Maintenance", icon: "management" },
  { name: "Fabrication", icon: "marketing" },
  { name: "Logistics", icon: "finance" },
  { name: "Construction", icon: "human" },
  { name: "Marine", icon: "retail" },
  { name: "Hospitality", icon: "content" },
  { name: "Safety", icon: "security" },
  { name: "Other", icon: "research" },
];

const allJobs = [
  [
    {
      title: "Marine Electrician",
      location: "Mumbai",
      time: "3 mins ago",
      price: "INR 55K - 72K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img1.png",
      tags: ["Panel Wiring", "Safety"],
      urgency: "Urgent",
    },
    {
      title: "HVAC Technician",
      location: "Lucknow",
      time: "6 mins ago",
      price: "INR 40K - 52K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img2.png",
      tags: ["HVAC", "Troubleshooting"],
      urgency: "",
    },
    {
      title: "Mechanical Fitter",
      location: "Chennai",
      time: "9 mins ago",
      price: "INR 45K - 58K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img3.png",
      tags: ["Alignment", "Assembly"],
      urgency: "",
    },
    {
      title: "General Maintenance Technician",
      location: "Bhopal",
      time: "45 mins ago",
      price: "INR 22K - 30K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img1.png",
      tags: ["Multi-skill", "Preventive"],
      urgency: "",
    },
  ],
  [
    {
      title: "Site Welder (6G)",
      location: "Pune",
      time: "12 mins ago",
      price: "INR 50K - 72K",
      type: "Contract",
      img: "/assets/imgs/page/homepage2/img4.png",
      tags: ["6G", "Fabrication"],
      urgency: "Urgent",
    },
    {
      title: "Pipe Fitter",
      location: "Kolkata",
      time: "15 mins ago",
      price: "INR 44K - 60K",
      type: "Contract",
      img: "/assets/imgs/page/homepage2/img2.png",
      tags: ["Pipe Fit-up", "Hydro Test"],
      urgency: "",
    },
    {
      title: "TIG Welder",
      location: "Noida",
      time: "1 hour ago",
      price: "INR 46K - 62K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img5.png",
      tags: ["TIG", "Quality Checks"],
      urgency: "",
    },
  ],
  [
    {
      title: "Heavy Vehicle Driver",
      location: "Hyderabad",
      time: "20 mins ago",
      price: "INR 28K - 40K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img6.png",
      tags: ["HMV License", "Trip Logs"],
      urgency: "Urgent",
    },
    {
      title: "Forklift Operator",
      location: "Kandla",
      time: "35 mins ago",
      price: "INR 28K - 38K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img4.png",
      tags: ["Forklift", "Material Handling"],
      urgency: "",
    },
    {
      title: "Warehouse Supervisor",
      location: "Delhi / NCR",
      time: "50 mins ago",
      price: "INR 38K - 52K",
      type: "Full time",
      img: "/assets/imgs/page/homepage2/img5.png",
      tags: ["Dispatch Planning", "Inventory"],
      urgency: "",
    },
  ],
];

export default function LatestJobsNew() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-box mt-50">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
              Latest Jobs Posted
            </h2>

            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Explore new openings by role and apply quickly
            </p>

            <div className="list-tabs list-tabs-2 mt-30">
              <ul className="nav nav-tabs" role="tablist">
                {tabCategories.map((tab, index) => (
                  <li key={tab.name}>
                    <a
                      className={activeTab === index ? "active" : ""}
                      href={`#tab-job-${index + 1}`}
                      onClick={(event) => {
                        event.preventDefault();
                        setActiveTab(index);
                      }}
                      role="tab"
                      aria-selected={activeTab === index}
                    >
                      <img
                        src={`/assets/imgs/page/homepage1/${tab.icon}.svg`}
                        alt={tab.name}
                      />
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tab-content mt-40">
            {tabCategories.map((_, index) => {
              const sourceJobs = allJobs[index] || [];
              const desktopSlides = sourceJobs.length <= 3 ? 2 : 3;
              const tabletSlides = sourceJobs.length <= 2 ? 1 : 2;

              return (
                <div
                  key={`tab-${index}`}
                  className={`tab-pane fade ${
                    activeTab === index ? "show active" : ""
                  }`}
                  id={`tab-job-${index + 1}`}
                  role="tabpanel"
                  aria-hidden={activeTab !== index}
                >
                  <div className="box-swiper style-nav-top">
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      spaceBetween={24}
                      slidesPerView={desktopSlides}
                      loop={sourceJobs.length > desktopSlides}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: `.swiper-jobs-next-${index}`,
                        prevEl: `.swiper-jobs-prev-${index}`,
                      }}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: tabletSlides },
                        1200: { slidesPerView: desktopSlides },
                      }}
                      className="swiper-group-jobs swiper"
                    >
                      {sourceJobs.map((job, jobIndex) => (
                        <SwiperSlide
                          key={`${job.title}-${job.location}-${jobIndex}`}
                        >
                          <div className="card-grid-2 grid-bd-16 hover-up">
                            <div className="card-grid-2-image">
                              <span
                                className={`lbl-hot ${
                                  job.urgency ? "bg-danger" : ""
                                }`}
                              >
                                <span>{job.urgency || job.type}</span>
                              </span>

                              <div className="image-box">
                                <figure>
                                  <img src={job.img} alt={job.title} />
                                </figure>
                              </div>
                            </div>

                            <div className="card-block-info">
                              <h6>
                                <Link href="/job-details">
                                  {job.title}
                                </Link>
                              </h6>

                              <div className="mt-5">
                                <span className="card-location mr-15">
                                  {job.location}
                                </span>

                                <span className="card-time">
                                  {job.time}
                                </span>
                              </div>

                              <div className="card-2-bottom mt-20">
                                <div className="row">
                                  <div className="col-xl-7 col-md-7 mb-2">
                                    {job.tags.map((tag) => (
                                      <span
                                        key={`${job.title}-${tag}-${jobIndex}`}
                                        className="btn btn-grey-small mr-5"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>

                                  <div className="col-xl-5 col-md-5 text-lg-end">
                                    <span className="card-text-price">
                                      {job.price}
                                    </span>

                                    <span className="text-muted">/mo</span>
                                  </div>
                                </div>
                              </div>

                              <p className="font-sm color-text-paragraph mt-15">
                                Looking for experienced professionals with
                                strong trade skills.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div
                      className={`swiper-button-prev swiper-jobs-prev-${index}`}
                    ></div>

                    <div
                      className={`swiper-button-next swiper-jobs-next-${index}`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-40">
            <Link href="/jobs-list" className="btn btn-default">
              View All Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}