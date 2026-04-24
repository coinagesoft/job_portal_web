import Link from "next/link";

const companyProfileFields = [
  {
    field: "company_display_name",
    label: "Display name",
    value: "Horizon Marine",
    note: "Shown on listings"
  },
  {
    field: "legal_name",
    label: "Legal name",
    value: "Horizon Marine Services Pvt. Ltd.",
    note: "Changes trigger admin re-review"
  },
  {
    field: "company_size",
    label: "Company size",
    value: "51-200",
    note: "Team-size bracket"
  },
  {
    field: "year_established",
    label: "Year established",
    value: "2011",
    note: "Public company profile field"
  },
  {
    field: "website",
    label: "Website",
    value: "https://horizonmarine.in",
    note: "Corporate website"
  },
  {
    field: "contact_phone",
    label: "Contact phone",
    value: "+91 22 4567 8900",
    note: "Employer support number"
  }
];

const trustBadges = [
  {
    badge: "GST Verified",
    status: "Approved",
    statusClass: "badge bg-success",
    detail: "badge_gst_verified"
  },
  {
    badge: "POE Licensed",
    status: "Approved",
    statusClass: "badge bg-success",
    detail: "Expires 31 Dec 2026"
  },
  {
    badge: "RPSL Licensed",
    status: "Pending upload",
    statusClass: "badge bg-warning text-dark",
    detail: "badge_rpsl_licensed = false"
  },
  {
    badge: "Blue Tick",
    status: "Active",
    statusClass: "badge bg-primary",
    detail: "GST + POE + Corporate email"
  }
];

const recruitmentCards = [
  {
    id: "recruitment-welder-6g",
    title: "Welder 6G - Offshore",
    location: "Mumbai, IN",
    type: "Full time",
    postedAgo: "2 days ago",
    salary: "INR 45,000 / month",
    applicants: 12
  },
  {
    id: "recruitment-marine-electrician",
    title: "Marine Electrician",
    location: "Chennai, IN",
    type: "Contract",
    postedAgo: "4 days ago",
    salary: "INR 52,000 / month",
    applicants: 8
  },
  {
    id: "recruitment-galley-cook",
    title: "Galley Cook",
    location: "Kochi, IN",
    type: "Full time",
    postedAgo: "6 days ago",
    salary: "INR 38,000 / month",
    applicants: 5
  }
];

const peopleCards = [
  {
    id: "person-arjun",
    name: "Arjun Mehta",
    role: "Account owner",
    email: "arjun.mehta@horizonmarine.in"
  },
  {
    id: "person-sneha",
    name: "Sneha Raut",
    role: "HR Manager",
    email: "sneha.raut@horizonmarine.in"
  },
  {
    id: "person-rahul",
    name: "Rahul Desai",
    role: "Recruiter",
    email: "rahul.desai@horizonmarine.in"
  }
];

const latestJobs = [
  {
    id: "latest-1",
    company: "Horizon Marine",
    location: "Mumbai, IN",
    logo: "/assets/imgs/brands/brand-6.png",
    title: "Senior Welder - Offshore",
    type: "Full time",
    time: "2 days ago",
    salary: "INR 45,000",
    tags: ["ITI", "Offshore"]
  },
  {
    id: "latest-2",
    company: "Horizon Marine",
    location: "Chennai, IN",
    logo: "/assets/imgs/brands/brand-7.png",
    title: "Marine Electrician",
    type: "Contract",
    time: "4 days ago",
    salary: "INR 52,000",
    tags: ["Marine", "Electrical"]
  },
  {
    id: "latest-3",
    company: "Horizon Marine",
    location: "Kochi, IN",
    logo: "/assets/imgs/brands/brand-8.png",
    title: "Galley Cook",
    type: "Full time",
    time: "6 days ago",
    salary: "INR 38,000",
    tags: ["Hospitality", "Vessel Crew"]
  }
];

export const metadata = {
  title: "Employer Company Profile - Job Portal",
  description: "Manage employer company profile, badges, and hiring visibility."
};

