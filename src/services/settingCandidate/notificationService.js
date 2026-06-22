import api from "../api";

export const getNotifications = (candidateId) =>
  api.get("/api/candidate/settings/notifications", {
    params: {
      candidateId,
    },
  });

export const updateNotifications = (
  candidateId,
  payload
) =>
  api.put(
    "/api/candidate/settings/notifications",
    payload,
    {
      params: {
        candidateId,
      },
    }
  );

export const resetNotifications = (candidateId) =>
  api.put(
    "/api/candidate/settings/notifications/reset",
    {},
    {
      params: {
        candidateId,
      },
    }
  );