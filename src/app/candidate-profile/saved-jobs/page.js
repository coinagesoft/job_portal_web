import SavedJobsTab from '../components/SavedJobsTab';

export const metadata = {
  title: 'Saved Jobs - Job Portal',
  description: 'Candidate saved jobs page'
};

const CandidateSavedJobsPage = () => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="candidate-inner-panel">
            <SavedJobsTab />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CandidateSavedJobsPage;
