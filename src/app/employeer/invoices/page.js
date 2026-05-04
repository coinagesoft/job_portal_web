import Link from "next/link";

const invoices = [
  {
    invoiceNo: "SB/2026/001234",
    date: "15 Mar 2026",
    type: "Credit Purchase",
    amount: "INR 4,999",
    gst: "INR 900",
    total: "INR 5,899",
    downloadable: true
  },
  {
    invoiceNo: "SB/2026/000891",
    date: "10 Feb 2026",
    type: "Top-up",
    amount: "INR 2,499",
    gst: "INR 450",
    total: "INR 2,949",
    downloadable: true
  },
  {
    invoiceNo: "-",
    date: "23 Jan 2026",
    type: "Trial grant",
    amount: "-",
    gst: "-",
    total: "Free",
    downloadable: false
  }
];

export const metadata = {
  title: "Employer Invoices - Job Portal",
  description: "View billing history and download invoices."
};

const EmployerInvoicesPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="content-page">
            <div className="box-filters-job">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <h3 className="mb-5">Invoices & Transactions</h3>
                  <span className="font-sm color-text-paragraph-2">Download GST-compliant billing records</span>
                </div>
                <div className="col-xl-4 col-lg-4 text-lg-end mt-sm-15">
                  <Link className="btn btn-border btn-sm mr-10 mb-5" href="/employeer/credit-wallet">
                    Credit Wallet
                  </Link>
                  <Link className="btn btn-default btn-sm mb-5" href="/employeer/buy-credits">
                    Buy Credits
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up mt-20">
              <div className="card-block-info pt-20">
                <div className="row align-items-end">
                  <div className="col-md-4 col-sm-12">
                    <label className="form-label mb-5">From</label>
                    <input className="form-control" type="date" defaultValue="2026-01-01" />
                  </div>
                  <div className="col-md-4 col-sm-12 mt-sm-10">
                    <label className="form-label mb-5">To</label>
                    <input className="form-control" type="date" defaultValue="2026-04-06" />
                  </div>
                  <div className="col-md-4 col-sm-12 mt-sm-10 text-md-end">
                    <button className="btn btn-border btn-sm mt-20" type="button">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-grid-2 hover-up mt-20">
              <div className="card-block-info pt-20">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Invoice no.</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>GST</th>
                        <th>Total</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={`${invoice.invoiceNo}-${invoice.date}`}>
                          <td>
                            <span className="font-sm">{invoice.invoiceNo}</span>
                          </td>
                          <td>{invoice.date}</td>
                          <td>{invoice.type}</td>
                          <td>{invoice.amount}</td>
                          <td>{invoice.gst}</td>
                          <td>
                            <strong>{invoice.total}</strong>
                          </td>
                          <td>
                            {invoice.downloadable ? (
                              <button className="btn btn-border btn-sm" type="button">
                                Download PDF
                              </button>
                            ) : (
                              <span className="font-xs color-text-paragraph-2">-</span>
                            )}
                          </td>
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

export default EmployerInvoicesPage;
