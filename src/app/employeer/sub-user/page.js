"use client";

const subUsers = [
  {
    id: "su-001",
    name: "Arjun Mehta",
    email: "arjun.mehta@horizonmarine.in",
    mobile: "+91 98765 43210",
    role: "Account owner",
    canUnlock: "Yes",
    search: "Yes",
    postJob: "Yes",
    manageApp: "Yes",
    status: "Owner",
    deactivate: "-",
  },
  {
    id: "su-002",
    name: "Sneha Raut",
    email: "sneha.raut@horizonmarine.in",
    mobile: "+91 90011 22334",
    role: "HR Manager",
    canUnlock: "Yes",
    search: "Yes",
    postJob: "Yes",
    manageApp: "Yes",
    status: "Active",
    deactivate: "Deactivate",
  },
  {
    id: "su-003",
    name: "Rahul Desai",
    email: "rahul.desai@horizonmarine.in",
    mobile: "+91 98876 55443",
    role: "Recruiter",
    canUnlock: "Yes",
    search: "Yes",
    postJob: "No",
    manageApp: "Yes",
    status: "Active",
    deactivate: "Deactivate",
  },
  {
    id: "su-004",
    name: "Prachi Joshi",
    email: "prachi.joshi@horizonmarine.in",
    mobile: "+91 97765 44332",
    role: "Viewer",
    canUnlock: "No",
    search: "Yes",
    postJob: "No",
    manageApp: "No",
    status: "Invite pending",
    deactivate: "Deactivate",
  },
];
const JOB_TAG_STYLE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 12px",
  borderRadius: 999,
  background: "#EAF4FF",
  border: "1px solid #B9DCFF",
  color: "#1D4ED8",
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: "nowrap",
  lineHeight: 1,
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const handleTagHoverEnter = (event) => {
  event.currentTarget.style.background = "#1D4ED8";
  event.currentTarget.style.color = "#ffffff";
  event.currentTarget.style.transform = "translateY(-1px)";
};

const handleTagHoverLeave = (event) => {
  event.currentTarget.style.background = "#EAF4FF";
  event.currentTarget.style.color = "#1D4ED8";
  event.currentTarget.style.transform = "translateY(0px)";
};

const getStatusStyle = (status) => {
  if (status === "Owner") {
    return {
      background: "#eef4ff",
      color: "#2563eb",
    };
  }

  if (status === "Active") {
    return {
      background: "#ecfdf3",
      color: "#0BAB7C",
    };
  }

  return {
    background: "#fff7ea",
    color: "#ff9900",
  };
};

const EmployerSubUserPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#122359",
                    fontWeight: 800,
                    marginBottom: "6px",
                  }}
                >
                  Sub-User Management
                </h3>

                <span className="font-sm color-text-paragraph-2">
                  Shared wallet permissions with role-based access controls.
                </span>
              </div>

              <button
                className="btn btn-default btn-sm"
                style={{
                  borderRadius: "12px",
                  padding: "10px 18px",
                  fontWeight: 700,
                  boxShadow: "0 8px 20px rgba(255,163,0,0.18)",
                }}
                type="button"
              >
                <i
                  className="fi fi-rr-user-add"
                  style={{ marginRight: "6px" }}
                />
                Invite sub-user
              </button>
            </div>

            {/* Info Card */}
            <div
              className="subuser-hover-card"
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                border: "1px solid rgba(18,35,89,0.06)",
                boxShadow: "0 4px 14px rgba(18,35,89,0.04)",
                padding: "24px",
                marginBottom: "24px",
                transition: "all .35s ease",
              }}
            >
              <p
                style={{
                  color: "#122359",
                  marginBottom: "10px",
                  fontWeight: 600,
                }}
              >
                Sub-users share the same credit wallet. Only the account owner
                can buy credits or invite users.
              </p>

              <p
                style={{
                  marginBottom: 0,
                  color: "#66789c",
                  fontSize: "13px",
                }}
              >
                Recruiter role cannot purchase credits. Deactivate immediately
                revokes login access.
              </p>
            </div>

            {/* User Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginBottom: "30px",
              }}
            >
              {subUsers.map((user) => (
                <div
                  key={user.id}
                  className="subuser-hover-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    border: "1px solid rgba(18,35,89,0.08)",
                    boxShadow: "0 4px 14px rgba(18,35,89,0.04)",
                    padding: "24px",
                    transition: "all .35s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Left */}
                    <div
                      style={{
                        display: "flex",
                        gap: "18px",
                        flex: 1,
                        minWidth: "280px",
                      }}
                    >
                      <div
                        style={{
                          width: "58px",
                          height: "58px",
                          borderRadius: "18px",
                          background: "#fff7ea",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ff9900",
                          fontWeight: 800,
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexWrap: "wrap",
                            marginBottom: "6px",
                          }}
                        >
                          <h5
                            style={{
                              margin: 0,
                              color: "#122359",
                              fontWeight: 700,
                            }}
                          >
                            {user.name}
                          </h5>

                          <span
                            style={JOB_TAG_STYLE}
                            onMouseEnter={handleTagHoverEnter}
                            onMouseLeave={handleTagHoverLeave}
                          >
                            {user.status}
                          </span>
                        </div>

                        <div
                          style={{
                            color: "#66789c",
                            fontSize: "14px",
                            marginBottom: "8px",
                          }}
                        >
                          {user.role}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: "18px",
                            flexWrap: "wrap",
                            fontSize: "13px",
                            color: "#66789c",
                          }}
                        >
                          <span>
                            <i
                              className="fi fi-rr-envelope"
                              style={{
                                marginRight: "6px",
                              }}
                            />
                            {user.email}
                          </span>

                          <span>
                            <i
                              className="fi fi-rr-phone-call"
                              style={{
                                marginRight: "6px",
                              }}
                            />
                            {user.mobile}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div
                      style={{
                        minWidth: "260px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          justifyContent: "flex-end",
                          marginBottom: "16px",
                        }}
                      >
                        {[
                          {
                            label: "Unlock",
                            value: user.canUnlock,
                          },
                          {
                            label: "Search",
                            value: user.search,
                          },
                          {
                            label: "Post Job",
                            value: user.postJob,
                          },
                          {
                            label: "Manage",
                            value: user.manageApp,
                          },
                        ].map((item) => (
                          <span
                            key={item.label}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              padding: "7px 12px",
                              borderRadius: "999px",
                              background:
                                item.value === "Yes" ? "#ecfdf3" : "#f4f5f7",
                              color:
                                item.value === "Yes" ? "#0BAB7C" : "#66789c",
                              fontSize: "11px",
                              fontWeight: 700,
                            }}
                          >
                            {item.label}: {item.value}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "flex-end",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          className="btn btn-border btn-sm"
                          style={{
                            borderRadius: "10px",
                            fontWeight: 700,
                          }}
                        >
                          <i
                            className="fi fi-rr-edit"
                            style={{
                              marginRight: "5px",
                            }}
                          />
                          Edit
                        </button>

                        {user.deactivate !== "-" && (
                          <button
                            className="btn btn-grey-small"
                            style={{
                              borderRadius: "10px",
                              fontWeight: 700,
                            }}
                          >
                            <i
                              className="fi fi-rr-cross-circle"
                              style={{
                                marginRight: "5px",
                              }}
                            />
                            Deactivate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Cards */}
            <div className="row">
              {/* Invite */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="subuser-hover-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    border: "1px solid rgba(18,35,89,0.08)",
                    boxShadow: "0 4px 14px rgba(18,35,89,0.04)",
                    padding: "28px",
                    transition: "all .35s ease",
                    height: "100%",
                  }}
                >
                  <h5
                    style={{
                      color: "#122359",
                      fontWeight: 800,
                      marginBottom: "20px",
                    }}
                  >
                    Invite Sub-User
                  </h5>

                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Corporate email"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mobile</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Role</label>

                    <select className="form-control form-select">
                      <option>Recruiter</option>
                      <option>HR Manager</option>
                      <option>Viewer</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label d-block mb-12">
                      Permissions
                    </label>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                      }}
                    >
                      {[
                        "Can unlock profiles",
                        "Search candidates",
                        "Post jobs",
                        "Manage applications",
                      ].map((permission, index) => (
                        <label
                          key={permission}
                          style={{
                            position: "relative",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            defaultChecked={index === 1}
                            className="permission-checkbox"
                          />

                          <span
                            className="permission-tag"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "8px 14px",
                              borderRadius: "999px",
                              background: "#EAF4FF",
                              border: "1px solid #B9DCFF",
                              color: "#1D4ED8",
                              fontSize: "12px",
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                              lineHeight: 1,
                              transition: "all 0.25s ease",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          >
                            <i
                              className="fi fi-rr-check"
                              style={{
                                fontSize: "10px",
                                marginRight: "6px",
                              }}
                            />
                            {permission}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    className="btn btn-default btn-sm"
                    style={{
                      borderRadius: "12px",
                      padding: "10px 18px",
                      fontWeight: 700,
                      boxShadow: "0 8px 20px rgba(255,163,0,0.18)",
                    }}
                    type="button"
                  >
                    Send invite
                  </button>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#66789c",
                      marginTop: "12px",
                      marginBottom: 0,
                    }}
                  >
                    Invite links expire automatically in 72 hours.
                  </p>
                </div>
              </div>

              {/* Matrix */}
              <div className="col-lg-6 col-md-12 col-sm-12 mt-md-20 mt-sm-20">
                <div
                  className="subuser-hover-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    border: "1px solid rgba(18,35,89,0.08)",
                    boxShadow: "0 4px 14px rgba(18,35,89,0.04)",
                    padding: "28px",
                    transition: "all .35s ease",
                    height: "100%",
                  }}
                >
                  <h5
                    style={{
                      color: "#122359",
                      fontWeight: 800,
                      marginBottom: "22px",
                    }}
                  >
                    Permission Matrix
                  </h5>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {[
                      {
                        role: "Account owner",
                        desc: "Search, post jobs, manage applications, unlock profiles and buy credits.",
                      },
                      {
                        role: "HR Manager",
                        desc: "Search, post jobs, manage applications and unlock profiles.",
                      },
                      {
                        role: "Recruiter",
                        desc: "Search, manage applications and unlock profiles.",
                      },
                      {
                        role: "Viewer",
                        desc: "Search only.",
                      },
                    ].map((item) => (
                      <div
                        key={item.role}
                        className="permission-matrix-item"
                        style={{
                          padding: "16px",
                          borderRadius: "16px",
                          background: "#f8fafc",
                        }}
                      >
                        <div
                          style={{
                            color: "#122359",
                            fontWeight: 700,
                            marginBottom: "5px",
                          }}
                        >
                          {item.role}
                        </div>

                        <div
                          style={{
                            color: "#66789c",
                            fontSize: "13px",
                            lineHeight: 1.7,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="subuser-alert"
                    style={{
                      marginTop: "20px",
                      padding: "16px",
                      borderRadius: "16px",
                      background: "#fff7ea",
                      border: "1px solid rgba(255,163,0,0.18)",
                      color: "#ff9900",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    <i
                      className="fi fi-rr-info"
                      style={{ marginRight: "6px" }}
                    />
                    Deactivate removes access instantly and keeps audit logs
                    intact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerSubUserPage;
