"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const tabCategories = [
  { name: 'Management', icon: 'management' },
  { name: 'Marketing & Sale', icon: 'marketing' },
  { name: 'Finance', icon: 'finance' },
  { name: 'Human Resource', icon: 'human' },
  { name: 'Retail & Products', icon: 'retail' },
  { name: 'Content Writer', icon: 'content' },
{ name: 'Furniture Design', icon: 'content' },
  { name: 'Other', icon: 'content' },
];

const jobsData = [
  [
    { 
      title: 'React Native Web Developer', 
      location: 'New York, US', 
      time: '3 mins ago', 
      price: '$90 - $120', 
      type: 'Freelancer', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['Figma', 'Adobe XD'] 
    },
    { 
      title: 'Digital Marketing Manager', 
      location: 'Chicago, US', 
      time: '6 mins ago', 
      price: '$80 - $150', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img2.png', 
      tags: ['SEO', 'Word'] 
    },
    { 
      title: 'Web Designer/Developer', 
      location: 'Chicago, US', 
      time: '9 mins ago', 
      price: '$120 - $150', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img3.png', 
      tags: ['HTML', 'CSS', 'JS'] 
    },
  ],
  [
    { 
      title: 'Marketing Specialist', 
      location: 'LA', 
      time: '12 mins ago', 
      price: '$70 - $100', 
      type: 'Part time', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['Marketing', 'Sales'] 
    },
    { 
      title: 'Sales Executive', 
      location: 'Miami', 
      time: '15 mins ago', 
      price: '$60 - $90', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img2.png', 
      tags: ['Sales', 'CRM'] 
    },
  ],
  [
    { 
      title: 'Financial Analyst', 
      location: 'NY', 
      time: '20 mins ago', 
      price: '$95 - $130', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['Finance', 'Excel'] 
    },
  ],
  [
    { 
      title: 'HR Manager', 
      location: 'Dallas', 
      time: '25 mins ago', 
      price: '$85 - $125', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['HR', 'Recruitment'] 
    },
  ],
  [
    { 
      title: 'Product Manager', 
      location: 'Atlanta', 
      time: '30 mins ago', 
      price: '$120 - $160', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['Product', 'Agile'] 
    },
  ],
  [
    { 
      title: 'Content Writer', 
      location: 'Remote', 
      time: '35 mins ago', 
      price: '$50 - $80', 
      type: 'Freelancer', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['Writing', 'SEO'] 
    },
  ],
  [
    { 
      title: 'Furniture Designer', 
      location: 'Portland', 
      time: '40 mins ago', 
      price: '$80 - $120', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['Design', 'CAD'] 
    },
  ],
  [
    { 
      title: 'DevOps Engineer', 
      location: 'Remote', 
      time: '45 mins ago', 
      price: '$130 - $180', 
      type: 'Full time', 
      img: '/assets/imgs/page/homepage2/img1.png', 
      tags: ['DevOps', 'AWS'] 
    },
  ],
];

export default function LatestJobs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="section-box mt-50">
      <div className="section-box wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="text-start">
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Latest Jobs Post</h2>
            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Explore the different types of available jobs to apply<br className="d-none d-lg-block" />discover which is right for you.
            </p>
            <div className="list-tabs list-tabs-2 mt-30">
              <ul className="nav nav-tabs" role="tablist">
                {tabCategories.map((tab, index) => (
                  <li key={index}>
                    <a 
                      className={activeTab === index ? 'active' : ''} 
                      id={`nav-tab-job-${index + 1}`}
                      href={`#tab-job-${index + 1}`}
                      onClick={() => handleTabClick(index)}
                      role="tab" 
                      aria-controls={`tab-job-${index + 1}`} 
                      aria-selected={activeTab === index}
                    >
                      <img src={`/assets/imgs/page/homepage1/${tab.icon}.svg`} alt={tab.name} /> {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-50">
            <div className="tab-content" id="myTabContent-1">
              {tabCategories.map((_, index) => (
                <div 
                  key={index}
                  className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} 
                  id={`tab-job-${index + 1}`}
                  role="tabpanel" 
                  aria-labelledby={`nav-tab-job-${index + 1}`}
                >
                  <div className="row">
                    {jobsData[index]?.slice(0, 3).map((job, j) => (
                      <div key={j} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="card-grid-2 grid-bd-16 hover-up">
                          <div className="card-grid-2-image">
                            <span className={`lbl-hot ${job.type === 'Freelancer' ? 'bg-green' : ''}`}> 
                              <span>{job.type}</span>
                            </span>
                            <div className="image-box">
                              <figure><img src={job.img} alt="jobBox" /></figure>
                            </div>
                          </div>
                          <div className="card-block-info">
                            <h6>
                              <Link href="/job-details">{job.title}</Link>
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
                                  <span className="text-muted">/Hour</span>
                                </div>
                              </div>
                            </div>
                            <p className="font-sm color-text-paragraph mt-20">
                              Looking for experienced professional with strong skills in the field. Join our dynamic team today!
                            </p>
                          </div>
                        </div>
                      </div>
                    )) || []}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
