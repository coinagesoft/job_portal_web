export const SUPPORT_TICKET_STORAGE_KEY = "jobportal_support_tickets_v2";

export const SUPPORT_TICKET_CATEGORIES = [
  "Profile & Resume",
  "Job Application",
  "Payment & Billing",
  "Account Access",
  "Technical Issue",
  "Other"
];

export const DEFAULT_SUPPORT_TICKETS = [
  {
    id: "SUP-4201",
    audience: "candidate",
    subject: "Resume parsing issue",
    category: "Profile & Resume",
    status: "In Progress",
    createdOn: "2026-04-14T09:20:00+05:30",
    updatedOn: "2026-04-14T12:45:00+05:30",
    messages: [
      {
        id: "msg-4201-1",
        sender: "candidate",
        senderLabel: "You",
        createdOn: "2026-04-14T09:20:00+05:30",
        text: "My resume upload completed, but experience details are not showing correctly."
      },
      {
        id: "msg-4201-2",
        sender: "admin",
        senderLabel: "Support Team",
        createdOn: "2026-04-14T12:45:00+05:30",
        text: "We have reprocessed your resume and corrected the extracted experience fields. Please refresh once."
      }
    ]
  },
  {
    id: "SUP-4178",
    audience: "candidate",
    subject: "Payment receipt copy request",
    category: "Payment & Billing",
    status: "Resolved",
    createdOn: "2026-04-09T15:10:00+05:30",
    updatedOn: "2026-04-09T17:02:00+05:30",
    messages: [
      {
        id: "msg-4178-1",
        sender: "candidate",
        senderLabel: "You",
        createdOn: "2026-04-09T15:10:00+05:30",
        text: "I need the registration payment receipt on my alternate email."
      },
      {
        id: "msg-4178-2",
        sender: "admin",
        senderLabel: "Support Team",
        createdOn: "2026-04-09T17:02:00+05:30",
        text: "Receipt has been sent to your alternate email address and is now available in Payment History."
      }
    ]
  },
  {
    id: "SUP-5103",
    audience: "employer",
    subject: "Job visibility reduced after edit",
    category: "Technical Issue",
    status: "In Progress",
    createdOn: "2026-04-13T11:05:00+05:30",
    updatedOn: "2026-04-13T16:40:00+05:30",
    messages: [
      {
        id: "msg-5103-1",
        sender: "employer",
        senderLabel: "You",
        createdOn: "2026-04-13T11:05:00+05:30",
        text: "After editing my job post, applications dropped and listing is not appearing in top results."
      },
      {
        id: "msg-5103-2",
        sender: "admin",
        senderLabel: "Support Team",
        createdOn: "2026-04-13T16:40:00+05:30",
        text: "We synced the listing index again. Your posting is now visible in active search results."
      }
    ]
  },
  {
    id: "SUP-5096",
    audience: "employer",
    subject: "Need tax invoice for credit purchase",
    category: "Payment & Billing",
    status: "Resolved",
    createdOn: "2026-04-11T10:32:00+05:30",
    updatedOn: "2026-04-11T13:18:00+05:30",
    messages: [
      {
        id: "msg-5096-1",
        sender: "employer",
        senderLabel: "You",
        createdOn: "2026-04-11T10:32:00+05:30",
        text: "Please share GST invoice for my last wallet top-up."
      },
      {
        id: "msg-5096-2",
        sender: "admin",
        senderLabel: "Support Team",
        createdOn: "2026-04-11T13:18:00+05:30",
        text: "Invoice is generated and added under Invoices section. A copy has also been emailed."
      }
    ]
  }
];

export const CANDIDATE_FAQ_ITEMS = [
  {
    id: "candidate-faq-1",
    question: "How can I improve profile visibility for recruiters?",
    answer:
      "Update certifications, preferred locations, and current availability. Complete profile fields increase shortlist chances."
  },
  {
    id: "candidate-faq-2",
    question: "Where can I track interview reminders and status updates?",
    answer:
      "Open My Applications for hiring stage updates and enable notification preferences from Settings."
  },
  {
    id: "candidate-faq-3",
    question: "How can I update the CV shared with employers?",
    answer:
      "Go to Candidate Profile, open Step 6: CV Preview, and update your latest details before applying."
  }
];

export const EMPLOYER_FAQ_ITEMS = [
  {
    id: "employer-faq-1",
    question: "How do I improve application quality for a posted job?",
    answer:
      "Add mandatory screening questions, clear compensation range, and shift details while posting."
  },
  {
    id: "employer-faq-2",
    question: "Where can I download billing and tax invoices?",
    answer:
      "All invoices are available under Credits & Wallets > Invoices, with downloadable copies."
  },
  {
    id: "employer-faq-3",
    question: "Can I get alerts for new applicants in real time?",
    answer:
      "Yes. Enable applicant alerts from employer notification settings to receive instant updates."
  }
];

