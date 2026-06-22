// services/candidate/profileSummaryService.js

import api from "../api";

export const getProfileSummary = (candidateId) =>
  api.get(
    "/api/candidate/profile/summary",
    {
      params: {
        candidateId,
      },
    }
  );