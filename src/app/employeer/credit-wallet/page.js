import Link from "next/link";

const walletMetrics = [
  { label: "Credits used (this month)", value: "7" },
  { label: "Profiles unlocked", value: "7" },
  { label: "Shared wallet", value: "Yes - 2 sub-users" }
];

const transactions = [
  { date: "06 Apr 2026", type: "Unlock", credits: "-2", details: "Ramesh K. Sharma - Band B" },
  { date: "05 Apr 2026", type: "Unlock", credits: "-1", details: "Priya Singh - Band A" },
  { date: "20 Mar 2026", type: "Unlock", credits: "-3", details: "Mohammed Asif - Band C" },
  { date: "15 Mar 2026", type: "Purchase", credits: "+10", details: "3-Month Growth Pack - INR 4,999" },
  { date: "23 Feb 2026", type: "Trial grant", credits: "+5", details: "Free trial credits (Band A only)" }
];

export const metadata = {
  title: "Employer Credit Wallet - Job Portal",
  description: "Review your employer credit balance and transactions."
};

const EmployerCreditWalletPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7">
                  <h3 className="mb-5">Credit Wallet</h3>
                  <span className="font-sm color-text-paragraph-2">Monitor credits used for profile unlocks</span>
                </div>
                <div className="col-xl-5 col-lg-5 text-lg-end mt-sm-15">
                  <Link className="btn btn-default btn-sm mr-10 mb-5" href="/employeer/buy-credits">
                    Buy more credits
                  </Link>
                  <Link className="btn btn-border btn-sm mb-5" href="/employeer/invoices">
                    View invoices
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up">
              <div className="card-block-info pt-20">
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <h4>3 credits remaining</h4>
                    <p className="font-sm color-text-paragraph mt-10">3-Month Growth Pack - Expires 20 Jun 2026</p>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 text-lg-end mt-md-15 mt-sm-15">
                    <span className="font-xs color-text-paragraph-2 d-block mb-5">Package expiry reminder enabled</span>
                    <span className="btn btn-grey-small">Expiry alert in 14d</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-20">
              {walletMetrics.map((metric) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={metric.label}>
                  <div className="card-grid-2 hover-up">
                    <div className="card-block-info pt-20 pb-20 text-center">
                      <p className="font-xs color-text-paragraph-2 mb-10">{metric.label}</p>
                      <h4 className="color-brand-1 mb-0">{metric.value}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-grid-2 hover-up mt-10">
              <div className="card-block-info pt-20">
                <h5 className="mb-15">Transaction History</h5>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Credits</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((txn) => (
                        <tr key={`${txn.date}-${txn.type}-${txn.credits}`}>
                          <td>{txn.date}</td>
                          <td>{txn.type}</td>
                          <td>{txn.credits}</td>
                          <td>{txn.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployerCreditWalletPage;
