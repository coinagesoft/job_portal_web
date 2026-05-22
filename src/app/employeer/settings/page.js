"use client";

import { useState } from "react";
import { useToast } from "@/components/Toast";

const LANGUAGES = [
  "English", "Hindi", "Marathi", "Bengali", "Tamil", "Telugu",
  "Kannada", "Malayalam", "Gujarati", "Punjabi", "Urdu", "Odia",
  "Arabic", "French", "German",
];

const SETTINGS_SECTIONS = [
  { key: "account",      label: "Account Details",      icon: "fi-rr-user"          },
  { key: "language",     label: "Language Preference",  icon: "fi-rr-globe"         },
  { key: "security",     label: "Security",             icon: "fi-rr-lock"          },
  { key: "preferences",  label: "Preferences",          icon: "fi-rr-settings"      },
  { key: "danger",       label: "Delete Account",       icon: "fi-rr-trash"         },
];

const NOTIFICATION_PREFS = [
  { label: "New applicant alerts", enabled: true },
  { label: "Credit expiry reminders", enabled: true },
  { label: "Job status updates", enabled: true },
  { label: "Invoice notifications", enabled: true },
  { label: "Platform updates", enabled: false },
  { label: "Marketing emails", enabled: false },
];

const EmployerSettingsPage = () => {
  const showToast = useToast();
  const [activeSection, setActiveSection] = useState("account");
  const [saved, setSaved] = useState(false);

  // Language state
  const [language, setLanguage] = useState("English");
  const [secondaryLanguage, setSecondaryLanguage] = useState("");
  const [langSaved, setLangSaved] = useState(false);

  // Notification toggles
  const [notifPrefs, setNotifPrefs] = useState(NOTIFICATION_PREFS);

  const handleSave = () => {
    setSaved(true);
    showToast("Account settings saved successfully.", "success");
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLangSave = () => {
    setLangSaved(true);
    showToast("Language preference saved.", "success");
    setTimeout(() => setLangSaved(false), 2500);
  };

  const toggleNotif = (index) => {
    setNotifPrefs((prev) =>
      prev.map((item, i) => (i === index ? { ...item, enabled: !item.enabled } : item))
    );
  };

  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">

            {/* Header */}
            <div className="box-filters-job mb-30">
              <div className="row align-items-center">
                <div className="col-12">
                  <h3 className="mb-5">Settings</h3>
                  <span className="font-sm color-text-paragraph-2">
                    Manage your account preferences, language, security, and notifications.
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Sidebar nav — styled to match candidate profile sidebar */}
              <div className="col-lg-3 col-md-12 mb-20">
                <div style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: 14, overflow: "hidden", position: "sticky", top: 90 }}>
                  {/* Header banner — same navy gradient as candidate profile sidebar */}
                  <div style={{ background: "linear-gradient(135deg, #122359 0%, #1e3a8a 100%)", padding: "24px 20px", textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid #ff9900", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 22 }}>
                      🏢
                    </div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Horizon Marine</div>
                    <div style={{ color: "rgba(255,163,0,0.85)", fontSize: 12, marginTop: 3 }}>Employer Account</div>
                  </div>
                  {/* Nav items */}
                  <div style={{ padding: "10px 0" }}>
                    {SETTINGS_SECTIONS.map((sec) => {
                      const isActive = activeSection === sec.key;
                      const isDanger = sec.key === "danger";
                      return (
                        <button
                          key={sec.key}
                          type="button"
                          onClick={() => setActiveSection(sec.key)}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "11px 20px",
                            border: "none",
                            borderLeft: isActive ? "3px solid #ff9900" : "3px solid transparent",
                            background: isActive ? "#fff8ec" : "transparent",
                            color: isDanger ? "#e02020" : isActive ? "#ff9900" : "#4b5563",
                            fontWeight: isActive ? 700 : 500,
                            fontSize: 13,
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.15s",
                          }}
                        >
                          <i className={sec.icon} style={{ fontSize: 15, width: 18, flexShrink: 0, color: isDanger ? "#e02020" : isActive ? "#ff9900" : "#9ca3af" }} />
                          {sec.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Content panel */}
              <div className="col-lg-9 col-md-12 mb-20">

                {/* ── Account Details ── */}
                {activeSection === "account" && (
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20 pb-20">
                      <h5 className="mb-20">Account Details</h5>
                      <div className="row">
                        {[
                          { label: "Contact Name", type: "text", defaultValue: "Arjun Mehta" },
                          { label: "Designation", type: "text", defaultValue: "Account Owner" },
                          { label: "Email Address", type: "email", defaultValue: "arjun.mehta@horizonmarine.in" },
                          { label: "Mobile Number", type: "tel", defaultValue: "+91 98765 43210", hint: "Changes require OTP verification" },
                        ].map((field) => (
                          <div className="col-lg-6 col-12 mb-15" key={field.label}>
                            <label className="font-sm fw-500 color-text-paragraph-2 mb-5 d-block">
                              {field.label}
                            </label>
                            <input
                              className="form-control"
                              type={field.type}
                              defaultValue={field.defaultValue}
                              style={{ height: "44px", fontSize: "13px" }}
                            />
                            {field.hint && (
                              <p className="font-xs color-text-paragraph-2 mt-5">{field.hint}</p>
                            )}
                          </div>
                        ))}
                        <div className="col-lg-6 col-12 mb-15">
                          <label className="font-sm fw-500 color-text-paragraph-2 mb-5 d-block">
                            Time Zone
                          </label>
                          <select
                            className="form-control form-select"
                            defaultValue="Asia/Kolkata"
                            style={{ height: "44px", fontSize: "13px" }}
                          >
                            <option value="Asia/Kolkata">Asia / Kolkata (IST)</option>
                            <option value="Asia/Dubai">Asia / Dubai (GST)</option>
                            <option value="UTC">UTC</option>
                            <option value="America/New_York">America / New York (EST)</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-10">
                        <button className="btn btn-default hover-up mr-10" type="button" onClick={handleSave}>
                          {saved ? "✓ Saved" : "Save Changes"}
                        </button>
                        <button className="btn btn-border hover-up" type="button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Language Preference ── */}
                {activeSection === "language" && (
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20 pb-20">
                      <h5 className="mb-5">Language Preference</h5>
                      <p className="font-sm color-text-paragraph-2 mb-25">
                        Set your preferred language for the portal interface and email communications.
                      </p>

                      <div className="row">
                        <div className="col-lg-6 col-12 mb-20">
                          <label className="font-sm fw-500 color-text-paragraph-2 mb-5 d-block">
                            Primary Language <span style={{ color: "#e03" }}>*</span>
                          </label>
                          <select
                            className="form-control form-select"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            style={{ height: "44px", fontSize: "13px" }}
                          >
                            {LANGUAGES.map((lang) => (
                              <option key={lang} value={lang}>{lang}</option>
                            ))}
                          </select>
                          <p className="font-xs color-text-paragraph-2 mt-5">
                            Used for portal interface and system notifications.
                          </p>
                        </div>

                        <div className="col-lg-6 col-12 mb-20">
                          <label className="font-sm fw-500 color-text-paragraph-2 mb-5 d-block">
                            Secondary Language (Optional)
                          </label>
                          <select
                            className="form-control form-select"
                            value={secondaryLanguage}
                            onChange={(e) => setSecondaryLanguage(e.target.value)}
                            style={{ height: "44px", fontSize: "13px" }}
                          >
                            <option value="">-- None --</option>
                            {LANGUAGES.filter((l) => l !== language).map((lang) => (
                              <option key={lang} value={lang}>{lang}</option>
                            ))}
                          </select>
                          <p className="font-xs color-text-paragraph-2 mt-5">
                            Shown as alternate in candidate-facing job listings.
                          </p>
                        </div>
                      </div>

                      {/* Preview banner */}
                      <div
                        className="mb-25 p-15"
                        style={{ background: "#ffffff", borderRadius: "10px", border: "1px solid #ffc151" }}
                      >
                        <p className="font-sm fw-600 color-brand-1 mb-3">Current Language Setting</p>
                        <p className="font-xs color-text-paragraph-2 mb-0">
                          Portal language: <strong>{language}</strong>
                          {secondaryLanguage && (
                            <> &nbsp;·&nbsp; Secondary: <strong>{secondaryLanguage}</strong></>
                          )}
                        </p>
                      </div>

                      <div>
                        <button
                          className="btn btn-default hover-up mr-10"
                          type="button"
                          onClick={handleLangSave}
                        >
                          {langSaved ? "✓ Saved" : "Save Language"}
                        </button>
                        <button
                          className="btn btn-border hover-up"
                          type="button"
                          onClick={() => { setLanguage("English"); setSecondaryLanguage(""); }}
                        >
                          Reset to Default
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Security ── */}
                {activeSection === "security" && (
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20 pb-20">
                      <h5 className="mb-20">Security</h5>
                      <div
                        className="mb-20 p-15"
                        style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #ffc151" }}
                      >
                        <p className="font-sm fw-600 color-brand-1 mb-5">OTP-based Login Active</p>
                        <p className="font-xs color-text-paragraph-2 mb-0">
                          Your account uses mobile OTP for authentication. No password is required.
                        </p>
                      </div>

                      <h6 className="mb-15">Two-Factor Authentication</h6>
                      <div
                        className="d-flex align-items-center justify-content-between mb-20 py-10 px-15"
                        style={{ border: "1px solid #eee", borderRadius: "8px" }}
                      >
                        <div>
                          <p className="font-sm fw-600 mb-2">Mobile OTP (Active)</p>
                          <p className="font-xs color-text-paragraph-2 mb-0">
                            OTP sent to +91 98765 43210 on every login
                          </p>
                        </div>
                        <span className="badge bg-success">Enabled</span>
                      </div>

                      <h6 className="mb-15">Active Sessions</h6>
                      {[
                        { device: "Chrome on Windows 11", location: "Mumbai, IN", time: "Now", current: true },
                        { device: "Safari on iPhone 15", location: "Mumbai, IN", time: "2 days ago", current: false },
                      ].map((session) => (
                        <div
                          key={session.device}
                          className="d-flex align-items-center justify-content-between mb-10 py-10 px-15"
                          style={{ border: "1px solid #eee", borderRadius: "8px" }}
                        >
                          <div>
                            <p className="font-sm fw-600 mb-2">{session.device}</p>
                            <p className="font-xs color-text-paragraph-2 mb-0">
                              {session.location} - {session.time}
                            </p>
                          </div>
                          {session.current ? (
                            <span className="badge bg-success">Current</span>
                          ) : (
                            <button
                              className="btn btn-border btn-sm"
                              type="button"
                              style={{ fontSize: "11px", padding: "4px 10px" }}
                            >
                              Revoke
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Preferences ── */}
                {activeSection === "preferences" && (
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20 pb-20">
                      <h5 className="mb-20">Preferences</h5>
                      <h6 className="mb-15">Email Notifications</h6>
                      <div className="row mb-20">
                        {notifPrefs.map((pref, i) => (
                          <div className="col-lg-6 col-12 mb-10" key={pref.label}>
                            <div
                              className="d-flex align-items-center justify-content-between py-10 px-15"
                              style={{ border: "1px solid #eee", borderRadius: "8px" }}
                            >
                              <span className="font-sm">{pref.label}</span>
                              <div
                                onClick={() => toggleNotif(i)}
                                style={{
                                  width: "36px",
                                  height: "20px",
                                  borderRadius: "10px",
                                  background: pref.enabled ? "#ff9900" : "#ddd",
                                  position: "relative",
                                  cursor: "pointer",
                                  flexShrink: 0,
                                  transition: "background 0.2s",
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

                      <h6 className="mb-15">Display</h6>
                      <div className="row mb-20">
                        <div className="col-lg-6 col-12 mb-15">
                          <label className="font-sm fw-500 color-text-paragraph-2 mb-5 d-block">
                            Items per page
                          </label>
                          <select
                            className="form-control form-select"
                            defaultValue="10"
                            style={{ height: "44px", fontSize: "13px" }}
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-12 mb-15">
                          <label className="font-sm fw-500 color-text-paragraph-2 mb-5 d-block">
                            Date Format
                          </label>
                          <select
                            className="form-control form-select"
                            defaultValue="dd-mmm-yyyy"
                            style={{ height: "44px", fontSize: "13px" }}
                          >
                            <option value="dd-mmm-yyyy">DD MMM YYYY</option>
                            <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                            <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                          </select>
                        </div>
                      </div>

                      <button
                        className="btn btn-default hover-up mr-10"
                        type="button"
                        onClick={handleSave}
                      >
                        {saved ? "✓ Saved" : "Save Preferences"}
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Danger Zone ── */}
                {activeSection === "danger" && (
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20 pb-20">
                      <h5 className="mb-5" style={{ color: "#A32D2D" }}>Delete Account</h5>
                      <p className="font-sm color-text-paragraph-2 mb-20">
                        These actions are irreversible. Please proceed with caution.
                      </p>
                      {[
                        {
                          title: "Deactivate Account",
                          desc: "Temporarily disable your account. Your jobs and data will be hidden but not deleted. You can reactivate at any time by contacting support.",
                          btnLabel: "Deactivate Account",
                          btnClass: "btn-border",
                          borderColor: "#ffc151",
                        },
                        {
                          title: "Delete All Jobs",
                          desc: "Permanently delete all posted jobs and their applicant data. This cannot be undone.",
                          btnLabel: "Delete All Jobs",
                          btnClass: "btn-border",
                          borderColor: "#faeeda",
                          bg: "#fffdf8",
                        },
                        {
                          title: "Delete Account",
                          desc: "Permanently delete your employer account, all jobs, applicants, and billing history. This action cannot be reversed.",
                          btnLabel: "Delete Account",
                          btnClass: "btn-danger",
                          borderColor: "#fcebeb",
                          bg: "#fff8f8",
                        },
                      ].map((action) => (
                        <div
                          key={action.title}
                          className="d-flex align-items-center justify-content-between mb-15 p-15"
                          style={{
                            border: `1px solid ${action.borderColor}`,
                            borderRadius: "10px",
                            background: action.bg || "transparent",
                          }}
                        >
                          <div style={{ flex: 1, paddingRight: "20px" }}>
                            <p className="font-sm fw-600 mb-5">{action.title}</p>
                            <p className="font-xs color-text-paragraph-2 mb-0">{action.desc}</p>
                          </div>
                          <button
                            className={`btn ${action.btnClass} btn-sm`}
                            type="button"
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            {action.btnLabel}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerSettingsPage;