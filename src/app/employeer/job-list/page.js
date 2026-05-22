"use client";

import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/Toast";

const JOB_STATUS_TABS = [
  { label: "Active",   count: 4  },
  { label: "Paused",   count: 1  },
  { label: "Closed",   count: 8  },
  { label: "Archived", count: 12 },
];

const POSTING_TYPE_TABS = [
  { label: "All Types",  count: 5 },
  { label: "Normal",     count: 3 },
  { label: "Classified", count: 1 },
  { label: "Hot Vacancy",count: 2 },
];

const employerJobs = [
  {
    id: "job-welder-6g-mumbai",
    title: "Welder 6G - Mumbai",
    meta: "Onshore · INR 30K–45K · Deadline: 15 May 2026",
    postType: "Hot Vacancy",
    postTypeColor: { bg: "#fff1f1", border: "#fecaca", color: "#dc2626" },
    visibility: "15 days",
    priorityText: "Top results + Featured Jobs section",
    monetization: "Premium fee: INR 2,999 + GST",
    applicants: 12,
    lastApplicant: "Ramesh K. Sharma · 2h ago",
    topMatches: ["6G Certified", "Pipeline welding", "Immediate joiner"],
    status: "Active",
    statusBg: "#ecfdf3", statusColor: "#0BAB7C",
    actions: [
      { label: "Applicants", href: "/employeer/applicants", primary: true },
      { label: "Edit",       href: "/dashboard/post-job"                 },
      { label: "Pause"                                                    },
    ],
  },
  {
    id: "job-marine-engineer-gulf",
    title: "Marine Engineer - Gulf Region",
    meta: "Offshore · USD 3,000–4,500 · Deadline: 30 Apr 2026",
    postType: "Classified",
    postTypeColor: { bg: "#fffbeb", border: "#fcd34d", color: "#d97706" },
    visibility: "Standard listing",
    priorityText: "Classified listing with lower promotion cost",
    monetization: "Posting fee: INR 999 + GST",
    applicants: 7,
    lastApplicant: "Suresh Menon · 5h ago",
    topMatches: ["Passport valid", "Offshore exp", "Engine room support"],
    status: "Active",
    statusBg: "#ecfdf3", statusColor: "#0BAB7C",
    actions: [
      { label: "Applicants", href: "/employeer/applicants", primary: true },
      { label: "Edit",       href: "/dashboard/post-job"                 },
      { label: "Pause"                                                    },
    ],
  },
  {
    id: "job-cook-galley-hand",
    title: "Cook / Galley Hand",
    meta: "Offshore · AED 2,500–3,200 · Deadline: 20 Apr 2026",
    postType: "Normal Job",
    postTypeColor: { bg: "#f8fafc", border: "rgba(18,35,89,0.12)", color: "#66789c" },
    visibility: "Standard listing",
    priorityText: "Normal ranking in results",
    monetization: "Posting fee: Included in plan",
    applicants: 0,
    lastApplicant: "No recent applicants",
    topMatches: ["Hospitality exp", "Food safety", "Rotation shift ready"],
    status: "Paused",
    statusBg: "#fffbeb", statusColor: "#d97706",
    actions: [
      { label: "Resume"                                                    },
      { label: "Edit",       href: "/dashboard/post-job"                 },
    ],
  },
  {
    id: "job-rig-electrician-offshore",
    title: "Rig Electrician - Offshore Platform",
    meta: "Offshore · INR 55K–75K · Deadline: 25 May 2026",
    postType: "Hot Vacancy",
    postTypeColor: { bg: "#fff1f1", border: "#fecaca", color: "#dc2626" },
    visibility: "15 days",
    priorityText: "Top results + Featured Jobs section",
    monetization: "Premium fee: INR 2,999 + GST",
    applicants: 19,
    lastApplicant: "Arjun Verma · 30 mins ago",
    topMatches: ["Offshore certified", "STCW", "Relocation ready"],
    status: "Active",
    statusBg: "#ecfdf3", statusColor: "#0BAB7C",
    actions: [
      { label: "Applicants", href: "/employeer/applicants", primary: true },
      { label: "Edit",       href: "/dashboard/post-job"                 },
      { label: "Pause"                                                    },
    ],
  },
  {
    id: "job-fitter-shipyard",
    title: "Fitter / Fabricator - Shipyard",
    meta: "Onshore · INR 22K–32K · Deadline: 10 May 2026",
    postType: "Normal Job",
    postTypeColor: { bg: "#f8fafc", border: "rgba(18,35,89,0.12)", color: "#66789c" },
    visibility: "Standard listing",
    priorityText: "Normal ranking in results",
    monetization: "Posting fee: Included in plan",
    applicants: 5,
    lastApplicant: "Deepak Patel · 1 day ago",
    topMatches: ["Shipyard exp", "Blueprint reading", "Onshore ready"],
    status: "Active",
    statusBg: "#ecfdf3", statusColor: "#0BAB7C",
    actions: [
      { label: "Applicants", href: "/employeer/applicants", primary: true },
      { label: "Edit",       href: "/dashboard/post-job"                 },
      { label: "Pause"                                                    },
    ],
  },
];

