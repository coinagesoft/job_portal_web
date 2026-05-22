"use client"; 

// import Link from "next/link";
const verificationBadges = [
  {
    badge: "GST Verified",
    status: "Approved",
    icon: "fi fi-rr-check",
    detail: "GST registration confirmed by admin.",
    field: "badge_gst_verified",
  },
  {
    badge: "POE Licensed",
    status: "Approved",
    icon: "fi-rr-shield-check",
    detail:
      "Placement Organisation of Employers license verified.",
    field: "badge_poe_licensed",
  },
  {
    badge: "PAN Verified",
    status: "Pending",
    icon: "fi-rr-time-check",
    detail:
      "Document submitted and currently under admin review.",
    field: "badge_pan_verified",
  },
  {
    badge: "ISO Certified",
    status: "Not submitted",
    icon: "fi-rr-document",
    detail:
      "Upload your ISO certificate to unlock this badge.",
    field: "badge_iso_certified",
  },
  {
    badge: "Background Check",
    status: "Not submitted",
    icon: "fi-rr-search-alt",
    detail:
      "Third-party background check required.",
    field: "badge_bg_check",
  },
  {
    badge: "Premium Member",
    status: "Locked",
    icon: "fi-rr-lock",
    detail:
      "Requires at least 3 active badges and 6 months on platform.",
    field: "badge_premium",
  },
];

const verificationDocuments = [
  {
    name: "GST Certificate",
    uploaded: "12 Feb 2026",
    status: "Verified",
  },
  {
    name: "POE Licence",
    uploaded: "12 Feb 2026",
    status: "Verified",
  },
  {
    name: "PAN Card",
    uploaded: "01 Apr 2026",
    status: "Under review",
  },
];

// export const metadata = {
//   title: "Verification & Badges - Job Portal",
//   description:
//     "Manage verification documents and trust badges.",
// };

const EmployerVerificationPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            {/* Header */}
            <div className="mb-30">
              <h3
                style={{
                  color: "#122359",
                  fontWeight: 800,
                  marginBottom: "6px",
                }}
              >
                Verification & Badges
              </h3>

              <span className="font-sm color-text-paragraph-2">
                Build trust with candidates — verified
                employers get more applicants.
              </span>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                border:
                  "1px solid rgba(18,35,89,0.06)",
                boxShadow:
                  "0 4px 14px rgba(18,35,89,0.04)",
                padding: "28px",
                marginBottom: "30px",
              }}
            >
              <h5
                style={{
                  color: "#122359",
                  fontWeight: 800,
                  marginBottom: "24px",
                }}
              >
                Trust Badges
              </h5>

              <div className="row">
                {verificationBadges.map((item) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mb-20"
                    key={item.field}
                  >
                    <div
                      style={{
                        borderRadius: "22px",
                        padding: "22px",
                        border:
                          "1px solid rgba(18,35,89,0.08)",
                        background: "#ffffff",
                        transition: "all .35s ease",
                        boxShadow:
                          "0 4px 14px rgba(18,35,89,0.04)",
                        height: "100%",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-8px)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,153,0,0.32)";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 1px rgba(255,153,0,0.18), 0 20px 40px rgba(255,153,0,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0px)";
                        e.currentTarget.style.borderColor =
                          "rgba(18,35,89,0.08)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 14px rgba(18,35,89,0.04)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "14px",
                          marginBottom: "16px",
                        }}
                      >
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "16px",
                            background: "#fff7ea",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ff9900",
                            fontSize: "20px",
                            flexShrink: 0,
                          }}
                        >
                          <i className={item.icon} />
                        </div>

                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontWeight: 700,
                              color: "#122359",
                              marginBottom: "8px",
                              fontSize: "16px",
                            }}
                          >
                            {item.badge}
                          </div>

                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              padding: "6px 12px",
                              borderRadius: "999px",
                              background:
                                item.status === "Approved"
                                  ? "#ecfdf3"
                                  : item.status === "Pending"
                                    ? "#fff7ea"
                                    : "#f4f5f7",
                              color:
                                item.status === "Approved"
                                  ? "#0BAB7C"
                                  : item.status === "Pending"
                                    ? "#ff9900"
                                    : "#66789c",
                              fontSize: "11px",
                              fontWeight: 700,
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <p
                        style={{
                          margin: 0,
                          color: "#66789c",
                          fontSize: "13px",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Uploaded Documents */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                border:
                  "1px solid rgba(18,35,89,0.06)",
                boxShadow:
                  "0 4px 14px rgba(18,35,89,0.04)",
                padding: "28px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <h5
                  style={{
                    margin: 0,
                    color: "#122359",
                    fontWeight: 800,
                  }}
                >
                  Uploaded Documents
                </h5>

                <button
                  className="btn btn-default btn-sm"
                  style={{
                    borderRadius: "12px",
                    padding: "10px 18px",
                    fontWeight: 700,
                    boxShadow:
                      "0 8px 20px rgba(255,163,0,0.18)",
                  }}
                  type="button"
                >
                  <i
                    className="fi fi-rr-upload"
                    style={{ marginRight: "6px" }}
                  />
                  Upload Document
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {verificationDocuments.map((doc) => (
                  <div
                    key={doc.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "space-between",
                      flexWrap: "wrap",
                      gap: "14px",
                      padding: "18px 22px",
                      borderRadius: "18px",
                      border:
                        "1px solid rgba(18,35,89,0.08)",
                      background: "#ffffff",
                      transition: "all .35s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-4px)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,153,0,0.32)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 28px rgba(255,163,0,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0px)";
                      e.currentTarget.style.borderColor =
                        "rgba(18,35,89,0.08)";
                      e.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#122359",
                          marginBottom: "4px",
                        }}
                      >
                        {doc.name}
                      </div>

                      <div
                        style={{
                          fontSize: "13px",
                          color: "#66789c",
                        }}
                      >
                        Uploaded: {doc.uploaded}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          background:
                            doc.status === "Verified"
                              ? "#ecfdf3"
                              : "#fff7ea",
                          color:
                            doc.status === "Verified"
                              ? "#0BAB7C"
                              : "#ff9900",
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        {doc.status}
                      </span>

                      <button
                        className="btn btn-border btn-sm"
                        style={{
                          borderRadius: "10px",
                          fontWeight: 700,
                        }}
                        type="button"
                      >
                        <i
                          className="fi fi-rr-eye"
                          style={{
                            marginRight: "5px",
                          }}
                        />
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Area */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                border:
                  "1px solid rgba(18,35,89,0.06)",
                boxShadow:
                  "0 4px 14px rgba(18,35,89,0.04)",
                padding: "28px",
              }}
            >
              <h5
                style={{
                  color: "#122359",
                  fontWeight: 800,
                  marginBottom: "22px",
                }}
              >
                Upload New Document
              </h5>

              <div
                style={{
                  border:
                    "2px dashed rgba(255,163,0,0.35)",
                  borderRadius: "24px",
                  padding: "50px 30px",
                  textAlign: "center",
                  background: "#fffdf9",
                  cursor: "pointer",
                  transition: "all .35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "#ffa300";
                  e.currentTarget.style.background =
                    "#fff7ea";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,163,0,0.35)";
                  e.currentTarget.style.background =
                    "#fffdf9";
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "22px",
                    background: "#fff7ea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    color: "#ff9900",
                    fontSize: "28px",
                  }}
                >
                  <i className="fi fi-rr-cloud-upload" />
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#122359",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Drag & drop documents here
                </p>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#66789c",
                    marginBottom: "20px",
                  }}
                >
                  Accepted: PDF, JPG, PNG — Max 5 MB
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background: "#fff7ea",
                    border: "1px solid rgba(255,163,0,0.28)",
                    color: "#8a5a00",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginBottom: "18px",
                  }}
                >
                  <i className="fi fi-rr-lock" />
                  Documents uploaded here are private and are not shared with candidates.
                </div>

                <button
                  className="btn btn-border btn-sm"
                  style={{
                    borderRadius: "12px",
                    padding: "10px 18px",
                    fontWeight: 700,
                  }}
                  type="button"
                >
                  Browse Files
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerVerificationPage;
