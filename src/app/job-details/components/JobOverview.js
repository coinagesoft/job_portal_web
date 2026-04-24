'use client';
import React from 'react';
import { detailedJob } from '../data.js';

const iconMap = {
  industry: '/assets/imgs/page/job-single/industry.svg',
  jobLevel: '/assets/imgs/page/job-single/job-level.svg',
  salary: '/assets/imgs/page/job-single/salary.svg',
  experience: '/assets/imgs/page/job-single/experience.svg',
  jobType: '/assets/imgs/page/job-single/job-type.svg',
  deadline: '/assets/imgs/page/job-single/deadline.svg',
  updated: '/assets/imgs/page/job-single/updated.svg',
  location: '/assets/imgs/page/job-single/location.svg',
};

const JobOverview = () => {
  const infoItems = [
    { icon: 'industry', label: 'Industry', value: detailedJob.industry },
    { icon: 'jobLevel', label: 'Job level', value: detailedJob.jobLevel },
    { icon: 'salary', label: 'Salary', value: detailedJob.salary },
    { icon: 'experience', label: 'Experience', value: detailedJob.experience },
    { icon: 'jobType', label: 'Job type', value: detailedJob.jobType },
    { icon: 'experience', label: 'Age Range', value: detailedJob.minAgeMax },
    { icon: 'location', label: 'Location Type', value: detailedJob.locationType },
    { icon: 'industry', label: 'Education', value: detailedJob.education },
    { icon: 'industry', label: 'Certifications', value: detailedJob.requiredCertification },
    { icon: 'jobType', label: 'Gender', value: detailedJob.gender },
    { icon: 'location', label: 'Languages', value: detailedJob.languagePreferred },
    { icon: 'deadline', label: 'Deadline', value: detailedJob.deadline },
    { icon: 'updated', label: 'Updated', value: detailedJob.updated },
    { icon: 'location', label: 'Location', value: detailedJob.location },
  ];

  return (
    <div className="job-overview">
      <h5 className="border-bottom pb-15 mb-30">Employment Information</h5>
      <div className="row">
        {infoItems.map((item, index) => (
          <div key={index} className={`col-md-6 d-flex ${index % 2 ? 'mt-sm-15' : ''}`}>
            <div className="sidebar-icon-item">
              <img src={iconMap[item.icon]} alt="jobBox" />
            </div>
            <div className="sidebar-text-info ml-10">
              <span className="text-description mb-10">{item.label}</span>
              <strong className="small-heading">{item.value}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOverview;

