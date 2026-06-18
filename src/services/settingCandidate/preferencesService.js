import api from "../api";

export const getPreferences = (candidateId) =>
  api.get("/api/candidate/settings/preferences", {
    params: { candidateId },
  });

export const updatePreferences = (
  candidateId,
  payload
) =>
  api.put(
    "/api/candidate/settings/preferences",
    payload,
    {
      params: { candidateId },
    }
  );