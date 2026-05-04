import { DEFAULT_SUPPORT_TICKETS, SUPPORT_TICKET_STORAGE_KEY } from "@/constants/supportTicketsData";

const nowIso = () => new Date().toISOString();

const createMessage = ({ sender, text }) => ({
  id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  sender,
  senderLabel: sender === "admin" ? "Support Team" : "You",
  createdOn: nowIso(),
  text: String(text || "").trim()
});

const createTicket = ({ audience, subject, category, description }, currentTickets) => {
  const nextNumber = 5200 + currentTickets.length + 1;
  const createdOn = nowIso();
  return {
    id: `SUP-${nextNumber}`,
    audience,
    subject: String(subject || "").trim(),
    category: String(category || "").trim(),
    status: "Open",
    createdOn,
    updatedOn: createdOn,
    messages: [createMessage({ sender: audience, text: description })]
  };
};

const normalizeTicketShape = (ticket) => {
  if (!ticket || typeof ticket !== "object") return null;

  return {
    id: ticket.id,
    audience: ticket.audience,
    subject: ticket.subject,
    category: ticket.category,
    status: ticket.status || "Open",
    createdOn: ticket.createdOn || nowIso(),
    updatedOn: ticket.updatedOn || ticket.createdOn || nowIso(),
    messages: Array.isArray(ticket.messages) ? ticket.messages : []
  };
};

export const loadSupportTickets = () => {
  if (typeof window === "undefined") return DEFAULT_SUPPORT_TICKETS;

  try {
    const raw = window.localStorage.getItem(SUPPORT_TICKET_STORAGE_KEY);
    if (!raw) return DEFAULT_SUPPORT_TICKETS;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_SUPPORT_TICKETS;

    const normalized = parsed.map(normalizeTicketShape).filter(Boolean);
    return normalized.length > 0 ? normalized : DEFAULT_SUPPORT_TICKETS;
  } catch (error) {
    console.warn("Failed to parse support tickets from storage", error);
    return DEFAULT_SUPPORT_TICKETS;
  }
};

export const saveSupportTickets = (tickets) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SUPPORT_TICKET_STORAGE_KEY, JSON.stringify(tickets));
  } catch (error) {
    console.warn("Failed to save support tickets", error);
  }
};

export const addNewSupportTicket = ({ audience, subject, category, description }, currentTickets) => {
  return [createTicket({ audience, subject, category, description }, currentTickets), ...currentTickets];
};

export const addTicketMessage = ({ ticketId, sender, text }, currentTickets) => {
  const messageText = String(text || "").trim();
  if (!messageText) return currentTickets;

  return currentTickets.map((ticket) => {
    if (ticket.id !== ticketId) return ticket;

    const nextStatus = sender === "admin" ? "In Progress" : ticket.status === "Resolved" ? "Open" : ticket.status;
    return {
      ...ticket,
      status: nextStatus,
      updatedOn: nowIso(),
      messages: [...ticket.messages, createMessage({ sender, text: messageText })]
    };
  });
};

export const resolveTicket = (ticketId, currentTickets) => {
  return currentTickets.map((ticket) =>
    ticket.id === ticketId
      ? {
          ...ticket,
          status: "Resolved",
          updatedOn: nowIso()
        }
      : ticket
  );
};

