import SupportTicketCenter from "@/components/SupportTicketCenter";

export const metadata = {
  title: "Employer Help & Support - Job Portal",
  description: "Employer support tickets and admin responses"
};

const EmployerHelpSupportPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="candidate-inner-panel">
            <h3 className="mt-0 color-brand-1 mb-15">Help & Support</h3>
            <p className="font-md color-text-paragraph-2 mb-30">
              Raise support issues for postings, applicant flow, wallet, and invoices. Admin replies appear in ticket threads.
            </p>
            <SupportTicketCenter
              audience="employer"
              title="Employer Support Desk"
              description="Share job ID, invoice ID, or candidate ID in your ticket for faster resolution."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerHelpSupportPage;
