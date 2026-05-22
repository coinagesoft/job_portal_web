"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

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
    message: "Your credit pack expires in 14 days.",
    time: "1 day ago",
    read: false,
    type: "credit",
  },
];

const typeColors = {
  applicant: "#ff9900",
  credit: "#BA7517",
};

const EmployerNotificationsPage = () => {
  const showToast = useToast();

  const [notifications, setNotifications] = useState(allNotifications);
  const [filter, setFilter] = useState("all");

  // ✅ NEW STATE FOR TOGGLES
  const [preferences, setPreferences] = useState([
    { label: "New applicants", enabled: true },
    { label: "Credit & billing alerts", enabled: true },
    { label: "Job status updates", enabled: true },
    { label: "System messages", enabled: false },
  ]);

  // ✅ TOGGLE FUNCTION
  const togglePreference = (index) => {
    setPreferences((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item,
      ),
    );

    showToast("Preference updated", "info");
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast("All notifications marked as read.", "success");
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
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
            {/* HEADER */}
            <div className="box-filters-job mb-30">
              <div className="row align-items-center">
                <div className="col-xl-8">
                  <h3>Notifications</h3>
                  <span>{unreadCount} unread</span>
                </div>
                <div className="col-xl-4 text-end">
                  <button
                    className="btn btn-border btn-sm"
                    onClick={markAllRead}
                  >
                    Mark all as read
                  </button>
                </div>
              </div>
            </div>

            {/* FILTER */}
            <div className="mb-20">
              <button
                className={`btn btn-sm mr-10 ${filter === "all" ? "btn-default" : "btn-border"}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`btn btn-sm ${filter === "unread" ? "btn-default" : "btn-border"}`}
                onClick={() => setFilter("unread")}
              >
                Unread
              </button>
            </div>

            {/* LIST */}
            {filtered.map((notif) => (
              <div
                key={notif.id}
                className="notification-hover-card mb-15"
                style={{
                  background: "#ffffff",
                  borderRadius: "22px",
                  border: notif.read
                    ? "1px solid rgba(18,35,89,0.08)"
                    : "1px solid rgba(255,153,0,0.22)",
                  boxShadow: notif.read
                    ? "0 4px 14px rgba(18,35,89,0.04)"
                    : "0 10px 24px rgba(255,153,0,0.08)",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all .35s ease",
                  position: "relative",
                }}
                onClick={() => markRead(notif.id)}
              >
                <div
                  className="card-block-info"
                  style={{
                    padding: "22px",
                  }}
                >
                <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "10px",
    flexWrap: "wrap",
  }}
>
  <p
    style={{
      margin: 0,
      color: "#122359",
      fontWeight: 700,
      fontSize: "15px",
    }}
  >
    {notif.title}
  </p>

  {!notif.read && (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 12px",
        borderRadius: "999px",
        background: "#EAF4FF",
        border: "1px solid #B9DCFF",
        color: "#1D4ED8",
        fontSize: "11px",
        fontWeight: 600,
      }}
    >
      New
    </span>
  )}
</div>
               <p
  style={{
    color: "#66789c",
    fontSize: "14px",
    lineHeight: 1.7,
    marginBottom: "12px",
  }}
>
  {notif.message}
</p>
              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#94a3b8",
    fontSize: "12px",
    fontWeight: 500,
  }}
>
  <i className="fi fi-rr-time-quarter-to" />
  {notif.time}
</div>
                </div>
              </div>
            ))}

            {/* ✅ FIXED TOGGLE SECTION */}
            {/* Notification Preferences */}
            <div
              className="subuser-hover-card mt-20"
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                border: "1px solid rgba(18,35,89,0.08)",
                boxShadow: "0 4px 14px rgba(18,35,89,0.04)",
                padding: "28px",
                transition: "all .35s ease",
              }}
            >
              <div className="d-flex align-items-center justify-content-between mb-20 flex-wrap gap-10">
                <div>
                  <h5
                    style={{
                      marginBottom: "4px",
                      color: "#122359",
                      fontWeight: 800,
                    }}
                  >
                    Notification Preferences
                  </h5>

                  <p
                    style={{
                      marginBottom: 0,
                      color: "#66789c",
                      fontSize: "13px",
                    }}
                  >
                    Control which employer alerts you want to receive.
                  </p>
                </div>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "#EAF4FF",
                    border: "1px solid #B9DCFF",
                    color: "#1D4ED8",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {preferences.filter((p) => p.enabled).length} enabled
                </span>
              </div>

              <div>
                {preferences.map((pref, index) => (
                  <div
                    key={pref.label}
                    className="candidate-notification-point"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "14px",
                      padding: "16px 18px",
                      borderRadius: "18px",
                      border: "1px solid rgba(18,35,89,0.06)",
                      marginBottom: "12px",
                      background: "#ffffff",
                      transition: "all .3s ease",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "#122359",
                          fontWeight: 700,
                          marginBottom: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {pref.label}
                      </div>

                      <div
                        style={{
                          color: "#66789c",
                          fontSize: "12px",
                          lineHeight: 1.6,
                        }}
                      >
                        Receive alerts related to {pref.label.toLowerCase()}.
                      </div>
                    </div>

                    {/* Toggle */}
                    <button
                      type="button"
                      onClick={() => togglePreference(index)}
                      aria-label={`Toggle ${pref.label}`}
                      style={{
                        width: "46px",
                        height: "26px",
                        borderRadius: "999px",
                        border: "none",
                        background: pref.enabled ? "#ffa300" : "#dbe4f0",
                        position: "relative",
                        transition: "all .25s ease",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#fff",
                          position: "absolute",
                          top: "3px",
                          left: pref.enabled ? "23px" : "3px",
                          transition: "all .25s ease",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerNotificationsPage;
