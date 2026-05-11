import Preloader from "@/app/Homepage/components/Preloader";
import HeroBanner from "@/app/Homepage/components/HeroBanner";
import ExploreMarketplace from "@/app/Homepage/components/ExploreMarketplace";
import BrowseByCategory from "./components/BrowseByCategory";
import HowItWorks from "./components/HowItWorks";
import JobsByLocation from "./components/JobsByLocation";
import JobsByRole from "./components/JobsByRole";
import LatestJobsNew from "./components/LatestJobsNew";
import StatsSectionNew from "./components/StatsSectionNew";
import TopRecruiters from "./components/TopRecruiters";

export const metadata = {
  title: "Jobbox - New Homepage Sample",
  description: "Template-based homepage sample route",
};

export default function HomepageNewPage() {
  return (
    <>
      <Preloader />
      <main className="main">
        <HeroBanner />
        <BrowseByCategory />
        <StatsSectionNew />
        <HowItWorks />
        <LatestJobsNew />
        <JobsByLocation />
        <TopRecruiters />
        <JobsByRole />
        <ExploreMarketplace />
      </main>
    </>
  );
}
