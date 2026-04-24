import Link from "next/link";
import styles from "./post-job.module.css";

const roleCategories = [
  "Welding",
  "Fabrication",
  "Electrician",
  "Plumber",
  "Machine Operator",
  "Marine Crew",
  "Warehouse",
  "Other",
];

const jobPostTypes = ["Normal Job", "Hot Vacancy", "Classified"];

const employmentTypes = [
  "Permanent",
  "Temporary",
  "Contract",
  "Freelance",
  "Internship / Trainee",
  "Apprenticeship",
  "Part-Time Employment",
  "Full-Time Employment",
];

const hotVisibilityOptions = ["7 Days", "15 Days", "30 Days"];

const suggestedSkills = [
  "Java",
  "JavaScript",
  "Spring Boot",
  "Welding Inspection",
  "Safety Compliance",
  "AutoCAD",
];

const selectedSkills = [
  { name: "Java", priority: "primary" },
  { name: "Spring Boot", priority: "secondary" },
  { name: "Safety Compliance", priority: "secondary" },
];

const screeningQuestions = [
  {
    id: "experience-check",
    question: "Do you have 3+ years of relevant experience?",
    answerType: "Yes / No",
    required: true,
  },
  {
    id: "relocation-check",
    question: "Are you willing to relocate for this role?",
    answerType: "Yes / No",
    required: true,
  },
  {
    id: "notice-period",
    question: "What is your current notice period in days?",
    answerType: "Number",
    required: false,
  },
];

function Field({ label, required, hint, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required ? <span className={styles.required}>*</span> : null}
      </label>
      {children}
      {hint ? <p className={styles.hint}>{hint}</p> : null}
    </div>
  );
}

function SectionHeading({ step, title, subtitle }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionStep}>{step}</span>
      <div>
        <h5 className={styles.sectionTitle}>{title}</h5>
        {subtitle ? <p className={styles.sectionSub}>{subtitle}</p> : null}
      </div>
    </div>
  );
}

