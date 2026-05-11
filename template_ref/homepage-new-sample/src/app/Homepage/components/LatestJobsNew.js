"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const tabCategories = [
  { name: 'Maintenance', icon: 'management' },
  { name: 'Fabrication', icon: 'marketing' },
  { name: 'Logistics', icon: 'finance' },
  { name: 'Construction', icon: 'human' },
  { name: 'Marine', icon: 'retail' },
  { name: 'Hospitality', icon: 'content' },
  { name: 'Safety', icon: 'content' },
  { name: 'Other', icon: 'content' },
];

const allJobs = [
  // Maintenance
  [
    { title: 'Marine Electrician', location: 'Mumbai', time: '3 mins ago', price: '₹55K-₹72K', type: 'Full time', img: '/assets/imgs/page/blue-collar/ship_service.jpg', tags: ['Panel Wiring', 'Safety'], urgency: 'Urgent' },
    { title: 'HVAC Technician', location: 'Lucknow', time: '6 mins ago', price: '₹40K-₹52K', type: 'Full time', img: '/assets/imgs/page/blue-collar/ship_captain.jpg', tags: ['HVAC', 'Troubleshooting'], urgency: '' },
    { title: 'Mechanical Fitter', location: 'Chennai', time: '9 mins ago', price: '₹45K-₹58K', type: 'Full time', img: '/assets/imgs/page/blue-collar/welding.jpg', tags: ['Alignment', 'Assembly'], urgency: '' },
    { title: 'Pump Operator', location: 'Pune', time: '15 mins ago', price: '₹30K-₹42K', type: 'Full time', img: '/assets/imgs/page/homepage2/img1.png', tags: ['Pump Maint.', 'Industrial'], urgency: 'Urgent' },
    { title: 'Instrument Tech.', location: 'Bengaluru', time: '20 mins ago', price: '₹48K-₹65K', type: 'Contract', img: '/assets/imgs/page/homepage2/img2.png', tags: ['PLC', 'SCADA'], urgency: '' },
  ],
  // Fabrication
  [
    { title: 'Site Welder (6G)', location: 'Pune', time: '12 mins ago', price: '₹50K-₹72K', type: 'Contract', img: '/assets/imgs/page/blue-collar/ship_captain.jpg', tags: ['6G', 'Fabrication'], urgency: 'Urgent' },
    { title: 'Pipe Fitter', location: 'Kolkata', time: '15 mins ago', price: '₹44K-₹60K', type: 'Contract', img: '/assets/imgs/page/homepage2/img2.png', tags: ['Pipe Fit-up', 'Hydro Test'], urgency: '' },
    { title: 'Structural Fitter', location: 'Visakhapatnam', time: '22 mins ago', price: '₹42K-₹58K', type: 'Full time', img: '/assets/imgs/page/blue-collar/welding.jpg', tags: ['Steel', 'Grinding'], urgency: '' },
    { title: 'Boilermaker', location: 'Surat', time: '30 mins ago', price: '₹46K-₹62K', type: 'Full time', img: '/assets/imgs/page/homepage2/img3.png', tags: ['Boiler', 'NDT'], urgency: '' },
  ],
  // Logistics
  [
    { title: 'Heavy Vehicle Driver', location: 'Hyderabad', time: '20 mins ago', price: '₹28K-₹40K', type: 'Full time', img: '/assets/imgs/page/blue-collar/welding.jpg', tags: ['HMV', 'Fleet Safety'], urgency: 'Urgent' },
    { title: 'Forklift Operator', location: 'Nashik', time: '35 mins ago', price: '₹22K-₹30K', type: 'Full time', img: '/assets/imgs/page/homepage2/img4.png', tags: ['Forklift', 'Warehouse'], urgency: '' },
    { title: 'Crane Operator', location: 'Navi Mumbai', time: '40 mins ago', price: '₹38K-₹55K', type: 'Full time', img: '/assets/imgs/page/homepage2/img5.png', tags: ['EOT Crane', 'Rigging'], urgency: 'Urgent' },
  ],
  // Construction
  [
    { title: 'Shuttering Carpenter', location: 'Ahmedabad', time: '25 mins ago', price: '₹36K-₹50K', type: 'Full time', img: '/assets/imgs/page/blue-collar/ship_captain.jpg', tags: ['Formwork', 'Layout'], urgency: '' },
    { title: 'Bar Bender', location: 'Delhi NCR', time: '30 mins ago', price: '₹25K-₹35K', type: 'Full time', img: '/assets/imgs/page/homepage2/img1.png', tags: ['Rebar', 'Steel Fixing'], urgency: 'Urgent' },
    { title: 'Mason / Tiler', location: 'Jaipur', time: '1 hr ago', price: '₹22K-₹30K', type: 'Full time', img: '/assets/imgs/page/homepage2/img2.png', tags: ['Masonry', 'Tiling'], urgency: '' },
    { title: 'Scaffolding Supervisor', location: 'Mumbai', time: '2 hrs ago', price: '₹40K-₹55K', type: 'Contract', img: '/assets/imgs/page/homepage2/img3.png', tags: ['Scaffolding', 'Safety'], urgency: '' },
  ],
  // Marine
  [
    { title: 'Deck Crew Assistant', location: 'Goa', time: '30 mins ago', price: '₹32K-₹45K', type: 'Contract', img: '/assets/imgs/page/blue-collar/welding.jpg', tags: ['Deck Support', 'Safety Drill'], urgency: '' },
    { title: 'Engine Room Fitter', location: 'Kochi', time: '45 mins ago', price: '₹42K-₹58K', type: 'Full time', img: '/assets/imgs/page/blue-collar/sea offshore.jpg', tags: ['Marine Engine', 'Fitting'], urgency: 'Urgent' },
    { title: 'Ship Painter', location: 'Visakhapatnam', time: '1 hr ago', price: '₹24K-₹34K', type: 'Contract', img: '/assets/imgs/page/blue-collar/ship_service.jpg', tags: ['Blasting', 'Painting'], urgency: '' },
  ],
  // Hospitality
  [
    { title: 'Commis Cook (Bulk)', location: 'Kochi', time: '35 mins ago', price: '₹30K-₹42K', type: 'Full time', img: '/assets/imgs/page/blue-collar/sea offshore.jpg', tags: ['Food Safety', 'Prep'], urgency: '' },
    { title: 'Camp Housekeeping', location: 'Rajkot', time: '50 mins ago', price: '₹18K-₹24K', type: 'Full time', img: '/assets/imgs/page/homepage2/img1.png', tags: ['Housekeeping', 'Laundry'], urgency: '' },
    { title: 'Kitchen Steward', location: 'Hyderabad', time: '1 hr ago', price: '₹16K-₹22K', type: 'Full time', img: '/assets/imgs/page/homepage2/img2.png', tags: ['Steward', 'Cleaning'], urgency: '' },
  ],
  // Safety
  [
    { title: 'Fire Safety Technician', location: 'Indore', time: '40 mins ago', price: '₹32K-₹44K', type: 'Full time', img: '/assets/imgs/page/blue-collar/sea offshore.jpg', tags: ['Fire Panel', 'Compliance'], urgency: '' },
    { title: 'HSE Officer', location: 'Dubai, UAE', time: '1 hr ago', price: '₹55K-₹80K', type: 'Full time', img: '/assets/imgs/page/homepage2/img3.png', tags: ['HSE', 'NEBOSH'], urgency: 'Urgent' },
    { title: 'Safety Supervisor', location: 'Nagpur', time: '2 hrs ago', price: '₹28K-₹40K', type: 'Full time', img: '/assets/imgs/page/homepage2/img4.png', tags: ['PPE', 'Toolbox Talk'], urgency: '' },
  ],
  // Other
  [
    { title: 'General Maintenance Tech', location: 'Bhopal', time: '45 mins ago', price: '₹22K-₹30K', type: 'Full time', img: '/assets/imgs/page/homepage2/img1.png', tags: ['Multi-skill', 'Preventive'], urgency: '' },
    { title: 'Helper / Labour', location: 'Kanpur', time: '1 hr ago', price: '₹12K-₹18K', type: 'Full time', img: '/assets/imgs/page/homepage2/img2.png', tags: ['Helper', 'Labour'], urgency: '' },
    { title: 'Security Guard', location: 'Bengaluru', time: '2 hrs ago', price: '₹14K-₹20K', type: 'Full time', img: '/assets/imgs/page/homepage2/img3.png', tags: ['Security', 'Guard'], urgency: '' },
  ],
];

