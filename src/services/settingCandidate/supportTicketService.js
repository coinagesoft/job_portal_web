import api from "../api";

export const createTicket = (candidateId, payload) => {
  const formData = new FormData();

  formData.append("Subject", payload.subject);
  formData.append("Category", payload.category);
  formData.append("Description", payload.description);

  return api.post(
    `/api/candidate/settings/support/tickets/${candidateId}`    ,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getTickets = (candidateId) =>
  api.get(
    `/api/candidate/settings/support/tickets/${candidateId}`
  );

export const getTicketSummary = (candidateId) =>
  api.get(
    `/api/candidate/settings/support/${candidateId}/summary`
  );

export const getThread = (ticketId, candidateId) =>
  api.get(
    `/api/candidate/settings/support/thread/${ticketId}`,
    {
      params: { candidateId },
    }
  );

export const replyTicket = (
  ticketId,
  candidateId,
  payload
) =>
  api.post(
    `/api/candidate/settings/support/tickets/${ticketId}/reply/${candidateId}`,
    payload
  );

export const resolveTicket = (ticketId) =>
  api.patch(
    `/api/candidate/settings/support/tickets/${ticketId}/resolve`
  );
