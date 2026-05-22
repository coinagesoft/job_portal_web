"use client";

import React, { useState } from "react";
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
];

const jobSections = [
  { id: "job-details", step: "01", title: "Job Details" },
  { id: "compensation", step: "02", title: "Compensation" },
  { id: "skills-priority", step: "03", title: "Skills & JD" },
  { id: "openings-eligibility", step: "04", title: "Eligibility" },
  { id: "location-compliance", step: "05", title: "Location" },
  { id: "screening-questions", step: "06", title: "Questions" },
  { id: "publishing", step: "07", title: "Publishing" },
];

function Field({ label, required, hint, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && (
          <span className={styles.required}>*</span>
        )}
      </label>

      {children}

      {hint && (
        <p className={styles.hint}>{hint}</p>
      )}
    </div>
  );
}

function SectionHeading({
  step,
  title,
  subtitle,
}) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionStep}>
        {step}
      </span>

      <div>
        <h5 className={styles.sectionTitle}>
          {title}
        </h5>

        {subtitle && (
          <p className={styles.sectionSub}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function StepProgressBar({ activeStep }) {
  return (
    <div className={styles.stepWrapper}>
      {jobSections.map((section, index) => {
        const stepNumber = index + 1;

        return (
          <React.Fragment key={section.id}>
            <div className={styles.stepItem}>
              <div
                className={`${styles.stepCircle}
                ${
                  stepNumber < activeStep
                    ? styles.stepCompleted
                    : ""
                }
                ${
                  stepNumber === activeStep
                    ? styles.stepActive
                    : ""
                }`}
              >
                {stepNumber < activeStep
                  ? "✓"
                  : section.step}
              </div>

              <span
                className={`${styles.stepLabel}
                ${
                  stepNumber === activeStep
                    ? styles.stepLabelActive
                    : ""
                }`}
              >
                {section.title}
              </span>
            </div>

            {index < jobSections.length - 1 && (
              <div
                className={`${styles.stepLine}
                ${
                  stepNumber < activeStep
                    ? styles.stepLineActive
                    : ""
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function SectionCard({
  id,
  step,
  title,
  subtitle,
  children,
  isActive,
  onContinue,
  onBack,
  isLast,
}) {
  return (
    <details
      id={id}
      className={styles.sectionCard}
      open={isActive}
    >
      <summary className={styles.sectionSummary}>
        <SectionHeading
          step={step}
          title={title}
          subtitle={subtitle}
        />

        <span className={styles.sectionChevron} />
      </summary>

      <div className={styles.sectionBody}>
        {children}

        <div className={styles.stepActions}>
          {step !== "01" && (
            <button
              type="button"
              className={`btn btn-border ${styles.backBtn}`}
              onClick={onBack}
            >
              Back
            </button>
          )}

          <button
            type="button"
            className={`btn btn-default ${styles.continueBtn}`}
            onClick={onContinue}
          >
            {isLast
              ? "Save & Publish"
              : "Save & Continue"}
          </button>
        </div>
      </div>
    </details>
  );
}

export default function DashboardPostJobPage() {
  const [activeStep, setActiveStep] =
    useState(1);

  const nextStep = () => {
    if (activeStep < jobSections.length) {
      setActiveStep((prev) => prev + 1);

      const nextSection =
        document.getElementById(
          jobSections[activeStep].id
        );

      if (nextSection) {
        nextSection.open = true;

        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);

      const prevSection =
        document.getElementById(
          jobSections[activeStep - 2].id
        );

      if (prevSection) {
        prevSection.open = true;

        prevSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <main className="main">
      <section
        className={`section-box mt-50 mb-50 ${styles.pageSection}`}
      >
        <div className={`container ${styles.layout}`}>
          <div className={styles.content}>
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">
                    Post a Job
                  </h3>

                  <span className="font-sm color-text-paragraph-2">
                    Create normal, hot vacancy,
                    and classified posts in the
                    same employer workflow.
                  </span>
                </div>

                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  <div
                    className={
                      styles.headerActions
                    }
                  >
                    <button
                      className={`btn btn-default btn-sm ${styles.btnSoft}`}
                    >
                      Save Draft
                    </button>

                    <button className="btn btn-default btn-sm">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.progressContainer}>
              <StepProgressBar
                activeStep={activeStep}
              />
            </div>

            <div className={styles.body}>
              <div
                className={styles.fullFormPanel}
              >
                {/* STEP 1 */}

                <SectionCard
                  id="job-details"
                  step="01"
                  title="Job Details"
                  subtitle="Core role information"
                  isActive={activeStep === 1}
                  onContinue={nextStep}
                  onBack={prevStep}
                >
                  <Field
                    label="Job Title"
                    required
                  >
                    <input
                      className={styles.control}
                      placeholder="Welder 6G"
                    />
                  </Field>

                  <div className={styles.grid2}>
                    <Field
                      label="Role Category"
                      required
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                      >
                        {roleCategories.map(
                          (item) => (
                            <option key={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>
                    </Field>

                    <Field
                      label="Experience"
                      required
                    >
                      <input
                        type="number"
                        className={
                          styles.control
                        }
                        defaultValue="5"
                      />
                    </Field>

                    <Field
                      label="Job Type"
                      required
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                      >
                        {jobPostTypes.map(
                          (item) => (
                            <option key={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>
                    </Field>

                    <Field
                      label="Employment Type"
                      required
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                      >
                        {employmentTypes.map(
                          (item) => (
                            <option key={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Job Description"
                    required
                  >
                    <textarea
                      className={styles.textarea}
                      defaultValue="We are looking for skilled professionals for immediate joining."
                    />
                  </Field>
                </SectionCard>

                {/* STEP 2 */}

                <SectionCard
                  id="compensation"
                  step="02"
                  title="Compensation"
                  subtitle="Salary information"
                  isActive={activeStep === 2}
                  onContinue={nextStep}
                  onBack={prevStep}
                >
                  <div className={styles.grid2}>
                    <Field
                      label="Min Salary"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="30000"
                      />
                    </Field>

                    <Field
                      label="Max Salary"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="45000"
                      />
                    </Field>

                    <Field
                      label="Currency"
                      required
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                      >
                        <option>INR</option>
                        <option>USD</option>
                      </select>
                    </Field>

                    <Field
                      label="Salary Visibility"
                      required
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                      >
                        <option>
                          Show salary
                        </option>

                        <option>
                          Hide salary
                        </option>
                      </select>
                    </Field>
                  </div>
                </SectionCard>

                {/* STEP 3 */}

                <SectionCard
                  id="skills-priority"
                  step="03"
                  title="Skills & JD"
                  subtitle="Skills and description"
                  isActive={activeStep === 3}
                  onContinue={nextStep}
                  onBack={prevStep}
                >
                  <Field
                    label="Key Skills"
                    required
                  >
                    <input
                      className={styles.control}
                      defaultValue="Java, Spring Boot"
                    />
                  </Field>

                  <div className={styles.chipRow}>
                    {suggestedSkills.map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          className="btn btn-border btn-sm mr-10 mb-10"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>

                  <div
                    className={
                      styles.skillPriorityList
                    }
                  >
                    {selectedSkills.map(
                      (skill) => (
                        <div
                          key={skill.name}
                          className={
                            styles.skillPriorityItem
                          }
                        >
                          <div>
                            <strong
                              className={
                                styles.skillName
                              }
                            >
                              {skill.name}
                            </strong>

                            <p
                              className={
                                styles.skillHint
                              }
                            >
                              Selected Skill
                            </p>
                          </div>

                          <span
                            className={
                              skill.priority ===
                              "primary"
                                ? styles.skillPrimaryBadge
                                : styles.skillSecondaryBadge
                            }
                          >
                            {skill.priority}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <Field
                    label="Job Description"
                    required
                  >
                    <textarea
                      className={styles.textarea}
                    />
                  </Field>
                </SectionCard>

                {/* STEP 4 */}

                <SectionCard
                  id="openings-eligibility"
                  step="04"
                  title="Eligibility"
                  subtitle="Candidate eligibility"
                  isActive={activeStep === 4}
                  onContinue={nextStep}
                  onBack={prevStep}
                >
                  <div className={styles.grid2}>
                    <Field
                      label="Vacancies"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="3"
                      />
                    </Field>

                    <Field
                      label="Education"
                      required
                    >
                      <select
                        className={`${styles.control} ${styles.selectControl}`}
                      >
                        <option>
                          ITI / Diploma
                        </option>

                        <option>
                          Graduate
                        </option>
                      </select>
                    </Field>

                    <Field
                      label="Min Age"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="21"
                      />
                    </Field>

                    <Field
                      label="Max Age"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="40"
                      />
                    </Field>
                  </div>
                </SectionCard>

                {/* STEP 5 */}

                <SectionCard
                  id="location-compliance"
                  step="05"
                  title="Location"
                  subtitle="Job location"
                  isActive={activeStep === 5}
                  onContinue={nextStep}
                  onBack={prevStep}
                >
                  <div className={styles.grid2}>
                    <Field
                      label="City"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="Mumbai"
                      />
                    </Field>

                    <Field
                      label="Country"
                      required
                    >
                      <input
                        className={
                          styles.control
                        }
                        defaultValue="India"
                      />
                    </Field>
                  </div>
                </SectionCard>

                {/* STEP 6 */}

                <SectionCard
                  id="screening-questions"
                  step="06"
                  title="Questions"
                  subtitle="Screening questions"
                  isActive={activeStep === 6}
                  onContinue={nextStep}
                  onBack={prevStep}
                >
                  <div
                    className={
                      styles.questionList
                    }
                  >
                    {screeningQuestions.map(
                      (
                        question,
                        index
                      ) => (
                        <div
                          key={question.id}
                          className={
                            styles.questionCard
                          }
                        >
                          <div
                            className={
                              styles.questionCardHead
                            }
                          >
                            <h6
                              className={
                                styles.questionCardTitle
                              }
                            >
                              Question{" "}
                              {index + 1}
                            </h6>

                            <span
                              className={
                                question.required
                                  ? styles.questionRequired
                                  : styles.questionOptional
                              }
                            >
                              {question.required
                                ? "Mandatory"
                                : "Optional"}
                            </span>
                          </div>

                          <p
                            className={
                              styles.questionCardText
                            }
                          >
                            {
                              question.question
                            }
                          </p>

                          <input
                            className={
                              styles.control
                            }
                            defaultValue={
                              question.answerType
                            }
                          />
                        </div>
                      )
                    )}
                  </div>
                </SectionCard>

                {/* STEP 7 */}

                <SectionCard
                  id="publishing"
                  step="07"
                  title="Publishing"
                  subtitle="Publish your job"
                  isActive={activeStep === 7}
                  onContinue={nextStep}
                  onBack={prevStep}
                  isLast
                >
                  <div
                    className={
                      styles.inlinePanel
                    }
                  >
                    <div
                      className={
                        styles.inlinePanelHead
                      }
                    >
                      <h6
                        className={
                          styles.inlinePanelTitle
                        }
                      >
                        Ready to Publish
                      </h6>

                      <span
                        className={
                          styles.inlinePanelBadge
                        }
                      >
                        Final Step
                      </span>
                    </div>

                    <p
                      className={
                        styles.inlinePanelText
                      }
                    >
                      Review all details
                      before publishing.
                    </p>

                    <div
                      className={
                        styles.tagGroup
                      }
                    >
                      <span
                        className={
                          styles.pillHot
                        }
                      >
                        Hot Job
                      </span>

                      <span
                        className={
                          styles.pillUrgent
                        }
                      >
                        Urgent Hiring
                      </span>

                      <span
                        className={
                          styles.pillNeutral
                        }
                      >
                        Premium Listing
                      </span>
                    </div>
                  </div>
                </SectionCard>

                <div
                  className={styles.bottomLink}
                >
                  <Link href="/dashboard">
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}