/* ── reusable pill tag ── */
const Tag = ({ label }) => {
  const handleEnter = (e) => {
    e.currentTarget.style.background = "#1D4ED8";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 6px 14px rgba(29,78,216,0.18)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.background = "#EAF4FF";
    e.currentTarget.style.color = "#1D4ED8";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };
  return (
    <span
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: "inline-flex", alignItems: "center", padding: "5px 12px",
        borderRadius: 999, background: "#EAF4FF", border: "1px solid #B9DCFF",
        color: "#1D4ED8", fontSize: 11, fontWeight: 600, lineHeight: 1,
        cursor: "default", transition: "all 0.25s ease",
      }}
    >
      {label}
    </span>
  );
};

const EmployerJobListPage = () => {
  const showToast = useToast();
  const [activeStatus, setActiveStatus] = useState("Active");
  const [activeType, setActiveType]     = useState("All Types");

  const handleAction = (label, jobTitle) => {
    if (label === "Pause")  showToast(`"${jobTitle}" paused.`, "warning");
    else if (label === "Resume") showToast(`"${jobTitle}" resumed.`, "success");
  };

  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">

            {/* ── Header ── */}
            <div
              style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: 28,
                flexWrap: "wrap", gap: 14,
              }}
            >
              <div>
                <h3 style={{ color: "#122359", fontWeight: 800, marginBottom: 6 }}>
                  Jobs
                </h3>
                <span className="font-sm color-text-paragraph-2">
                  Track active, paused, and premium-priority job listings
                </span>
              </div>
              <Link
                className="btn btn-default"
                href="/dashboard/post-job"
                style={{
                  borderRadius: 12, fontWeight: 700,
                  boxShadow: "0 8px 20px rgba(255,163,0,0.18)",
                }}
                onClick={() => showToast("Opening post a job form...", "info")}
              >
                <i className="fi-rr-plus" style={{ marginRight: 7 }} />
                Post a Job
              </Link>
            </div>

            {/* ── Status filter tabs (matches applicants page style) ── */}
            <div className="candidate-status-filter mb-10">
              {JOB_STATUS_TABS.map((tab) => (
                <button
                  key={tab.label}
                  className={`candidate-status-filter-btn${activeStatus === tab.label ? " active" : ""}`}
                  type="button"
                  onClick={() => {
                    setActiveStatus(tab.label);
                    showToast(`Showing: ${tab.label} jobs`, "info");
                  }}
                >
                  <span>{tab.label}</span>
                  <span className="candidate-status-filter-count">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* ── Type sub-filter ── */}
            <div className="candidate-status-filter mb-30">
              {POSTING_TYPE_TABS.map((tab) => (
                <button
                  key={tab.label}
                  className={`candidate-status-filter-btn${activeType === tab.label ? " active" : ""}`}
                  type="button"
                  onClick={() => setActiveType(tab.label)}
                  style={{ fontSize: 11, padding: "6px 10px" }}
                >
                  <span>{tab.label}</span>
                  <span className="candidate-status-filter-count">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* ── Job Cards ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {employerJobs.map((job) => (
                <div
                  key={job.id}
                  className="subuser-hover-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: 24,
                    boxShadow: "0 4px 14px rgba(18,35,89,0.04)",
                    padding: 0,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "24px 28px" }}>
                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>

                      {/* ── Left: job icon + info ── */}
                      <div style={{ display: "flex", gap: 18, flex: 1, minWidth: 280 }}>
                        {/* Job icon */}
                        <div style={{
                          width: 54, height: 54, borderRadius: 16, flexShrink: 0,
                          background: "linear-gradient(135deg,#122359,#1e3a8a)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#ffa300", fontSize: 22,
                        }}>
                          <i className="fi-rr-briefcase" />
                        </div>

                        <div style={{ flex: 1 }}>
                          {/* Title row */}
                          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 5 }}>
                            <h5
                              style={{ margin: 0, color: "#122359", fontWeight: 800, fontSize: 17, cursor: "pointer" }}
                              onClick={() => showToast(`Viewing: ${job.title}`, "info")}
                            >
                              {job.title}
                            </h5>
                            {/* Post type badge */}
                            <span style={{
                              display: "inline-flex", alignItems: "center",
                              padding: "4px 10px", borderRadius: 999,
                              background: job.postTypeColor.bg,
                              border: `1px solid ${job.postTypeColor.border}`,
                              color: job.postTypeColor.color,
                              fontSize: 11, fontWeight: 700,
                            }}>
                              {job.postType}
                            </span>
                            {/* Status badge */}
                            <span style={{
                              display: "inline-flex", alignItems: "center",
                              padding: "4px 10px", borderRadius: 999,
                              background: job.statusBg, color: job.statusColor,
                              fontSize: 11, fontWeight: 700,
                            }}>
                              {job.status}
                            </span>
                          </div>

                          {/* Meta */}
                          <p style={{ margin: "0 0 12px", color: "#66789c", fontSize: 13 }}>
                            {job.meta}
                          </p>

                          {/* Info row */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", marginBottom: 14 }}>
                            <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 5 }}>
                              <i className="fi-rr-eye" style={{ color: "#ffa300" }} />
                              {job.visibility}
                            </span>
                            <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 5 }}>
                              <i className="fi-rr-chart-histogram" style={{ color: "#ffa300" }} />
                              {job.priorityText}
                            </span>
                            <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 5 }}>
                              <i className="fi-rr-receipt" style={{ color: "#ffa300" }} />
                              {job.monetization}
                            </span>
                          </div>

                          {/* Last applicant */}
                          <div style={{ marginBottom: 14, fontSize: 12, color: "#66789c", display: "flex", alignItems: "center", gap: 6 }}>
                            <i className="fi-rr-clock" style={{ color: "#ffa300", fontSize: 11 }} />
                            Last applicant: <strong style={{ color: "#122359" }}>{job.lastApplicant}</strong>
                          </div>

                          {/* Skill tags */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {job.topMatches.map((tag) => (
                              <Tag key={`${job.id}-${tag}`} label={tag} />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* ── Right: applicant count + actions ── */}
                      <div style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "flex-end", justifyContent: "space-between",
                        minWidth: 160, gap: 16,
                      }}>
                        {/* Applicant count pill */}
                        <div style={{
                          background: job.applicants > 0 ? "#EAF4FF" : "#f8fafc",
                          border: `1px solid ${job.applicants > 0 ? "#B9DCFF" : "rgba(18,35,89,0.08)"}`,
                          borderRadius: 14, padding: "10px 16px", textAlign: "center", minWidth: 110,
                        }}>
                          <div style={{ fontSize: 26, fontWeight: 800, color: job.applicants > 0 ? "#1D4ED8" : "#94a3b8", lineHeight: 1 }}>
                            {job.applicants}
                          </div>
                          <div style={{ fontSize: 11, color: "#66789c", marginTop: 3, fontWeight: 600 }}>
                            Applicant{job.applicants !== 1 ? "s" : ""}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                          {job.actions.map((action) =>
                            action.href ? (
                              <Link
                                key={`${job.id}-${action.label}`}
                                href={action.href}
                                className={action.primary ? "btn btn-default btn-sm" : "btn btn-border btn-sm"}
                                style={{
                                  borderRadius: 10, fontWeight: 700, textAlign: "center",
                                  ...(action.primary ? { boxShadow: "0 6px 16px rgba(255,163,0,0.2)" } : {}),
                                }}
                                onClick={() => showToast(`${action.label} — ${job.title}`, "info")}
                              >
                                {action.label === "Applicants" && (
                                  <i className="fi-rr-users" style={{ marginRight: 5 }} />
                                )}
                                {action.label === "Edit" && (
                                  <i className="fi-rr-edit" style={{ marginRight: 5 }} />
                                )}
                                {action.label}
                              </Link>
                            ) : (
                              <button
                                key={`${job.id}-${action.label}`}
                                className="btn btn-border btn-sm"
                                type="button"
                                style={{ borderRadius: 10, fontWeight: 700 }}
                                onClick={() => handleAction(action.label, job.title)}
                              >
                                {action.label === "Pause"  && <i className="fi-rr-pause"  style={{ marginRight: 5 }} />}
                                {action.label === "Resume" && <i className="fi-rr-play"   style={{ marginRight: 5 }} />}
                                {action.label}
                              </button>
                            )
                          )}
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