export default function LatestJobs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-box mt-50">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Latest Jobs Posted</h2>
            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Explore the different types of available jobs and find the one that is right for you.
            </p>
            <div className="list-tabs list-tabs-2 mt-30">
              <ul className="nav nav-tabs" role="tablist">
                {tabCategories.map((tab, index) => (
                  <li key={index}>
                    <a
                      className={activeTab === index ? 'active' : ''}
                      href={`#tab-job-${index + 1}`}
                      onClick={(e) => { e.preventDefault(); setActiveTab(index); }}
                      role="tab"
                      aria-selected={activeTab === index}
                    >
                      <img src={`/assets/imgs/page/homepage1/${tab.icon}.svg`} alt={tab.name} /> {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-40">
            {tabCategories.map((_, index) => (
              <div
                key={index}
                className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                id={`tab-job-${index + 1}`}
              >
                <div className="box-swiper" style={{ position: 'relative' }}>
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={3}
                    loop={allJobs[index]?.length > 3}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: `.swiper-jobs-next-${index}`,
                      prevEl: `.swiper-jobs-prev-${index}`,
                    }}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      576: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                    }}
                    className="swiper-group-jobs swiper"
                    style={{ paddingBottom: '10px', paddingTop: '5px' }}
                  >
                    {allJobs[index]?.map((job, j) => (
                      <SwiperSlide key={j}>
                        <div className="card-grid-2 grid-bd-16 hover-up">
                          <div className="card-grid-2-image">
                            <span className={`lbl-hot ${job.urgency ? 'bg-danger' : ''}`}>
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
                              <Link href="/jobs-list">{job.title}</Link>
                            </h6>
                            <div className="mt-5">
                              <span className="card-location mr-15">{job.location}</span>
                              <span className="card-time">{job.time}</span>
                            </div>
                            <div className="card-2-bottom mt-20">
                              <div className="row">
                                <div className="col-xl-7 col-md-7 mb-2">
                                  {job.tags.map((tag, t) => (
                                    <span key={t} className="badge bg-white border text-muted mr-5">{tag}</span>
                                  ))}
                                </div>
                                <div className="col-xl-5 col-md-5 text-lg-end">
                                  <span className="card-text-price">{job.price}</span>
                                  <span className="text-muted">/mo</span>
                                </div>
                              </div>
                            </div>
                            <p className="font-sm color-text-paragraph mt-15">
                              Looking for experienced professional with strong trade skills. Join our team today!
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className={`swiper-button-next swiper-jobs-next-${index}`}></div>
                  <div className={`swiper-button-prev swiper-jobs-prev-${index}`}></div>
                </div>
              </div>
            ))}
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
