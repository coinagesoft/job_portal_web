const verificationBadges = [
  {
    badge: "GST Verified",
    status: "Approved",
    statusClass: "badge bg-success",
    icon: "OK",
    detail: "GST registration confirmed by admin.",
    field: "badge_gst_verified",
  },
  {
    badge: "POE Licensed",
    status: "Approved",
    statusClass: "badge bg-success",
    icon: "OK",
    detail: "Placement Organisation of Employers license verified.",
    field: "badge_poe_licensed",
  },
  {
    badge: "PAN Verified",
    status: "Pending",
    statusClass: "badge bg-warning text-dark",
    icon: "INR",
    detail: "Document submitted and currently under admin review.",
    field: "badge_pan_verified",
  },
  {
    badge: "ISO Certified",
    status: "Not submitted",
    statusClass: "badge bg-secondary",
    icon: "NEW",
    detail: "Upload your ISO certificate to unlock this badge.",
    field: "badge_iso_certified",
  },
  {
    badge: "Background Check",
    status: "Not submitted",
    statusClass: "badge bg-secondary",
    icon: "NEW",
    detail: "Third-party background check required.",
    field: "badge_bg_check",
  },
  {
    badge: "Premium Member",
    status: "Locked",
    statusClass: "badge bg-dark",
    icon: "LOCK",
    detail: "Requires at least 3 active badges and 6 months on platform.",
    field: "badge_premium",
  },
];

const verificationDocuments = [
  {
    name: "GST Certificate",
    uploaded: "12 Feb 2026",
    status: "Verified",
    statusClass: "badge bg-success",
  },
  {
    name: "POE Licence",
    uploaded: "12 Feb 2026",
    status: "Verified",
    statusClass: "badge bg-success",
  },
  {
    name: "PAN Card",
    uploaded: "01 Apr 2026",
    status: "Under review",
    statusClass: "badge bg-warning text-dark",
  },
];

export const metadata = {
  title: "Verification & Badges - Job Portal",
  description: "Manage verification documents and trust badges.",
};

const EmployerVerificationPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            <div className="box-filters-job mb-30">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Verification &amp; Badges</h3>
                  <span className="font-sm color-text-paragraph-2">
                    Build trust with candidates - verified employers get more applicants.
                  </span>
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up mb-30">
              <div className="card-block-info pt-20 pb-20">
                <h5 className="mb-20">Trust Badges</h5>
                <div className="row">
                  {verificationBadges.map((item) => (
                    <div className="col-lg-4 col-md-6 col-12 mb-20" key={item.field}>
                      <div
                        className="card-grid-2"
                        style={{
                          borderRadius: "10px",
                          padding: "16px",
                          border: "1px solid #e0e6f0",
                        }}
                      >
                        <div className="d-flex align-items-center gap-10 mb-10">
                          <span
                            style={{
                              fontSize: "11px",
                              width: "36px",
                              height: "36px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "#f0f6ff",
                              borderRadius: "8px",
                              fontWeight: 700,
                              color: "#185FA5",
                            }}
                          >
                            {item.icon}
                          </span>
                          <div>
                            <p className="font-sm fw-600 mb-0">{item.badge}</p>
                            <span className={item.statusClass} style={{ fontSize: "10px" }}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-0">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up mb-30">
              <div className="card-block-info pt-20 pb-20">
                <div className="row align-items-center mb-15">
                  <div className="col-8">
                    <h5 className="mb-0">Uploaded Documents</h5>
                  </div>
                  <div className="col-4 text-end">
                    <button className="btn btn-default btn-sm hover-up" type="button">
                      + Upload Document
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Document</th>
                        <th>Uploaded</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {verificationDocuments.map((doc) => (
                        <tr key={doc.name}>
                          <td className="font-sm fw-500">{doc.name}</td>
                          <td className="font-xs color-text-paragraph-2">{doc.uploaded}</td>
                          <td>
                            <span className={doc.statusClass}>{doc.status}</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="btn btn-grey-small btn-sm"
                              type="button"
                              style={{ padding: "4px 10px", fontSize: "11px" }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up">
              <div className="card-block-info pt-20 pb-20">
                <h5 className="mb-15">Upload New Document</h5>
                <div
                  style={{
                    border: "2px dashed #b5d4f4",
                    borderRadius: "10px",
                    padding: "40px",
                    textAlign: "center",
                    background: "#f7fbff",
                    cursor: "pointer",
                  }}
                >
                  <p className="font-sm color-text-paragraph-2 mb-5">
                    Drag and drop your document here
                  </p>
                  <p className="font-xs color-text-paragraph-2 mb-15">
                    Accepted: PDF, JPG, PNG - Max 5 MB
                  </p>
                  <button className="btn btn-border btn-sm" type="button">
                    Browse File
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerVerificationPage;

