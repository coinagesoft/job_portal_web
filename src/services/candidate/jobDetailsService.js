import api from "../api";

export const getJobDetails = (jobId) =>
  api.get(`/api/candidate/jobs/${jobId}`);