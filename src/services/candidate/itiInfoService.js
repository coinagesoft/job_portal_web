import api from "../api";

export const getItiInfo = (candidateId) =>
  api.get("/api/candidate/profile/iti-info", {
    params: { candidateId },
  });

export const updateItiInfo = (candidateId, payload) =>
  api.put(
    "/api/candidate/profile/iti-info",
    payload,
    {
      params: { candidateId },
    }
  );