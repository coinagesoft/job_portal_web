"use client";

import SettingsPageShell from "@/app/candidate-profile/settings/components/SettingsPageShell";
import SupportTicketCenter from "@/components/SupportTicketCenter";

const EmployerHelpSupportPage = () => {
  return (
    <SettingsPageShell
      title="Help & Support"
      description="Raise support issues for postings, applicant flow, wallet, and invoices. Admin replies appear in ticket threads."
    >
      <div className="candidate-help-support-page">
        <SupportTicketCenter
          audience="employer"
          title="Employer Support Desk"
          description="Share job ID, invoice ID, or candidate ID in your ticket for faster resolution."
        />
      </div>
    </SettingsPageShell>
  );
};

export default EmployerHelpSupportPage;