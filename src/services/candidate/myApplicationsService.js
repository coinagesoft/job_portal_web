import api from "../api";

export const getMyApplications = (candidateId) =>
  api.get(
    "/api/candidate/jobs/my-applications",
    {
      params: {
        candidateId,
      },
    }
  );