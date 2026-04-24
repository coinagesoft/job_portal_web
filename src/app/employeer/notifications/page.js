"use client";

import { useState } from "react";

const allNotifications = [
  {
    id: "n1",
    title: "New Applicant",
    message: "Ramesh K. Sharma applied for Welder 6G - Mumbai",
    time: "2 hours ago",
    read: false,
    type: "applicant",
  },
  {
    id: "n2",
    title: "New Applicant",
    message: "Priya Singh applied for Marine Engineer - Gulf Region",
    time: "5 hours ago",
    read: false,
    type: "applicant",
  },
  {
    id: "n3",
    title: "Credit Alert",
    message: "Your credit pack expires in 14 days. Renew to avoid interruption.",
    time: "1 day ago",
    read: false,
    type: "credit",
  },
  {
    id: "n4",
    title: "Verification Update",
    message: "Your PAN Card document is under admin review.",
    time: "2 days ago",
    read: true,
    type: "verification",
  },
  {
    id: "n5",
    title: "Job Posted",
    message: "Your job 'Cook / Galley Hand' has been published successfully.",
    time: "3 days ago",
    read: true,
    type: "job",
  },
  {
    id: "n6",
    title: "Invoice Generated",
    message: "Invoice #INV-2026-003 for 3-Month Growth Pack is ready.",
    time: "5 days ago",
    read: true,
    type: "billing",
  },
  {
    id: "n7",
    title: "New Applicant",
    message: "Mohammed Asif applied for Cook / Galley Hand",
    time: "6 days ago",
    read: true,
    type: "applicant",
  },
  {
    id: "n8",
    title: "System Message",
    message: "Platform maintenance scheduled for 22 Apr 2026, 2–4 AM IST.",
    time: "1 week ago",
    read: true,
    type: "system",
  },
];

const typeColors = {
  applicant: "#185FA5",
  credit: "#BA7517",
  verification: "#0F6E56",
  job: "#3B6D11",
  billing: "#5E3B8E",
  system: "#888780",
};

const EmployerNotificationsPage = () => {
  const [notifications, setNotifications] = useState(allNotifications);
  const [filter, setFilter] = useState("all");

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const filtered =
    filter === "unread" ? notifications.filter((n) => !n.read) : notifications;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            {/* Header */}
            <div className="box-filters-job mb-30">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Notifications</h3>
                  <span className="font-sm color-text-paragraph-2">
                    {unreadCount > 0
                      ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}`
                      : "All caught up!"}
                  </span>
                </div>
                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  {unreadCount > 0 && (
                    <button
                      className="btn btn-border btn-sm hover-up"
                      type="button"
                      onClick={markAllRead}
                    >
                      Mark all as read
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="mb-20">
              <button
                className={`btn btn-sm mr-10 mb-10 ${filter === "all" ? "btn-default" : "btn-border"}`}
                type="button"
                onClick={() => setFilter("all")}
              >
                All ({notifications.length})
              </button>
              <button
                className={`btn btn-sm mr-10 mb-10 ${filter === "unread" ? "btn-default" : "btn-border"}`}
                type="button"
                onClick={() => setFilter("unread")}
              >
                Unread ({unreadCount})
              </button>
            </div>

            {/* Notifications list */}
            <div className="card-grid-2 hover-up">
              <div className="card-block-info pt-10 pb-10">
                {filtered.length === 0 && (
                  <div className="text-center py-40">
                    <p className="font-sm color-text-paragraph-2">No notifications here.</p>
                  </div>
                )}
                {filtered.map((notif) => (
                  <div
                    key={notif.id}
                    className="d-flex align-items-start gap-15 py-15 px-10"
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      background: notif.read ? "transparent" : "#f7fbff",
                      cursor: notif.read ? "default" : "pointer",
                    }}
                    onClick={() => !notif.read && markRead(notif.id)}
                  >
                    {/* Dot indicator */}
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: notif.read ? "#ddd" : typeColors[notif.type] || "#185FA5",
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p className="font-sm fw-600 mb-2">{notif.title}</p>
                      <p className="font-xs color-text-paragraph-2 mb-2">{notif.message}</p>
                      <p className="font-xs color-text-paragraph-2 mb-0" style={{ opacity: 0.6 }}>
                        {notif.time}
                      </p>
                    </div>
                    {!notif.read && (
                      <span
                        className="badge"
                        style={{
                          background: typeColors[notif.type] || "#185FA5",
                          color: "#fff",
                          fontSize: "10px",
                          flexShrink: 0,
                        }}
                      >
                        New
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Notification preferences */}
            <div className="card-grid-2 hover-up mt-20">
              <div className="card-block-info pt-20 pb-20">
                <h5 className="mb-15">Notification Preferences</h5>
                <div className="row">
                  {[
                    { label: "New applicants", enabled: true },
                    { label: "Credit & billing alerts", enabled: true },
                    { label: "Job status updates", enabled: true },
                    { label: "System messages", enabled: false },
                  ].map((pref) => (
                    <div className="col-lg-6 col-12 mb-10" key={pref.label}>
                      <div className="d-flex align-items-center justify-content-between py-5 px-10"
                        style={{ border: "1px solid #eee", borderRadius: "8px" }}>
                        <span className="font-sm">{pref.label}</span>
                        <div
                          style={{
                            width: "36px",
                            height: "20px",
                            borderRadius: "10px",
                            background: pref.enabled ? "#185FA5" : "#ddd",
                            position: "relative",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              background: "#fff",
                              position: "absolute",
                              top: "2px",
                              left: pref.enabled ? "18px" : "2px",
                              transition: "left 0.2s",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerNotificationsPage;