export default function DashboardPostJobPage() {
  return (
    <main className="main">
      <section className={`section-box mt-50 mb-50 ${styles.pageSection}`}>
        <div className={`container ${styles.layout}`}>
          <div className={styles.content}>
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Post a Job</h3>
                  <span className="font-sm color-text-paragraph-2">
                    Create normal, hot vacancy, and classified posts in the same employer workflow.
                  </span>
                </div>
                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  <div className={styles.headerActions}>
                    <button className={`btn btn-default btn-sm ${styles.btnSoft}`} type="button">
                      Save Draft
                    </button>
                    <button className="btn btn-default btn-sm" type="button">
                      Preview & Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-15">
              <span className="badge bg-light text-dark mr-5 mb-5">Required fields: 34</span>
              <span className="badge bg-light text-dark mr-5 mb-5">Formats: Normal | Hot | Classified</span>
              <span className="badge bg-light text-dark mr-5 mb-5">Category focus: Skilled workforce</span>
            </div>

            <div className={styles.body}>
              <div className={styles.formPanel}>
                <div className={styles.section}>
                  <SectionHeading
                    step="01"
                    title="Job Details"
                    subtitle="Core role definition and description"
                  />

                  <Field
                    label="Job Title"
                    required
                    hint="Autocomplete from trade taxonomy"
                  >
                    <input
                      className={styles.control}
                      defaultValue="Welder 6G"
                      placeholder="e.g. Welder 6G"
                    />
                  </Field>

                  <div className={styles.grid2}>
                    <Field label="Role / Category of the Job" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Welding"
                      >
                        {roleCategories.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Experience (Years)" required>
                      <input
                        className={styles.control}
                        type="number"
                        min="0"
                        defaultValue="5"
                      />
                    </Field>
                    <Field
                      label="Job Post Type"
                      required
                      hint="Select listing priority in employer plan."
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Hot Vacancy"
                      >
                        {jobPostTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Employment Type" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Contract"
                      >
                        {employmentTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Job Description"
                    required
                    hint="Minimum 100 characters for posting"
                  >
                    <textarea
                      className={styles.textarea}
                      defaultValue="We are looking for skilled professionals for immediate joining. Candidate should have relevant role experience, safety awareness, and ability to work in shifts."
                    />
                  </Field>

                  <div className={styles.inlinePanel}>
                    <div className={styles.inlinePanelHead}>
                      <h6 className={styles.inlinePanelTitle}>Hot Vacancy Controls</h6>
                      <span className={styles.inlinePanelBadge}>Premium Listing</span>
                    </div>
                    <p className={styles.inlinePanelText}>
                      Recruiter can prioritize this job at the top of listing results and in highlighted sections.
                    </p>
                    <div className={styles.grid2}>
                      <Field label="Visibility Duration" required>
                        <select
                          className={`${styles.control} ${styles.selectControl}`}
                          defaultValue="15 Days"
                        >
                          {hotVisibilityOptions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Premium Fee (Static)" required>
                        <input className={styles.control} defaultValue="INR 2,999 + GST" readOnly />
                      </Field>
                    </div>
                    <div className={styles.tagGroup}>
                      <span className={styles.pillHot}>Hot Job</span>
                      <span className={styles.pillUrgent}>Urgent Hiring</span>
                      <span className={styles.pillNeutral}>Priority ranking above normal jobs</span>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <SectionHeading
                    step="02"
                    title="Compensation"
                    subtitle="Salary range and display preference"
                  />
                  <div className={styles.grid2}>
                    <Field label="Min Salary" required>
                      <input
                        className={styles.control}
                        type="number"
                        defaultValue="30000"
                      />
                    </Field>
                    <Field label="Max Salary" required>
                      <input
                        className={styles.control}
                        type="number"
                        defaultValue="45000"
                      />
                    </Field>
                    <Field label="Currency" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="INR"
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="AED">AED</option>
                        <option value="SAR">SAR</option>
                      </select>
                    </Field>
                    <Field label="Salary Display Option" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Range"
                      >
                        <option value="Range">Show range</option>
                        <option value="Starting">Starting from min</option>
                        <option value="Fixed">Fixed salary</option>
                      </select>
                    </Field>
                    <Field
                      label="Candidate Salary Visibility"
                      required
                      hint="Hide salary details from candidates when needed."
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Hide salary from candidates"
                      >
                        <option>Show salary to candidates</option>
                        <option>Hide salary from candidates</option>
                      </select>
                    </Field>
                  </div>
                </div>

                <div className={styles.section}>
                  <SectionHeading
                    step="03"
                    title="Skills, Priority & JD"
                    subtitle="Autosuggestion, primary/secondary skill marking and JD tools"
                  />
                  <Field
                    label="Key Skills"
                    required
                    hint="Type skill keywords and select multiple options from suggestions."
                  >
                    <input
                      className={styles.control}
                      defaultValue="Java, Spring Boot"
                      placeholder="Start typing skills..."
                      list="skill-suggestion-list"
                    />
                    <datalist id="skill-suggestion-list">
                      {suggestedSkills.map((item) => (
                        <option key={item} value={item} />
                      ))}
                    </datalist>
                  </Field>

                  <div className={styles.chipRow}>
                    {suggestedSkills.map((item) => (
                      <button key={item} type="button" className="btn btn-border btn-sm mr-10 mb-10">
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className={styles.skillPriorityList}>
                    {selectedSkills.map((skill) => (
                      <div key={skill.name} className={styles.skillPriorityItem}>
                        <div>
                          <strong className={styles.skillName}>{skill.name}</strong>
                          <p className={styles.skillHint}>Selected from key skills</p>
                        </div>
                        <span
                          className={
                            skill.priority === "primary"
                              ? styles.skillPrimaryBadge
                              : styles.skillSecondaryBadge
                          }
                        >
                          {skill.priority === "primary"
                            ? "Filled Star - Primary Skill"
                            : "Outline Star - Secondary Skill"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.grid2}>
                    <Field
                      label="JD Suggestion"
                      required
                      hint="Use suggestion as base and customize before publish."
                    >
                      <textarea
                        className={styles.textarea}
                        defaultValue="Looking for candidates with Java and Spring Boot experience, strong debugging skills, and ability to join immediate hiring cycles."
                      />
                    </Field>
                    <Field label="Upload JD Document" required>
                      <input className={`${styles.control} ${styles.fileControl}`} type="file" />
                    </Field>
                  </div>

                  <div className={styles.chipRow}>
                    <button type="button" className="btn btn-default btn-sm mr-10 mb-10">
                      Suggest JD
                    </button>
                    <button type="button" className="btn btn-border btn-sm mr-10 mb-10">
                      Re-generate JD
                    </button>
                  </div>
                </div>

                <div className={styles.section}>
                  <SectionHeading
                    step="04"
                    title="Openings & Eligibility"
                    subtitle="Experience, age, education and candidate filters"
                  />
                  <div className={styles.grid2}>
                    <Field label="Vacancies" required>
                      <input
                        className={styles.control}
                        type="number"
                        min="1"
                        defaultValue="3"
                      />
                    </Field>
                    <Field label="Education" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="ITI / Diploma"
                      >
                        <option>8th Pass</option>
                        <option>10th Pass</option>
                        <option>12th Pass</option>
                        <option>ITI / Diploma</option>
                        <option>Graduate</option>
                        <option>Any</option>
                      </select>
                    </Field>
                    <Field label="Min Age" required>
                      <input
                        className={styles.control}
                        type="number"
                        defaultValue="21"
                      />
                    </Field>
                    <Field label="Max Age" required>
                      <input
                        className={styles.control}
                        type="number"
                        defaultValue="40"
                      />
                    </Field>
                    <Field label="License / Certifications" required>
                      <input
                        className={styles.control}
                        defaultValue="6G Certificate, Safety Card"
                        placeholder="Comma separated"
                      />
                    </Field>
                    <Field label="Language Preference" required>
                      <input
                        className={styles.control}
                        defaultValue="Hindi, English"
                        placeholder="Comma separated"
                      />
                    </Field>
                    <Field label="Gender" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Any"
                      >
                        <option>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </Field>
                    <Field label="Disability" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Open to all"
                      >
                        <option>Open to all</option>
                        <option>Open to PwD</option>
                        <option>Not applicable</option>
                      </select>
                    </Field>
                  </div>
                </div>

                <div className={styles.section}>
                  <SectionHeading
                    step="05"
                    title="Location & Compliance"
                    subtitle="Onshore/offshore setup and passport rules"
                  />

                  <Field label="Location Type" required>
                    <div className={styles.radioGrid}>
                      <label className={styles.radioCard}>
                        <input type="radio" name="locationType" defaultChecked />
                        <span>Onshore</span>
                      </label>
                      <label className={styles.radioCard}>
                        <input type="radio" name="locationType" />
                        <span>Offshore</span>
                      </label>
                    </div>
                  </Field>

                  <div className={styles.grid2}>
                    <Field label="Onshore City / Offshore Region" required>
                      <input
                        className={styles.control}
                        defaultValue="Mumbai"
                        placeholder="City or region"
                      />
                    </Field>
                    <Field label="State / Country" required>
                      <input
                        className={styles.control}
                        defaultValue="Maharashtra, India"
                      />
                    </Field>
                  </div>

                  <div className={styles.grid2}>
                    <Field label="is_international" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="No"
                      >
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </Field>
                    <Field label="passport_required" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="No"
                      >
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </Field>
                  </div>

                  <div className={styles.grid2}>
                    <Field label="validity_months" required>
                      <input
                        className={styles.control}
                        type="number"
                        min="0"
                        defaultValue="6"
                      />
                    </Field>
                    <Field label="Company Visibility" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Show company name"
                      >
                        <option>Show company name</option>
                        <option>Confidential client</option>
                      </select>
                    </Field>
                  </div>
                </div>

                <div className={styles.section}>
                  <SectionHeading
                    step="06"
                    title="Screening Questions"
                    subtitle="Candidates must answer required questions during apply flow"
                  />
                  <div className={styles.questionList}>
                    {screeningQuestions.map((question, index) => (
                      <div key={question.id} className={styles.questionCard}>
                        <div className={styles.questionCardHead}>
                          <h6 className={styles.questionCardTitle}>Question {index + 1}</h6>
                          <span
                            className={
                              question.required ? styles.questionRequired : styles.questionOptional
                            }
                          >
                            {question.required ? "Mandatory" : "Optional"}
                          </span>
                        </div>
                        <p className={styles.questionCardText}>{question.question}</p>
                        <div className={styles.grid2}>
                          <Field label="Answer Type" required>
                            <input className={styles.control} defaultValue={question.answerType} readOnly />
                          </Field>
                          <Field label="Candidate Rule" required>
                            <input
                              className={styles.control}
                              defaultValue={
                                question.required
                                  ? "Cannot submit without answer"
                                  : "Answer can be skipped"
                              }
                              readOnly
                            />
                          </Field>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className={styles.inlineNotice}>
                    Recruiters can filter applicants later based on these answers in the Applicants panel.
                  </p>
                </div>

                <div className={styles.section}>
                  <SectionHeading
                    step="07"
                    title="Publishing"
                    subtitle="Deadline, status and publish schedule"
                  />
                  <div className={styles.grid2}>
                    <Field label="Application Deadline" required>
                      <input
                        className={styles.control}
                        type="date"
                        defaultValue="2026-05-15"
                      />
                    </Field>
                    <Field label="Job Status" required>
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                        defaultValue="Active"
                      >
                        <option>Draft</option>
                        <option>Active</option>
                        <option>Paused</option>
                      </select>
                    </Field>
                    <Field label="publish_at" required>
                      <input
                        className={styles.control}
                        type="datetime-local"
                        defaultValue="2026-04-18T10:00"
                      />
                    </Field>
                  </div>
                </div>
              </div>

              <aside className={styles.summaryPanel}>
                <h6 className={styles.summaryTitle}>Live Summary</h6>
                <div className={styles.summaryRows}>
                  <div className={styles.summaryRow}>
                    <span>Role</span>
                    <strong>Welder 6G</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Post Type</span>
                    <strong>Hot Vacancy</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Employment Type</span>
                    <strong>Contract</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Salary</span>
                    <strong>Hidden from candidates</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Vacancies</span>
                    <strong>3</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Hot Visibility</span>
                    <strong>15 Days</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Primary Skill</span>
                    <strong>Java</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Location</span>
                    <strong>Mumbai (Onshore)</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Deadline</span>
                    <strong>15 May 2026</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Screening</span>
                    <strong>3 Questions (2 Mandatory)</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Status</span>
                    <strong>Active</strong>
                  </div>
                </div>

                <div className={styles.summaryActions}>
                  <button className={`btn btn-default btn-sm ${styles.btnSoft}`}>
                    Preview as Candidate
                  </button>
                  <button className="btn btn-default btn-brand btn-sm">
                    Publish Job
                  </button>
                </div>

                <p className={styles.summaryMeta}>
                  Posting actions are connected to your employer workflow and can be extended with API integration.
                </p>
              </aside>
            </div>

            <div className={styles.bottomLink}>
              <Link href="/register" className="font-sm color-brand-2">
                Go to Employer Registration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
