import api from "../api";

export const getSavedJobs = (candidateId) =>
  api.get("/api/candidate/jobs/saved", {
    params: { candidateId },
  });