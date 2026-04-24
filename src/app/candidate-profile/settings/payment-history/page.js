import SettingsPageShell from '../components/SettingsPageShell';

const PAYMENT_SUMMARY = [
  { id: 'total-paid', label: 'Total Paid', value: '$1,680.00', tone: 'brand' },
  { id: 'invoices', label: 'Invoices', value: '8', tone: 'neutral' },
  { id: 'success', label: 'Successful', value: '7', tone: 'success' },
  { id: 'refunds', label: 'Refunds', value: '1', tone: 'warning' }
];

const PAYMENT_HISTORY = [
  {
    id: 'INV-2026-118',
    item: 'Candidate Plus Plan - Monthly',
    date: '02 Apr 2026',
    method: 'Visa **** 2481',
    amount: '$120.00',
    status: 'Paid'
  },
  {
    id: 'INV-2026-103',
    item: 'Resume Highlight Add-on',
    date: '17 Mar 2026',
    method: 'UPI',
    amount: '$30.00',
    status: 'Paid'
  },
  {
    id: 'INV-2026-087',
    item: 'Candidate Plus Plan - Monthly',
    date: '02 Mar 2026',
    method: 'Visa **** 2481',
    amount: '$120.00',
    status: 'Paid'
  },
  {
    id: 'INV-2026-062',
    item: 'Featured Application Boost',
    date: '11 Feb 2026',
    method: 'Net Banking',
    amount: '$25.00',
    status: 'Refunded'
  }
];

export const metadata = {
  title: 'Payment History - Job Portal',
  description: 'Candidate payment history page'
};

const CandidatePaymentHistoryPage = () => {
  return (
    <SettingsPageShell
      title="Payment History"
      description="Track your plan charges, add-ons, invoices, and payment status in one place."
    >
      <div className="candidate-payment-summary mb-25">
        {PAYMENT_SUMMARY.map((item) => (
          <div key={item.id} className={`candidate-payment-summary-card ${item.tone}`}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="candidate-settings-card">
        <div className="candidate-payment-head">
          <h5 className="mb-0">Transactions</h5>
          <button type="button" className="btn btn-default btn-small">
            Download Statement
          </button>
        </div>

        <div className="candidate-payment-table-wrap">
          <table className="candidate-payment-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Description</th>
                <th>Date</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {PAYMENT_HISTORY.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.item}</td>
                  <td>{row.date}</td>
                  <td>{row.method}</td>
                  <td>{row.amount}</td>
                  <td>
                    <span className={`candidate-payment-status ${row.status === 'Paid' ? 'paid' : 'refunded'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <button type="button" className="candidate-payment-download">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SettingsPageShell>
  );
};

export default CandidatePaymentHistoryPage;
