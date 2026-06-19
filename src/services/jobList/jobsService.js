import api from "../api";

export const getJobs = (params = {}) =>
  api.get("/api/candidate/jobs", {
    params,
  });