const EmployerCompanyProfilePage = () => {
  return (
    <main className="main">
      <section className="section-box-2">
        <div className="container">
          <div className="banner-hero banner-image-single">
            <img src="/assets/imgs/page/company/img.png" alt="company banner" />
          </div>
          <div className="box-company-profile">
            <div className="image-compay">
              <img src="/assets/imgs/page/company/company.png" alt="company logo" />
            </div>
            <div className="row mt-10">
              <div className="col-lg-8 col-md-12">
                <h5 className="f-18">
                  Horizon Marine
                  <span className="card-location font-regular ml-20">Mumbai, IN</span>
                </h5>
                <p className="mt-5 font-md color-text-paragraph-2 mb-15">
                  Our mission to make offshore hiring faster and more trustworthy.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 text-lg-end">
                <button className="btn btn-call-icon btn-apply btn-apply-big" type="button">
                  Save changes
                </button>
              </div>
            </div>
          </div>
          <div className="box-nav-tabs mt-40 mb-5">
            <ul className="nav" role="tablist">
              <li>
                <a
                  className="btn btn-border aboutus-icon mr-15 mb-5 active"
                  href="#tab-about"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-about"
                  aria-selected="true"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="btn btn-border recruitment-icon mr-15 mb-5"
                  href="#tab-recruitments"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-recruitments"
                  aria-selected="false"
                >
                  Recruitments
                </a>
              </li>
              <li>
                <a
                  className="btn btn-border people-icon mb-5"
                  href="#tab-people"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-people"
                  aria-selected="false"
                >
                  People
                </a>
              </li>
            </ul>
          </div>
          <div className="border-bottom pt-10 pb-10"></div>
        </div>
      </section>

      <section className="section-box mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="content-single">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-about" role="tabpanel" aria-labelledby="tab-about">
                    <h4>Welcome to Horizon Marine Team</h4>
                    <p>
                      Horizon Marine Services is a marine recruitment agency focused on offshore and vessel-based placements
                      for skilled trade workers across Gulf, Indian Ocean, and South-East Asia projects.
                    </p>
                    <p>
                      This company profile mirrors your live hiring brand, trust badges, and public information shown to
                      candidates.
                    </p>

                    <h4>Company Profile Fields</h4>
                    <div className="table-responsive mb-25">
                      <table className="table table-bordered align-middle">
                        <thead>
                          <tr>
                            <th>Field</th>
                            <th>Label</th>
                            <th>Value</th>
                            <th>Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {companyProfileFields.map((item) => (
                            <tr key={item.field}>
                              <td>
                                <code>{item.field}</code>
                              </td>
                              <td>{item.label}</td>
                              <td>{item.value}</td>
                              <td>{item.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="form-group mb-20">
                      <label className="form-label">Company description</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        defaultValue="Horizon Marine Services is a leading marine recruitment agency specialising in offshore and vessel-based placements for skilled trade workers."
                      />
                      <p className="font-xs color-text-paragraph-2 mb-0">
                        Keep this summary concise and role-focused so candidates quickly understand your hiring needs.
                      </p>
                    </div>

                    <h4>Trust Badges</h4>
                    <ul>
                      {trustBadges.map((badge) => (
                        <li key={badge.badge}>
                          <strong>{badge.badge}</strong> - <span className={badge.statusClass}>{badge.status}</span> -{" "}
                          {badge.detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="tab-recruitments" role="tabpanel" aria-labelledby="tab-recruitments">
                    <h4>Recruitments</h4>
                    <p>Active hiring roles currently visible to candidates.</p>
                    <ul>
                      {recruitmentCards.map((job) => (
                        <li key={job.id}>
                          <strong>{job.title}</strong> - {job.location} - {job.type} - {job.salary} - {job.applicants}{" "}
                          applicants
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="tab-people" role="tabpanel" aria-labelledby="tab-people">
                    <h4>People</h4>
                    <p>Company users with access to job posting and application workflows.</p>
                    <ul>
                      {peopleCards.map((person) => (
                        <li key={person.id}>
                          <strong>{person.name}</strong> - {person.role} - {person.email}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="box-related-job content-page">
                <h5 className="mb-30">Latest Jobs</h5>
                <div className="box-list-jobs display-list">
                  {latestJobs.map((job) => (
                    <div className="col-xl-12 col-12" key={job.id}>
                      <div className="card-grid-2 hover-up">
                        <span className="flash"></span>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card-grid-2-image-left">
                              <div className="image-box">
                                <img src={job.logo} alt={job.company} />
                              </div>
                              <div className="right-info">
                                <a className="name-job" href="#">
                                  {job.company}
                                </a>
                                <span className="location-small">{job.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                            <div className="pl-15 mb-15 mt-30">
                              {job.tags.map((tag) => (
                                <a className="btn btn-grey-small mr-5" href="#" key={`${job.id}-${tag}`}>
                                  {tag}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="card-block-info">
                          <h4>
                            <Link href="/job-details">{job.title}</Link>
                          </h4>
                          <div className="mt-5">
                            <span className="card-briefcase">{job.type}</span>
                            <span className="card-time">{job.time}</span>
                          </div>
                          <p className="font-sm color-text-paragraph mt-10">
                            Recruiters can manage this posting from employer job list and applicants pages.
                          </p>
                          <div className="card-2-bottom mt-20">
                            <div className="row">
                              <div className="col-lg-7 col-7">
                                <span className="card-text-price">{job.salary}</span>
                                <span className="text-muted">/month</span>
                              </div>
                              <div className="col-lg-5 col-5 text-end">
                                <Link className="btn btn-apply-now" href="/employeer/applicants">
                                  View Applicants
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="paginations">
                  <ul className="pager">
                    <li>
                      <a className="pager-prev" href="#"></a>
                    </li>
                    <li>
                      <a className="pager-number active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a className="pager-number" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="pager-number" href="#">
                        3
                      </a>
                    </li>
                    <li>
                      <a className="pager-next" href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
              <div className="sidebar-border">
                <div className="sidebar-heading">
                  <div className="avatar-sidebar">
                    <div className="sidebar-info pl-0">
                      <span className="sidebar-company">Horizon Marine</span>
                      <span className="card-location">Mumbai, IN</span>
                    </div>
                  </div>
                </div>
                <div className="sidebar-list-job">
                  <div className="box-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120703.02652159374!2d72.8776559!3d19.0760907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f3f9f8f79%3A0x3f6453f9b6f5e231!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712832000000!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="sidebar-list-job">
                  <ul>
                    <li>
                      <div className="sidebar-icon-item">
                        <i className="fi-rr-briefcase"></i>
                      </div>
                      <div className="sidebar-text-info">
                        <span className="text-description">Company field</span>
                        <strong className="small-heading">Marine Recruitment</strong>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item">
                        <i className="fi-rr-marker"></i>
                      </div>
                      <div className="sidebar-text-info">
                        <span className="text-description">Location</span>
                        <strong className="small-heading">Mumbai, IN Remote Friendly</strong>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item">
                        <i className="fi-rr-dollar"></i>
                      </div>
                      <div className="sidebar-text-info">
                        <span className="text-description">Salary Band</span>
                        <strong className="small-heading">INR 35k - INR 75k</strong>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item">
                        <i className="fi-rr-clock"></i>
                      </div>
                      <div className="sidebar-text-info">
                        <span className="text-description">Member since</span>
                        <strong className="small-heading">Jul 2012</strong>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item">
                        <i className="fi-rr-time-fast"></i>
                      </div>
                      <div className="sidebar-text-info">
                        <span className="text-description">Last jobs posted</span>
                        <strong className="small-heading">2 days ago</strong>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-list-job">
                  <ul className="ul-disc">
                    <li>406, Maritime House, Ballard Estate, Mumbai, 400001, India</li>
                    <li>Phone: +91 22 4567 8900</li>
                    <li>Email: hiring@horizonmarine.in</li>
                  </ul>
                  <div className="mt-30">
                    <Link className="btn btn-send-message" href="/page-contact">
                      Send Message
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sidebar-border-bg bg-right">
                <span className="text-grey">WE ARE</span>
                <span className="text-hiring">HIRING</span>
                <p className="font-xxs color-text-paragraph mt-5">
                  Offshore and domestic trade jobs are open. View active roles in recruitments tab.
                </p>
                <div className="mt-15">
                  <Link className="btn btn-paragraph-2" href="/employeer/job-list">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-box mt-50 mb-20">
        <div className="container">
          <div className="box-newsletter">
            <div className="row">
              <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                <img src="/assets/imgs/template/newsletter-left.png" alt="newsletter left" />
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <h2 className="text-md-newsletter text-center">
                  New Things Will Always
                  <br />
                  Update Regularly
                </h2>
                <div className="box-form-newsletter mt-40">
                  <form className="form-newsletter" action="#">
                    <input className="input-newsletter" type="text" defaultValue="" placeholder="Enter your email here" />
                    <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                <img src="/assets/imgs/template/newsletter-right.png" alt="newsletter right" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerCompanyProfilePage;
