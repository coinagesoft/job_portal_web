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
    statusClass: "badge bg-primary",
    deactivate: "-"
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
    statusClass: "badge bg-success",
    deactivate: "Deactivate"
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
    statusClass: "badge bg-success",
    deactivate: "Deactivate"
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
    statusClass: "badge bg-warning text-dark",
    deactivate: "Deactivate"
  }
];

export const metadata = {
  title: "Employer Sub-User Management - Job Portal",
  description: "Invite and manage employer sub-users."
};

const EmployerSubUserPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Sub-User Management</h3>
                  <span className="font-sm color-text-paragraph-2">
                    Shared wallet permissions with role-based access controls.
                  </span>
                </div>
                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  <button className="btn btn-default btn-sm" type="button">
                    + Invite sub-user
                  </button>
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up mt-20">
              <div className="card-block-info pt-20">
                <p className="font-sm color-text-paragraph mb-10">
                  Sub-users share the same credit wallet. Only the account owner can buy credits or invite users.
                </p>
                <p className="font-xs color-text-paragraph-2 mb-0">
                  Recruiter role cannot purchase credits. Deactivate immediately revokes login access.
                </p>
              </div>
            </div>

            <div className="card-grid-2 hover-up mt-20">
              <div className="card-block-info pt-20">
                <div className="table-responsive">
                  <table className="table table-striped align-middle">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Can Unlock</th>
                        <th>Search</th>
                        <th>Post Job</th>
                        <th>Manage App</th>
                        <th>Status</th>
                        <th>Deactivate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subUsers.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <strong>{user.name}</strong>
                          </td>
                          <td>{user.email}</td>
                          <td>{user.mobile}</td>
                          <td>{user.role}</td>
                          <td>{user.canUnlock}</td>
                          <td>{user.search}</td>
                          <td>{user.postJob}</td>
                          <td>{user.manageApp}</td>
                          <td>
                            <span className={user.statusClass}>{user.status}</span>
                          </td>
                          <td>
                            {user.deactivate === "-" ? (
                              <span className="font-xs color-text-paragraph-2">-</span>
                            ) : (
                              <button className="btn btn-border btn-sm" type="button">
                                {user.deactivate}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card-grid-2 hover-up h-100">
                  <div className="card-block-info pt-20">
                    <h5 className="mb-15">Invite Sub-User</h5>

                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input className="form-control" type="text" placeholder="Full name" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-control" type="email" placeholder="Corporate email" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Mobile</label>
                      <input className="form-control" type="text" placeholder="+91 XXXXX XXXXX" />
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
                      <label className="form-label d-block mb-10">Permissions</label>
                      <div className="d-flex flex-wrap gap-3">
                        <label className="cb-container mr-20">
                          <input type="checkbox" />
                          <span className="text-small">Can unlock profiles</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="cb-container mr-20">
                          <input type="checkbox" defaultChecked />
                          <span className="text-small">Search candidates</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="cb-container mr-20">
                          <input type="checkbox" />
                          <span className="text-small">Post jobs</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="cb-container mr-20">
                          <input type="checkbox" />
                          <span className="text-small">Manage applications</span>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>

                    <button className="btn btn-default btn-sm" type="button">
                      Send invite
                    </button>
                    <p className="font-xs color-text-paragraph-2 mt-10 mb-0">
                      Invite links expire automatically in 72 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 mt-md-20 mt-sm-20">
                <div className="card-grid-2 hover-up h-100">
                  <div className="card-block-info pt-20">
                    <h5 className="mb-15">Permission Matrix</h5>
                    <ul>
                      <li>
                        <strong>Account owner:</strong> can search, post jobs, manage applications, unlock profiles, and buy credits.
                      </li>
                      <li>
                        <strong>HR Manager:</strong> can search, post jobs, manage applications, and unlock profiles.
                      </li>
                      <li>
                        <strong>Recruiter:</strong> can search, manage applications, and unlock profiles.
                      </li>
                      <li>
                        <strong>Viewer:</strong> search only.
                      </li>
                    </ul>
                    <div className="alert alert-warning mt-15 mb-0" role="alert">
                      Deactivate removes access instantly and keeps audit logs intact.
                    </div>
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
