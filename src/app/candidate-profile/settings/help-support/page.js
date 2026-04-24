"use client";

import { useState } from "react";
import SettingsPageShell from "../components/SettingsPageShell";

const INITIAL_TICKETS = [
  {
    id: "SUP-4201",
    subject: "Resume parsing issue",
    category: "Profile",
    status: "In Progress",
    updatedOn: "14 Apr 2026",
  },
  {
    id: "SUP-4178",
    subject: "Payment receipt copy request",
    category: "Billing",
    status: "Resolved",
    updatedOn: "09 Apr 2026",
  },
];

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How can I update my profile visibility for recruiters?",
    answer:
      "Go to Settings and update your resume visibility preference under profile preferences. Changes apply immediately.",
  },
  {
    id: "faq-2",
    question: "Where can I track interview reminders and application updates?",
    answer:
      "Open Notification Settings and keep application updates and interview reminders turned on for email and in-app alerts.",
  },
  {
    id: "faq-3",
    question: "How do I get a receipt for my registration payment?",
    answer:
      "Your payment receipt is automatically sent to your registered email after a successful transaction. Check your inbox or spam folder.",
  },
];

const TICKET_CATEGORIES = [
  "Profile & Resume",
  "Job Application",
  "Payment & Billing",
  "Account Access",
  "Technical Issue",
  "Other",
];

const statusClass = (status) =>
  status === "Resolved" ? "resolved" : "active";

const CandidateHelpSupportPage = () => {
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  const [form, setForm] = useState({ subject: "", category: "", description: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.category) e.category = "Please select a category.";
    if (!form.description.trim()) e.description = "Description is required.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    const newTicket = {
      id: `SUP-${4300 + tickets.length}`,
      subject: form.subject.trim(),
      category: form.category,
      status: "Open",
      updatedOn: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
    setTickets([newTicket, ...tickets]);
    setForm({ subject: "", category: "", description: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <SettingsPageShell
      title="Help & Support"
      description="Raise a support ticket, track your open requests, or browse common questions."
    >
      {/* Success alert */}
      {submitted && (
        <div
          className="mb-20 p-15"
          style={{
            background: "#e7f9ed",
            border: "1px solid #86efac",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "20px" }}>✅</span>
          <div>
            <strong className="font-sm" style={{ color: "#166534" }}>
              Ticket submitted successfully!
            </strong>
            <p className="font-xs mb-0" style={{ color: "#166534" }}>
              Our support team will respond within 24 hours. Track status below.
            </p>
          </div>
        </div>
      )}

      <div className="row">
        {/* Left: Raise a Ticket form */}
        <div className="col-xl-7 col-lg-7 col-md-12">
          <div className="candidate-settings-card mb-20">
            <h5 className="mb-5">Raise a Support Ticket</h5>
            <p className="font-xs color-text-paragraph-2 mb-20">
              Describe your issue and our team will get back to you within 24 hours.
            </p>

            {/* Subject */}
            <div className="input-style-1 mb-15">
              <label className="font-sm color-text-mutted mb-10">
                Subject <span style={{ color: "#e03" }}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="e.g. Cannot upload resume PDF"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                style={{ height: "44px", fontSize: "13px" }}
              />
              {errors.subject && (
                <p className="font-xs mt-5 mb-0" style={{ color: "#c0392b" }}>
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Category */}
            <div className="input-style-1 mb-15">
              <label className="font-sm color-text-mutted mb-10">
                Category <span style={{ color: "#e03" }}>*</span>
              </label>
              <select
                className="form-control form-select"
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                style={{ height: "44px", fontSize: "13px" }}
              >
                <option value="">-- Select a category --</option>
                {TICKET_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="font-xs mt-5 mb-0" style={{ color: "#c0392b" }}>
                  {errors.category}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="input-style-1 mb-20">
              <label className="font-sm color-text-mutted mb-10">
                Description <span style={{ color: "#e03" }}>*</span>
              </label>
              <textarea
                className="form-control"
                rows={5}
                placeholder="Describe your issue in detail. Include steps to reproduce if applicable."
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                style={{ fontSize: "13px", resize: "vertical" }}
              />
              {errors.description && (
                <p className="font-xs mt-5 mb-0" style={{ color: "#c0392b" }}>
                  {errors.description}
                </p>
              )}
            </div>

            <div className="candidate-settings-actions">
              <button
                type="button"
                className="btn btn-default btn-small"
                onClick={() => {
                  setForm({ subject: "", category: "", description: "" });
                  setErrors({});
                }}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-brand-1 btn-small"
                onClick={handleSubmit}
              >
                Submit Ticket
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="candidate-settings-card">
            <h5 className="mb-15">Frequently Asked Questions</h5>
            <div className="candidate-faq-list">
              {FAQ_ITEMS.map((item, index) => (
                <details key={item.id} className="candidate-faq-item" open={index === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Right: My Tickets */}
        <div className="col-xl-5 col-lg-5 col-md-12">
          <div className="candidate-settings-card mb-20">
            <h5 className="mb-5">My Support Tickets</h5>
            <p className="font-xs color-text-paragraph-2 mb-15">
              {tickets.length} ticket{tickets.length !== 1 ? "s" : ""} total
            </p>
            <div className="candidate-ticket-list">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="candidate-ticket-item">
                  <div>
                    <strong>{ticket.subject}</strong>
                    <p>
                      {ticket.id}
                      {ticket.category ? ` · ${ticket.category}` : ""}
                    </p>
                  </div>
                  <div className="candidate-ticket-meta">
                    <span
                      className={`candidate-ticket-status ${statusClass(ticket.status)}`}
                    >
                      {ticket.status}
                    </span>
                    <small>Updated: {ticket.updatedOn}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info as static cards (no live chat) */}
          <div className="candidate-settings-card">
            <h5 className="mb-15">Other Ways to Reach Us</h5>
            <div
              className="mb-15 p-15"
              style={{ border: "1px solid #dce2ee", borderRadius: "10px" }}
            >
              <strong className="font-sm d-block mb-5">📧 Email Support</strong>
              <p className="font-xs color-text-paragraph-2 mb-5">
                Send detailed questions and get a reply from our team.
              </p>
              <span className="font-xs color-brand-1">support@jobportal.com</span>
            </div>
            <div
              className="p-15"
              style={{ border: "1px solid #dce2ee", borderRadius: "10px" }}
            >
              <strong className="font-sm d-block mb-5">📞 Phone Helpdesk</strong>
              <p className="font-xs color-text-paragraph-2 mb-5">
                Available Mon–Sat, 9 AM to 6 PM IST.
              </p>
              <span className="font-xs color-brand-1">+91 1800-400-777</span>
            </div>
          </div>
        </div>
      </div>
    </SettingsPageShell>
  );
};

export default CandidateHelpSupportPage;
