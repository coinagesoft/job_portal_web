import Link from "next/link";
import { mockProfile } from "../components/data";

export const metadata = {
  title: "Candidate CV Preview - Job Portal",
  description: "Full candidate CV preview"
};

const CandidateProfilePreviewPage = () => {
  const fullName = mockProfile.fullName || `${mockProfile.firstName} ${mockProfile.lastName}`;

  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="candidate-inner-panel">
            <div className="d-flex justify-content-between align-items-center mb-20">
              <h3 className="mt-0 color-brand-1 mb-0">Full CV Preview</h3>
              <Link href="/candidate-profile#cv" className="btn btn-border btn-sm">
                Back to Profile
              </Link>
            </div>

            <div className="candidate-settings-card">
              <h4>{fullName}</h4>
              <p className="font-sm color-text-paragraph-2 mb-20">
                {mockProfile.trade} · {mockProfile.yearsOfExperience} years · {mockProfile.city}, {mockProfile.state}
              </p>

              <h6>Summary</h6>
              <p className="font-sm color-text-paragraph mb-20">{mockProfile.summary}</p>

              <h6>Work Experience</h6>
              {mockProfile.workHistory.map((entry) => (
                <div key={entry.id} className="candidate-ticket-item mb-10">
                  <strong>{entry.title} - {entry.company}</strong>
                  <p className="mb-5">
                    {entry.startDate || "-"} to {entry.current ? "Present" : entry.endDate || "-"} · {entry.location}
                  </p>
                  <small>{entry.description}</small>
                </div>
              ))}

              <h6 className="mt-20">Education</h6>
              {mockProfile.education.map((entry) => (
                <div key={entry.id} className="candidate-ticket-item mb-10">
                  <strong>{entry.title}</strong>
                  <p className="mb-0">{entry.institution}</p>
                  <small>{entry.meta}</small>
                </div>
              ))}

              <h6 className="mt-20">Skills</h6>
              <div className="candidate-profile-v2-cv-skills">
                {mockProfile.selectedSkills.map((skill) => (
                  <span key={skill} className="candidate-profile-v2-badge is-brand">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CandidateProfilePreviewPage;

