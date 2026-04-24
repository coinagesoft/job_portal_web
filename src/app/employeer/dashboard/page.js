import { redirect } from "next/navigation";

export const metadata = {
  title: "Employer Dashboard - Job Portal",
  description: "Dashboard route forwards to the CV search workspace."
};

const EmployerDashboardPage = () => {
  redirect("/employeer/cv-search");
};

export default EmployerDashboardPage;
