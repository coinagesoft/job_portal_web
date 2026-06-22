import api from "../api";

export const applyJob = (
  jobId,
  candidateId,
  payload
) =>
  api.post(
    `/api/candidate/jobs/${jobId}/apply`,
    payload,
    {
      params: {
        candidateId,
      },
    }
  );