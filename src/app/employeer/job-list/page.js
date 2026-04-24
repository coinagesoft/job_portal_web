import Link from "next/link";

const jobStatusTabs = [
  { label: "Active", count: 4, isActive: true },
  { label: "Paused", count: 1, isActive: false },
  { label: "Closed", count: 8, isActive: false },
  { label: "Archived", count: 12, isActive: false },
];

const postingTypeTabs = [
  { label: "Normal", count: 6, isActive: false },
  { label: "Hot Vacancy", count: 2, isActive: true },
  { label: "Classified", count: 1, isActive: false },
];

const employerJobs = [
  {
    id: "job-welder-6g-mumbai",
    title: "Welder 6G - Mumbai",
    meta: "Onshore | INR 30K-45K | Deadline: 15 May 2026",
    postType: "Hot Vacancy",
    postTypeClass: "badge bg-danger",
    visibility: "Visibility: 15 days",
    priorityText: "Priority rank: Top results + Featured Jobs section",
    monetization: "Premium fee: INR 2,999 + GST",
    applicants: 12,
    shortlisted: 3,
    vacancies: 3,
    status: "Active",
    statusClass: "badge bg-success",
    actions: [
      { label: "Applicants", href: "/employeer/applicants" },
      { label: "Edit", href: "/dashboard/post-job" },
      { label: "Pause" },
    ],
  },
  {
    id: "job-marine-engineer-gulf",
    title: "Marine Engineer - Gulf Region",
    meta: "Offshore | USD 3,000-4,500 | Deadline: 30 Apr 2026",
    postType: "Classified",
    postTypeClass: "badge bg-warning text-dark",
    visibility: "Visibility: Standard listing",
    priorityText: "Classified listing with lower cost than Hot Vacancy",
    monetization: "Posting fee: INR 999 + GST",
    applicants: 7,
    shortlisted: 2,
    vacancies: 1,
    status: "Active",
    statusClass: "badge bg-success",
    actions: [
      { label: "Applicants", href: "/employeer/applicants" },
      { label: "Edit", href: "/dashboard/post-job" },
      { label: "Boost as Hot" },
    ],
  },
  {
    id: "job-cook-galley-hand",
    title: "Cook / Galley Hand",
    meta: "Offshore | AED 2,500-3,200 | Deadline: 20 Apr 2026",
    postType: "Normal Job",
    postTypeClass: "badge bg-secondary",
    visibility: "Visibility: Standard listing",
    priorityText: "Normal ranking in results",
    monetization: "Posting fee: Included in plan",
    applicants: 0,
    shortlisted: 0,
    vacancies: 2,
    status: "Paused",
    statusClass: "badge bg-warning text-dark",
    actions: [{ label: "Resume" }, { label: "Edit", href: "/dashboard/post-job" }],
  },
];

const compactBtnStyle = {
  padding: "5px 10px",
  lineHeight: "16px",
};

export const metadata = {
  title: "Employer Job List - Job Portal",
  description: "Manage your posted jobs and hiring pipeline.",
};

const EmployerJobListPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Jobs</h3>
                  <span className="font-sm color-text-paragraph-2">
                    Track active, paused, and premium-priority job listings
                  </span>
                </div>
                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  <Link className="btn btn-default hover-up" href="/dashboard/post-job">
                    + Post a job
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 mb-20">
              {jobStatusTabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`btn btn-sm ${tab.isActive ? "btn-default" : "btn-border"} mr-10 mb-10`}
                  type="button"
                  style={compactBtnStyle}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="mt-5 mb-20">
              {postingTypeTabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`btn btn-sm ${tab.isActive ? "btn-default" : "btn-border"} mr-10 mb-10`}
                  type="button"
                  style={compactBtnStyle}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="box-list-jobs display-list">
              {employerJobs.map((job) => (
                <div className="col-xl-12 col-12" key={job.id}>
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20">
                      <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                          <h4>
                            <a href="#">{job.title}</a>
                          </h4>
                          <p className="font-sm color-text-paragraph mt-10">{job.meta}</p>
                          <div className="mt-10 d-flex flex-wrap align-items-center">
                            <span className={`${job.postTypeClass} mr-5 mb-5`}>{job.postType}</span>
                            {job.postType === "Hot Vacancy" ? (
                              <span className="badge bg-primary mr-5 mb-5">Urgent Hiring</span>
                            ) : null}
                          </div>
                          <p className="font-xs color-text-paragraph-2 mt-10 mb-5">{job.visibility}</p>
                          <p className="font-xs color-text-paragraph-2 mb-0">{job.priorityText}</p>
                          <p className="font-xs color-text-paragraph-2 mb-0">{job.monetization}</p>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 mt-md-15 mt-sm-15">
                          <div className="row text-center">
                            <div className="col-4">
                              <div className="card-text-price">{job.applicants}</div>
                              <span className="font-xs color-text-mutted">Applicants</span>
                            </div>
                            <div className="col-4">
                              <div className="card-text-price">{job.shortlisted}</div>
                              <span className="font-xs color-text-mutted">Shortlisted</span>
                            </div>
                            <div className="col-4">
                              <div className="card-text-price">{job.vacancies}</div>
                              <span className="font-xs color-text-mutted">Vacancies</span>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 text-lg-end mt-md-15 mt-sm-15">
                          <div className="card-2-bottom mt-20 mt-lg-0">
                            <span className={job.statusClass}>{job.status}</span>
                            <div className="mt-10">
                              {job.actions.map((action) =>
                                action.href ? (
                                  <Link
                                    key={`${job.id}-${action.label}`}
                                    className="btn btn-grey-small btn-sm mr-5 mb-5"
                                    href={action.href}
                                    style={compactBtnStyle}
                                  >
                                    {action.label}
                                  </Link>
                                ) : (
                                  <button
                                    key={`${job.id}-${action.label}`}
                                    className="btn btn-grey-small btn-sm mr-5 mb-5"
                                    type="button"
                                    style={compactBtnStyle}
                                  >
                                    {action.label}
                                  </button>
                                )
                              )}
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
      </section>
    </main>
  );
};

export default EmployerJobListPage;
