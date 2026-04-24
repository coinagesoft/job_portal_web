import JobDetailHero from './components/JobDetailHero';
import JobOverview from './components/JobOverview';
import JobContent from './components/JobContent';
import CompanySidebar from './components/CompanySidebar';
import FeaturedJobs from './components/FeaturedJobs';
import Newsletter from './components/Newsletter';

const JobDetailsPage = () => {
  return (
    <main className="main">
      <JobDetailHero />
      <section className="section-box mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <JobOverview />
              <JobContent />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
              <CompanySidebar />
            </div>
          </div>
        </div>
      </section>
      <FeaturedJobs />
      <Newsletter />
    </main>
  );
};

export default JobDetailsPage;

