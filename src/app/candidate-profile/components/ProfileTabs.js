"use client";

import React, { useMemo, useState } from "react";

const JOB_TYPE_OPTIONS = ["Domestic jobs", "International jobs", "Contract / Freelance"];

const getStatusDetails = (status) => {
  switch (status) {
    case "verified":
      return { label: "Verified", className: "is-success" };
    case "missing":
      return { label: "Not uploaded", className: "is-warning" };
    case "uploaded":
      return { label: "Uploaded", className: "is-info" };
    default:
      return { label: "Optional", className: "is-muted" };
  }
};

const getSkillBadgeClass = (proficiency) => {
  if (proficiency === "Expert") return "is-teal";
  if (proficiency === "Intermediate") return "is-brand";
  return "is-muted";
};

const sanitizeId = (value) => value.replace(/[^a-zA-Z0-9_-]/g, "");

const ProfileTabs = ({
  profileData,
  completionPercent,
  documentSummary,
  registerSectionRef,
  updateProfileField,
  updateWorkEntry,
  addWorkEntry,
  removeWorkEntry,
  updateEducationEntry,
  addEducationEntry,
  removeEducationEntry,
  toggleSkill,
  handleDocumentUpload,
  clearDocumentUpload,
  addCustomDocument,
  uploadCustomDocument,
  clearCustomDocument,
  saveSection,
  showWorkModal,
  newWorkEntry,
  openWorkModal,
  closeWorkModal,
  updateNewWorkField,
  saveWorkEntry
}) => {
  const [dragZone, setDragZone] = useState("");

  const profileName =
    profileData.fullName || `${profileData.firstName || ""} ${profileData.lastName || ""}`.trim();
  const maskedMobile = profileData.mobile
    ? profileData.mobile.replace(/[0-9](?=[0-9]{4})/g, "X")
    : "Contact hidden";
  const profileEmail = profileData.email || "email hidden";
  const location = [profileData.city, profileData.state].filter(Boolean).join(", ");
  const nowLabel = useMemo(
    () =>
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
    []
  );

  const renderSingleUploadZone = (docKey, documentData, isCustom = false, customDocId = "") => {
    const zoneKey = isCustom ? `custom-${customDocId}` : docKey;
    const inputId = sanitizeId(`upload-${zoneKey}`);
    const hasFile = Boolean(documentData.file);
    const onUpload = (file) => {
      if (!file) return;
      if (isCustom) {
        uploadCustomDocument(customDocId, file);
      } else {
        handleDocumentUpload(docKey, file);
      }
    };

    const onClear = () => {
      if (isCustom) {
        clearCustomDocument(customDocId);
      } else {
        clearDocumentUpload(docKey);
      }
    };

    return (
      <div
        className={`candidate-profile-v2-upload-zone ${
          hasFile ? "is-uploaded" : ""
        } ${dragZone === zoneKey ? "is-dragging" : ""}`}
        onDragOver={(event) => {
          event.preventDefault();
          setDragZone(zoneKey);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setDragZone("");
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragZone("");
          onUpload(event.dataTransfer.files?.[0]);
        }}
      >
        <input
          id={inputId}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="candidate-profile-v2-hidden-input"
          onChange={(event) => onUpload(event.target.files?.[0])}
        />
        <label htmlFor={inputId} className="candidate-profile-v2-upload-trigger">
          <span className="candidate-profile-v2-upload-title">
            {hasFile ? "File selected" : `Upload ${documentData.label}`}
          </span>
          <span className="candidate-profile-v2-upload-sub">
            {hasFile
              ? `${documentData.file.name} | ${documentData.file.size}`
              : "Drag and drop or click to browse"}
          </span>
          <span className="candidate-profile-v2-upload-chip-wrap">
            <span className="candidate-profile-v2-upload-chip">PDF</span>
            <span className="candidate-profile-v2-upload-chip">JPG</span>
            <span className="candidate-profile-v2-upload-chip">PNG</span>
            <span className="candidate-profile-v2-upload-chip">Max 5 MB</span>
          </span>
        </label>

        {hasFile && (
          <div className="candidate-profile-v2-upload-file-row">
            <span>{documentData.file.name}</span>
            <span>{documentData.file.size}</span>
            <button type="button" className="candidate-profile-v2-clear-file" onClick={onClear}>
              Remove
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="candidate-profile-v2-main-col">
      <section
        id="personal"
        ref={(node) => registerSectionRef("personal", node)}
        className="candidate-profile-v2-section-card"
      >
        <div className="candidate-profile-v2-card-header">
          <div className="candidate-profile-v2-title-wrap">
            <h5 className="candidate-profile-v2-card-title">Step 1: Personal Information</h5>
          </div>
          <div className="candidate-profile-v2-actions">
            <button type="button" className="btn btn-border btn-sm">
              Cancel
            </button>
            <button type="button" className="btn btn-default btn-sm" onClick={() => saveSection("personal")}>
              Save changes
            </button>
          </div>
        </div>
        <div className="candidate-profile-v2-card-body">
          <p className="ai-note-inline">
            Smart AI prefill note: basic fields can be auto-filled after your documents are scanned in Step 2.
            Please verify and save.
          </p>
          <div className="candidate-profile-v2-photo-row">
            <div className="candidate-profile-v2-photo-mark">
              <span>{profileName.slice(0, 1).toUpperCase()}</span>
            </div>
            <div>
              <p className="candidate-profile-v2-photo-label">Profile photo</p>
              <p className="candidate-profile-v2-photo-sub">JPG or PNG, max 2 MB</p>
              <div className="candidate-profile-v2-actions">
                <button type="button" className="btn btn-border btn-sm">
                  Upload photo
                </button>
                <button type="button" className="btn btn-grey-small">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">First name *</label>
              <input
                className="form-control"
                value={profileData.firstName}
                onChange={(event) => updateProfileField("firstName", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Last name *</label>
              <input
                className="form-control"
                value={profileData.lastName}
                onChange={(event) => updateProfileField("lastName", event.target.value)}
              />
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Mobile number *</label>
              <input
                className="form-control"
                value={profileData.mobile}
                onChange={(event) => updateProfileField("mobile", event.target.value)}
              />
              <small className="candidate-profile-v2-field-hint">Verified via OTP</small>
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Email address</label>
              <input
                className="form-control"
                type="email"
                value={profileData.email}
                onChange={(event) => updateProfileField("email", event.target.value)}
              />
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid three-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Trade / Occupation *</label>
              <input
                className="form-control"
                value={profileData.trade}
                onChange={(event) => updateProfileField("trade", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Years of experience *</label>
              <input
                className="form-control"
                type="number"
                min="0"
                value={profileData.yearsOfExperience}
                onChange={(event) => updateProfileField("yearsOfExperience", Number(event.target.value))}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Nationality *</label>
              <input
                className="form-control"
                value={profileData.nationality}
                onChange={(event) => updateProfileField("nationality", event.target.value)}
              />
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Salary Expectation (INR/month)</label>
              <input
                className="form-control"
                type="number"
                min="0"
                value={profileData.salaryExpectation || ''}
                onChange={(event) => updateProfileField("salaryExpectation", Number(event.target.value))}
              />
              <small className="candidate-profile-v2-field-hint">Employers filter by salary range</small>
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">ITI Certified</label>
              <label className="candidate-profile-v2-checkbox-item">
                <input
                  type="checkbox"
                  checked={profileData.isITI || false}
                  onChange={(event) => updateProfileField("isITI", event.target.checked)}
                />
                <span>Yes</span>
              </label>
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Passport Number</label>
              <input
                className="form-control"
                value={profileData.passportNumber || ''}
                onChange={(event) => updateProfileField("passportNumber", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Passport Expiry</label>
              <input
                className="form-control"
                type="date"
                value={profileData.passportExpiry || ''}
                onChange={(event) => updateProfileField("passportExpiry", event.target.value)}
              />
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Date of birth *</label>
              <input
                className="form-control"
                type="date"
                value={profileData.dob}
                onChange={(event) => updateProfileField("dob", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Gender</label>
              <select
                className="form-control"
                value={profileData.gender}
                onChange={(event) => updateProfileField("gender", event.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="candidate-profile-v2-form-grid three-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">City *</label>
              <input
                className="form-control"
                value={profileData.city}
                onChange={(event) => updateProfileField("city", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">State *</label>
              <input
                className="form-control"
                value={profileData.state}
                onChange={(event) => updateProfileField("state", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">PIN code</label>
              <input
                className="form-control"
                value={profileData.pin}
                onChange={(event) => updateProfileField("pin", event.target.value)}
              />
            </div>
          </div>

          {/* NEW FIELDS: Address, Role */}
          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Full Address</label>
              <textarea
                className="form-control candidate-profile-v2-textarea"
                rows="2"
                value={profileData.address || ''}
                onChange={(e) => updateProfileField("address", e.target.value)}
                placeholder="House no., Street, Landmark, etc."
              />
              <small className="candidate-profile-v2-field-hint">Complete residential address for verification</small>
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Role / Position *</label>
              <input
                className="form-control"
                value={profileData.role || ''}
                onChange={(e) => updateProfileField("role", e.target.value)}
                placeholder="e.g. Senior Electrician"
              />
              <small className="candidate-profile-v2-field-hint">Your primary professional role</small>
            </div>
          </div>

          {/* NEW FIELDS: Category, Disability status */}
          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Category</label>
              <input
                className="form-control"
                value={profileData.category || ''}
                onChange={(e) => updateProfileField("category", e.target.value)}
                placeholder="e.g. Skilled Trade, IT, Maritime"
              />
              <small className="candidate-profile-v2-field-hint">Professional category for job matching</small>
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Disability Status</label>
              <select
                className="form-control"
                value={profileData.hasDisability ? 'yes' : 'no'}
                onChange={(e) => updateProfileField("hasDisability", e.target.value === 'yes')}
                style={{
                  paddingRight: 34,
                  backgroundImage: "url('/assets/imgs/template/icons/arrow-down.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "16px",
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none"
                }}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              <small className="candidate-profile-v2-field-hint">For diversity hiring programs</small>
            </div>
          </div>

          {/* NEW FIELDS: Disability note, Preferred work location */}
          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Disability Note</label>
              <textarea
                className="form-control candidate-profile-v2-textarea"
                rows="2"
                value={profileData.disabilityNote || ''}
                onChange={(e) => updateProfileField("disabilityNote", e.target.value)}
                placeholder="Nature of disability and accommodations needed (optional)"
                disabled={!profileData.hasDisability}
              />
              <small className="candidate-profile-v2-field-hint">Optional details for employers</small>
            </div>
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Preferred Work Location</label>
              <select
                className="form-control"
                value={profileData.preferredWorkLocation || ''}
                onChange={(e) => updateProfileField("preferredWorkLocation", e.target.value)}
              >
                <option value="">Select preference</option>
                <option value="domestic">Domestic only</option>
                <option value="international">International</option>
                <option value="both">Both</option>
              </select>
              <small className="candidate-profile-v2-field-hint">Job location preferences</small>
            </div>
          </div>

          {/* NEW FIELDS: Job type */}
          <div className="candidate-profile-v2-form-grid two-col">
            <div className="form-group">
              <label className="font-sm color-text-mutted mb-10">Preferred Job Type</label>
              <select
                className="form-control"
                value={profileData.jobType || ''}
                onChange={(e) => updateProfileField("jobType", e.target.value)}
              >
                <option value="">Select type</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="contract">Contract / Project</option>
                <option value="freelance">Freelance</option>
              </select>
              <small className="candidate-profile-v2-field-hint">Employment type preference</small>
            </div>
            <div className="form-group" />
          </div>

          <div className="form-group">
            <label className="font-sm color-text-mutted mb-10">Summary / About</label>
            <textarea
              className="form-control candidate-profile-v2-textarea"
              value={profileData.summary}
              onChange={(event) => updateProfileField("summary", event.target.value)}
            />
            <small className="candidate-profile-v2-field-hint">Shown to employers on your profile</small>
          </div>

        </div>
        <div className="candidate-profile-v2-card-footer">
          <span>Last updated: {nowLabel}</span>
          <button type="button" className="btn btn-default btn-sm" onClick={() => saveSection("personal")}>
            Save changes
          </button>
        </div>
      </section>

      <section
        id="work"
        ref={(node) => registerSectionRef("work", node)}
        className="candidate-profile-v2-section-card"
      >
        <div className="candidate-profile-v2-card-header">
          <div className="candidate-profile-v2-title-wrap">
            <h5 className="candidate-profile-v2-card-title">Step 3: Work History</h5>
            <span className="candidate-profile-v2-badge is-brand">
              {profileData.workHistory.length} entries
            </span>
          </div>
          <button type="button" className="btn btn-default btn-sm" onClick={openWorkModal}>
            Add experience
          </button>
        </div>
        <div className="candidate-profile-v2-card-body">
          <p className="ai-note-inline">
            Smart AI suggestion: work history can be prefilled from uploaded CV and documents. Review entries before saving.
          </p>
          {profileData.workHistory.map((entry) => (
            <div key={entry.id} className="candidate-profile-v2-entry-card">
              <div className="candidate-profile-v2-entry-dot" />
              <div className="candidate-profile-v2-entry-content">
                <div className="candidate-profile-v2-form-grid two-col">
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">Role title</label>
                    <input
                      className="form-control"
                      value={entry.title}
                      onChange={(event) => updateWorkEntry(entry.id, "title", event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">Company</label>
                    <input
                      className="form-control"
                      value={entry.company}
                      onChange={(event) => updateWorkEntry(entry.id, "company", event.target.value)}
                    />
                  </div>
                </div>
                <div className="candidate-profile-v2-form-grid two-col">
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">Start Date</label>
                    <input
                      className="form-control"
                      type="date"
                      value={entry.startDate || ''}
                      onChange={(event) => updateWorkEntry(entry.id, "startDate", event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">End Date</label>
                    <input
                      className="form-control"
                      type="date"
                      value={entry.endDate || ''}
                      onChange={(event) => updateWorkEntry(entry.id, "endDate", event.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="font-sm color-text-mutted mb-10">Location</label>
                  <input
                    className="form-control"
                    value={entry.location}
                    onChange={(event) => updateWorkEntry(entry.id, "location", event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="font-sm color-text-mutted mb-10">Description</label>
                  <textarea
                    className="form-control candidate-profile-v2-textarea-sm"
                    value={entry.description}
                    onChange={(event) => updateWorkEntry(entry.id, "description", event.target.value)}
                  />
                </div>
                <label className="candidate-profile-v2-checkbox-item">
                  <input
                    type="checkbox"
                    checked={entry.current}
                    onChange={(event) => updateWorkEntry(entry.id, "current", event.target.checked)}
                  />
                  <span>Current role</span>
                </label>
              </div>
              <div className="candidate-profile-v2-entry-actions">
                <button type="button" className="btn btn-border btn-sm">
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-grey-small candidate-profile-v2-btn-delete"
                  onClick={() => removeWorkEntry(entry.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="education"
        ref={(node) => registerSectionRef("education", node)}
        className="candidate-profile-v2-section-card"
      >
        <div className="candidate-profile-v2-card-header">
          <div className="candidate-profile-v2-title-wrap">
            <h5 className="candidate-profile-v2-card-title">Step 4: Education</h5>
            <span className="candidate-profile-v2-badge is-brand">
              {profileData.education.length} entries
            </span>
          </div>
          <button type="button" className="btn btn-default btn-sm" onClick={addEducationEntry}>
            Add education
          </button>
        </div>
        <div className="candidate-profile-v2-card-body">
          <p className="ai-note-inline">
            Smart AI OCR note: education details are auto-extracted when possible. Edit any low-confidence values.
          </p>
          {profileData.education.map((entry) => (
            <div key={entry.id} className="candidate-profile-v2-entry-card">
              <div className="candidate-profile-v2-entry-dot is-green" />
              <div className="candidate-profile-v2-entry-content">
                <div className="candidate-profile-v2-form-grid two-col">
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">Qualification</label>
                    <input
                      className="form-control"
                      value={entry.title}
                      onChange={(event) => updateEducationEntry(entry.id, "title", event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">Institution</label>
                    <input
                      className="form-control"
                      value={entry.institution}
                      onChange={(event) => updateEducationEntry(entry.id, "institution", event.target.value)}
                    />
                  </div>
                </div>
                <div className="candidate-profile-v2-form-grid two-col">
                  <div className="form-group">
                    <label className="font-sm color-text-mutted mb-10">Meta details</label>
                    <input
                      className="form-control"
                      value={entry.meta}
                      onChange={(event) => updateEducationEntry(entry.id, "meta", event.target.value)}
                    />
                  </div>
                  <div className="candidate-profile-v2-checkbox-row">
                    <label className="candidate-profile-v2-checkbox-item">
                      <input
                        type="checkbox"
                        checked={entry.verified}
                        onChange={(event) =>
                          updateEducationEntry(entry.id, "verified", event.target.checked)
                        }
                      />
                      <span>AI Verified</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="candidate-profile-v2-entry-actions">
                <button type="button" className="btn btn-border btn-sm">
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-grey-small candidate-profile-v2-btn-delete"
                  onClick={() => removeEducationEntry(entry.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        ref={(node) => registerSectionRef("skills", node)}
        className="candidate-profile-v2-section-card"
      >
        <div className="candidate-profile-v2-card-header">
          <div className="candidate-profile-v2-title-wrap">
            <h5 className="candidate-profile-v2-card-title">Step 5: Skills</h5>
            <span className="candidate-profile-v2-badge is-brand">
              {profileData.selectedSkills.length} selected
            </span>
          </div>
          <button type="button" className="btn btn-default btn-sm">
            Add skill
          </button>
        </div>
        <div className="candidate-profile-v2-card-body">
          <p className="ai-note-inline">
            Smart AI recommendation note: suggested skills are generated from your parsed CV profile.
          </p>
          <div className="candidate-profile-v2-subheader">
            <h6>Suggested for {profileData.trade}</h6>
            <small>Click to toggle</small>
          </div>
          <div className="candidate-profile-v2-tags">
            {profileData.suggestedSkills.map((skill) => {
              const isSelected = profileData.selectedSkills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  className={`candidate-profile-v2-tag ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                  {isSelected && <span className="candidate-profile-v2-tag-close">x</span>}
                </button>
              );
            })}
          </div>

          <div className="candidate-profile-v2-divider" />

          <div className="candidate-profile-v2-subheader">
            <h6>Your skills with proficiency</h6>
          </div>
          <div className="candidate-profile-v2-table-wrap">
            <table className="candidate-profile-v2-table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Proficiency</th>
                  <th>Years</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {profileData.skillMatrix.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <span className={`candidate-profile-v2-badge ${getSkillBadgeClass(item.proficiency)}`}>
                        {item.proficiency}
                      </span>
                    </td>
                    <td>{item.years}</td>
                    <td>
                      <button type="button" className="btn btn-border btn-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section
        id="documents"
        ref={(node) => registerSectionRef("documents", node)}
        className="candidate-profile-v2-section-card"
      >
        <div className="candidate-profile-v2-card-header">
          <div className="candidate-profile-v2-title-wrap">
            <h5 className="candidate-profile-v2-card-title">Step 2: Upload Documents</h5>
            <span className="candidate-profile-v2-badge is-success">{documentSummary.verified} verified</span>
            <span className="candidate-profile-v2-badge is-warning">{documentSummary.pending} pending</span>
          </div>
          <button type="button" className="btn btn-border btn-sm" onClick={addCustomDocument}>
            Add document
          </button>
        </div>
        <div className="candidate-profile-v2-card-body">
          <p className="ai-note-inline">
            Your CV and documents are being scanned by Smart AI. Parsing and verification may take some time.
            Once completed, profile fields below are prefilled for your final review.
          </p>
          <div className="candidate-profile-v2-doc-grid">
            <article className="candidate-profile-v2-doc-card">
              <div className="candidate-profile-v2-doc-head">
                <h6>{profileData.documents.nationalId.label}</h6>
                <span
                  className={`candidate-profile-v2-badge ${
                    getStatusDetails(profileData.documents.nationalId.status).className
                  }`}
                >
                  {getStatusDetails(profileData.documents.nationalId.status).label}
                </span>
              </div>
              <div className="candidate-profile-v2-doc-body">
                <p className="candidate-profile-v2-doc-main">{profileData.documents.nationalId.description}</p>
                {profileData.documents.nationalId.metaLines.map((line) => (
                  <p key={line} className="candidate-profile-v2-doc-meta">
                    {line}
                  </p>
                ))}
                <div className="candidate-profile-v2-mini-upload-grid">
                  {["frontFile", "backFile"].map((fieldKey) => {
                    const currentFile = profileData.documents.nationalId[fieldKey];
                    const label = fieldKey === "frontFile" ? "Front side" : "Back side";
                    const inputId = sanitizeId(`national-id-${fieldKey}`);

                    return (
                      <div key={fieldKey} className={`candidate-profile-v2-mini-upload ${currentFile ? "uploaded" : ""}`}>
                        <input
                          id={inputId}
                          type="file"
                          className="candidate-profile-v2-hidden-input"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(event) =>
                            handleDocumentUpload("nationalId", event.target.files?.[0], fieldKey)
                          }
                        />
                        <label htmlFor={inputId} className="candidate-profile-v2-mini-upload-trigger">
                          <strong>{label}</strong>
                          <small>
                            {currentFile
                              ? `${currentFile.name} | ${currentFile.size}`
                              : fieldKey === "frontFile"
                              ? "Required"
                              : "Optional"}
                          </small>
                        </label>
                        {currentFile && (
                          <button
                            type="button"
                            className="candidate-profile-v2-clear-file"
                            onClick={() => clearDocumentUpload("nationalId", fieldKey)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="candidate-profile-v2-doc-foot">{profileData.documents.nationalId.footerNote}</div>
            </article>

            {["passport", "itiCertificate", "experienceLetter", "medicalFitness"].map((docKey) => {
              const documentData = profileData.documents[docKey];
              const statusDetails = getStatusDetails(documentData.status);

              return (
                <article key={docKey} className="candidate-profile-v2-doc-card">
                  <div className="candidate-profile-v2-doc-head">
                    <h6>{documentData.label}</h6>
                    <span className={`candidate-profile-v2-badge ${statusDetails.className}`}>
                      {statusDetails.label}
                    </span>
                  </div>
                  <div className="candidate-profile-v2-doc-body">
                    <p className="candidate-profile-v2-doc-main">{documentData.description}</p>
                    {documentData.metaLines.map((line) => (
                      <p key={line} className="candidate-profile-v2-doc-meta">
                        {line}
                      </p>
                    ))}

                    {documentData.type === "readonly" ? (
                      <div className="candidate-profile-v2-upload-zone is-uploaded is-readonly">
                        <p className="candidate-profile-v2-upload-title">Certificate uploaded</p>
                        <p className="candidate-profile-v2-upload-sub">
                          {documentData.file?.name} | {documentData.file?.size}
                        </p>
                      </div>
                    ) : (
                      renderSingleUploadZone(docKey, documentData)
                    )}
                  </div>
                  <div className="candidate-profile-v2-doc-foot">{documentData.footerNote}</div>
                </article>
              );
            })}

            {profileData.customDocuments.map((documentData) => {
              const statusDetails = getStatusDetails(documentData.status);
              return (
                <article key={documentData.id} className="candidate-profile-v2-doc-card">
                  <div className="candidate-profile-v2-doc-head">
                    <h6>{documentData.label}</h6>
                    <span className={`candidate-profile-v2-badge ${statusDetails.className}`}>
                      {statusDetails.label}
                    </span>
                  </div>
                  <div className="candidate-profile-v2-doc-body">
                    <p className="candidate-profile-v2-doc-main">{documentData.description}</p>
                    {documentData.metaLines.map((line) => (
                      <p key={line} className="candidate-profile-v2-doc-meta">
                        {line}
                      </p>
                    ))}
                    {renderSingleUploadZone("", documentData, true, documentData.id)}
                  </div>
                  <div className="candidate-profile-v2-doc-foot">{documentData.footerNote}</div>
                </article>
              );
            })}
          </div>

          <div className="candidate-profile-v2-privacy-note">
            Your identity number is not stored in plain text. Verified document data is only shared with
            authorized employers.
          </div>
        </div>
      </section>

      <section
        id="cv"
        ref={(node) => registerSectionRef("cv", node)}
        className="candidate-profile-v2-section-card"
      >
        <div className="candidate-profile-v2-card-header">
          <div className="candidate-profile-v2-title-wrap">
            <h5 className="candidate-profile-v2-card-title">Step 6: CV Preview</h5>
          </div>
          <div className="candidate-profile-v2-actions">
            <button type="button" className="btn btn-border btn-sm">
              Download PDF
            </button>
            <button type="button" className="btn btn-default btn-sm">
              Share CV link
            </button>
          </div>
        </div>
        <div className="candidate-profile-v2-card-body">
          <p className="ai-note-inline">
            Smart AI note: this CV view is generated from parsed and verified profile data.
          </p>
          <div className="candidate-profile-v2-cv-note">
            Contact details are masked. Employers can view full contact after profile unlock.
          </div>
          <div className="candidate-profile-v2-cv-box">
            <div className="candidate-profile-v2-cv-head">
              <h4>{profileName}</h4>
              <p>
                {profileData.trade} | {profileData.yearsOfExperience} years experience
              </p>
              <small>
                {location} | {maskedMobile} | {profileEmail}
              </small>
            </div>
            <div className="candidate-profile-v2-cv-grid">
              <div>
                <h6>Work experience</h6>
                {profileData.workHistory.slice(0, 2).map((entry) => (
                  <div key={entry.id} className="candidate-profile-v2-cv-item">
                    <strong>
                      {entry.title} - {entry.company}
                    </strong>
                    <p>
                      {entry.period} | {entry.location}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h6>Skills</h6>
                <div className="candidate-profile-v2-cv-skills">
                  {profileData.selectedSkills.slice(0, 8).map((skill) => (
                    <span key={skill} className="candidate-profile-v2-badge is-brand">
                      {skill}
                    </span>
                  ))}
                </div>
                <h6>Education</h6>
                <div className="candidate-profile-v2-cv-item">
                  <strong>{profileData.education[0]?.title}</strong>
                  <p>{profileData.education[0]?.institution}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="candidate-profile-v2-cv-complete">
            Profile completion score: <strong>{completionPercent}%</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileTabs;

