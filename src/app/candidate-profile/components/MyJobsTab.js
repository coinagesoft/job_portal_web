'use client';
import React from "react";
import ProfileJobCard from "./ProfileJobCard";
import { mockMyJobs } from "./data";

const MyJobsTab = () => {
  return (
    <>
      <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
      <div className="row display-list">
        {mockMyJobs.map((job) => (
          <div key={job.id} className="col-xl-12 col-12">
            <ProfileJobCard job={job} isListView={true} />
          </div>
        ))}
      </div>
      <div className="paginations">
        <ul className="pager">
          <li><a className="pager-prev" href="#"></a></li>
          <li><a className="pager-number" href="#">1</a></li>
          <li><a className="pager-number" href="#">2</a></li>
          <li><a className="pager-number" href="#">3</a></li>
          <li><a className="pager-number" href="#">4</a></li>
          <li><a className="pager-number" href="#">5</a></li>
          <li><a className="pager-number active" href="#">6</a></li>
          <li><a className="pager-number" href="#">7</a></li>
          <li><a className="pager-next" href="#"></a></li>
        </ul>
      </div>
    </>
  );
};

export default MyJobsTab;

