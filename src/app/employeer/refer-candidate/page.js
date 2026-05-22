"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./refer-candidate.module.css";

/* ─── static data ─────────────────────────────────────────────────────────── */
const trades = ["Welder","Fabricator","Electrician","Plumber","Machine Operator","Marine Crew","Rigger","Safety Officer","Other"];
const experienceLevels = ["0–1 year","1–3 years","3–5 years","5–10 years","10+ years"];
const educationOptions = ["Below 10th","10th Pass","12th Pass","ITI / Diploma","Graduate","Post Graduate"];
const documentOptions  = ["Aadhaar Card","PAN Card","Passport","BOSIET Certificate","ITI Certificate","Medical Fitness","Any Other"];

const REFER_STEPS = [
  { id:"candidate-info",   step:"01", title:"Basic Info"    },
  { id:"work-profile",     step:"02", title:"Work Profile"  },
  { id:"documents",        step:"03", title:"Documents"     },
  { id:"referral-details", step:"04", title:"Referral Info" },
  { id:"review",           step:"05", title:"Review & Send" },
];

/* ─── helpers ─────────────────────────────────────────────────────────────── */
function Field({ label, required, hint, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}{required && <span className={styles.required}>*</span>}</label>
      {children}
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}

/* ─── Top progress bar (same pattern as candidate profile page) ───────────── */
function StepProgressBar({ activeStep }) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.stepWrapper}>
        {REFER_STEPS.map((s, i) => {
          const n = i + 1;
          const done   = n < activeStep;
          const active = n === activeStep;
          return (
            <React.Fragment key={s.id}>
              <div className={styles.stepItem}>
                <div className={[styles.stepCircle, done ? styles.stepCompleted : "", active ? styles.stepActive : ""].join(" ")}>
                  {done ? "✓" : s.step}
                </div>
                <span className={[styles.stepLabel, active ? styles.stepLabelActive : ""].join(" ")}>{s.title}</span>
              </div>
              {i < REFER_STEPS.length - 1 && (
                <div className={[styles.stepLine, done ? styles.stepLineActive : ""].join(" ")} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Step card wrapper ───────────────────────────────────────────────────── */
function StepCard({ stepNum, title, subtitle, children, onBack, onContinue, isLast }) {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionBody}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionStep}>{String(stepNum).padStart(2, "0")}</span>
          <div>
            <h5 className={styles.sectionTitle}>{title}</h5>
            {subtitle && <p className={styles.sectionSub}>{subtitle}</p>}
          </div>
        </div>

        <div style={{ marginTop: 24 }}>{children}</div>

        <div className={styles.stepActions}>
          {stepNum > 1 && (
            <button type="button" className={`btn btn-border ${styles.backBtn}`} onClick={onBack}>Back</button>
          )}
          <button type="button" className={`btn btn-default ${styles.continueBtn}`} onClick={onContinue}>
            {isLast ? "Submit Referral" : "Save & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Steps ───────────────────────────────────────────────────────────────── */
function Step1({ go }) {
  return (
    <StepCard stepNum={1} title="Basic Info" subtitle="Candidate's personal details" onContinue={() => go(2)}>
      <div className={styles.grid2}>
        <Field label="First Name" required><input className={styles.control} placeholder="Ramesh" /></Field>
        <Field label="Last Name" required><input className={styles.control} placeholder="Sharma" /></Field>
        <Field label="Mobile Number" required>
          <input className={styles.control} type="tel" placeholder="+91 98765 43210" />
        </Field>
        <Field label="Email Address">
          <input className={styles.control} type="email" placeholder="ramesh@example.com" />
        </Field>
        <Field label="City" required><input className={styles.control} placeholder="Mumbai" /></Field>
        <Field label="State" required>
          <select className={`${styles.control} ${styles.selectControl}`}>
            {["Maharashtra","Gujarat","Tamil Nadu","Karnataka","West Bengal","Other"].map(v=><option key={v}>{v}</option>)}
          </select>
        </Field>
      </div>
    </StepCard>
  );
}

function Step2({ go }) {
  return (
    <StepCard stepNum={2} title="Work Profile" subtitle="Trade and experience details" onBack={() => go(1)} onContinue={() => go(3)}>
      <div className={styles.grid2}>
        <Field label="Trade / Role" required>
          <select className={`${styles.control} ${styles.selectControl}`}>{trades.map(v=><option key={v}>{v}</option>)}</select>
        </Field>
        <Field label="Experience" required>
          <select className={`${styles.control} ${styles.selectControl}`}>{experienceLevels.map(v=><option key={v}>{v}</option>)}</select>
        </Field>
        <Field label="Education" required>
          <select className={`${styles.control} ${styles.selectControl}`}>{educationOptions.map(v=><option key={v}>{v}</option>)}</select>
        </Field>
        <Field label="Current Salary (₹/month)">
          <input className={styles.control} type="number" placeholder="25000" />
        </Field>
      </div>
      <Field label="Key Skills">
        <input className={styles.control} placeholder="e.g. TIG Welding, Pipe Fitting, Blueprint Reading" />
      </Field>
      <Field label="Brief About Candidate">
        <textarea className={styles.textarea} placeholder="Short summary of the candidate's background and strengths..." />
      </Field>
    </StepCard>
  );
}

function Step3({ go }) {
  return (
    <StepCard stepNum={3} title="Documents" subtitle="Attach relevant documents" onBack={() => go(2)} onContinue={() => go(4)}>
      <Field label="Available Documents" hint="Select all documents the candidate currently holds">
        <div className={styles.checkGrid}>
          {documentOptions.map(doc => (
            <label key={doc} className={styles.checkItem}>
              <input type="checkbox" className={styles.checkbox} />
              <span>{doc}</span>
            </label>
          ))}
        </div>
      </Field>
      <div className={styles.grid2}>
        <Field label="Upload CV / Resume" hint="PDF or Word, max 5 MB">
          <div className={styles.uploadBox}>
            <span className={styles.uploadIcon}>📄</span>
            <span className={styles.uploadText}>Click to upload or drag & drop</span>
            <input type="file" accept=".pdf,.doc,.docx" style={{ opacity: 0, position: "absolute", inset: 0, cursor: "pointer" }} />
          </div>
        </Field>
        <Field label="Upload Certificate / ID" hint="JPG, PNG or PDF, max 5 MB">
          <div className={styles.uploadBox}>
            <span className={styles.uploadIcon}>🪪</span>
            <span className={styles.uploadText}>Click to upload or drag & drop</span>
            <input type="file" accept=".jpg,.jpeg,.png,.pdf" style={{ opacity: 0, position: "absolute", inset: 0, cursor: "pointer" }} />
          </div>
        </Field>
      </div>
    </StepCard>
  );
}

function Step4({ go }) {
  return (
    <StepCard stepNum={4} title="Referral Info" subtitle="Your relationship with this candidate" onBack={() => go(3)} onContinue={() => go(5)}>
      <div className={styles.grid2}>
        <Field label="Your Name" required><input className={styles.control} placeholder="Arjun Mehta" /></Field>
        <Field label="Your Designation" required><input className={styles.control} placeholder="HR Manager" /></Field>
      </div>
      <Field label="How do you know this candidate?" required>
        <select className={`${styles.control} ${styles.selectControl}`}>
          {["Former colleague","Ex-employee","Industry contact","Known via trade association","Other"].map(v=><option key={v}>{v}</option>)}
        </select>
      </Field>
      <Field label="Referral Note" hint="Why are you recommending this candidate?">
        <textarea className={styles.textarea} placeholder="Ramesh is a highly skilled 6G welder with an excellent track record in marine fabrication..." />
      </Field>
      <Field label="Candidate's consent obtained?" required>
        <label className={styles.checkItem} style={{ marginTop: 8 }}>
          <input type="checkbox" className={styles.checkbox} />
          <span>Yes, the candidate is aware of and agrees to this referral</span>
        </label>
      </Field>
    </StepCard>
  );
}

function Step5({ go }) {
  return (
    <StepCard stepNum={5} title="Review & Send" subtitle="Confirm details before submitting" onBack={() => go(4)} onContinue={() => {}} isLast>
      <div className={styles.inlinePanel}>
        <div className={styles.inlinePanelHead}>
          <h6 className={styles.inlinePanelTitle}>Referral Summary</h6>
          <span className={styles.inlinePanelBadge}>Final Step</span>
        </div>
        <p className={styles.inlinePanelText}>
          Please review all details before submitting. Once submitted, the candidate's profile will be visible to relevant employers.
        </p>
        <div className={styles.summaryGrid}>
          {[
            { label:"Candidate",   value:"Ramesh Sharma" },
            { label:"Trade",       value:"Welder (6G)" },
            { label:"Experience",  value:"5–10 years" },
            { label:"Location",    value:"Mumbai, Maharashtra" },
            { label:"Referred by", value:"Arjun Mehta" },
            { label:"Documents",   value:"Aadhaar, ITI Certificate, CV" },
          ].map(row => (
            <div key={row.label} className={styles.summaryRow}>
              <span className={styles.summaryLabel}>{row.label}</span>
              <span className={styles.summaryValue}>{row.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.tagGroup} style={{ marginTop: 16 }}>
          <span className={styles.pillHot}>Referred Candidate</span>
          <span className={styles.pillNeutral}>KYC Pending</span>
        </div>
      </div>
    </StepCard>
  );
}

const STEP_VIEWS = [Step1, Step2, Step3, Step4, Step5];

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function ReferCandidatePage() {
  const [activeStep, setActiveStep] = useState(1);

  const go = (n) => {
    setActiveStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ActiveStep = STEP_VIEWS[activeStep - 1];

  return (
    <main className="main">
      <section className={`section-box mt-50 mb-50 ${styles.pageSection}`}>
        <div className={`container ${styles.layout}`}>
          <div className={styles.content}>

            {/* Header */}
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Refer a Candidate</h3>
                  <span className="font-sm color-text-paragraph-2">
                    Refer a skilled worker from your network to open positions on the platform.
                  </span>
                </div>
                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  <div className={styles.headerActions}>
                    <button className={`btn btn-default btn-sm ${styles.btnSoft}`}>Save Draft</button>
                    <Link href="/employeer/dashboard" className="btn btn-border btn-sm">Cancel</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <StepProgressBar activeStep={activeStep} />

            {/* Active step only */}
            <div className={styles.body}>
              <div className={styles.fullFormPanel}>
                <ActiveStep go={go} />
                <div className={styles.bottomLink}>
                  <Link href="/employeer/dashboard">Back to Dashboard</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}