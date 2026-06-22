import api from "../api";

export const saveJob = (jobId, candidateId) =>
  api.post(
    `/api/candidate/jobs/${jobId}/save`,
    null,
    {
      params: {
        candidateId,
      },
    }
  );
