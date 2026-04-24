export const mockProfile = {
  salaryExpectation: 45000,
  isITI: true,
  passportNumber: "Z1234567",
  passportExpiry: "2028-05-15",
  id: 1,
  avatar: "/assets/imgs/page/candidates/candidate-profile.png",
  firstName: "Ramesh Kumar",
  lastName: "Sharma",
  fullName: "Ramesh Kumar Sharma",
  mobile: "+91 98765 43210",
  email: "ramesh@email.com",
  trade: "Senior Electrician",
  yearsOfExperience: 8,
  nationality: "Indian",
  dob: "1992-07-14",
  gender: "Male",
  city: "Pune",
  state: "Maharashtra",
  pin: "411001",
  address: "",
  role: "",
  category: "",
  hasDisability: false,
  disabilityNote: "",
  preferredWorkLocation: "",
  jobType: "",
  summary:
    "Experienced senior electrician with 8 years in industrial and commercial electrical work. Skilled in panel wiring, motor winding, and PLC basics.",

  availableForWork: true,
  completionHint: "Add work history to reach 80%",
  sidebarBadges: ["ID Verified", "ITI Certified", "Available"],
  workHistory: [
    {
      id: "work-1",
      title: "Senior Electrician",
      company: "ABC Engineering Pvt Ltd",
      startDate: "2020-01-01",
      endDate: "Present",
      period: "Jan 2020 - Present", // legacy
      location: "Pune, Maharashtra",
      current: true,
      description:
        "Installation and maintenance of industrial electrical systems, panel wiring, motor testing, and safety audits."
    },
    {
      id: "work-2",
      title: "Electrician",
      company: "XYZ Power Solutions",
      startDate: "2016-03-01",
      endDate: "2019-12-31",
      period: "Mar 2016 - Dec 2019", // legacy
      location: "Mumbai, Maharashtra",
      current: false,
      description:
        "Maintenance of electrical substations and residential wiring projects with periodic safety checks."
    }
  ],
  education: [
    {
      id: "edu-1",
      title: "ITI - Electrician Trade",
      institution: "Govt. Industrial Training Institute, Pune",
      meta: "Passed: 2014 | Cert No: ITI/2014/PUN/7823",
      verified: true
    },
    {
      id: "edu-2",
      title: "SSC - 10th Standard",
      institution: "Maharashtra State Board of Secondary Education",
      meta: "Passed: 2012",
      verified: false
    }
  ],
  suggestedSkills: [
    "Wiring",
    "Panel work",
    "Motor winding",
    "MCB / RCCB",
    "Transformer",
    "PLC basics",
    "HT / LT lines",
    "Earthing",
    "Safety",
    "Cable laying",
    "Solar PV",
    "SCADA"
  ],
  selectedSkills: ["Wiring", "Panel work", "Motor winding", "PLC basics", "Earthing", "Safety"],
  skillMatrix: [
    { id: "skill-1", name: "Wiring", proficiency: "Expert", years: 8 },
    { id: "skill-2", name: "Panel work", proficiency: "Expert", years: 6 },
    { id: "skill-3", name: "PLC basics", proficiency: "Intermediate", years: 2 },
    { id: "skill-4", name: "Motor winding", proficiency: "Expert", years: 7 }
  ],
  documents: {
    nationalId: {
      label: "National ID",
      status: "verified",
      type: "dual",
      description: "Aadhaar Card",
      metaLines: ["Uploaded: 01 Apr 2026", "Extracted name: Ramesh K. Sharma"],
      frontFile: { name: "aadhaar_front.jpg", size: "340 KB" },
      backFile: null,
      footerNote: "ID hash stored securely"
    },
    passport: {
      label: "Passport",
      status: "missing",
      type: "single",
      description: "Required for international jobs.",
      metaLines: ["Minimum 6 months validity needed."],
      file: null,
      footerNote: "Unlocks international job applications"
    },
    itiCertificate: {
      label: "ITI Certificate",
      status: "verified",
      type: "readonly",
      description: "Electrician Trade",
      metaLines: ["Year: 2014", "Cert: ITI/2014/PUN/7823", "AI extracted and verified"],
      file: { name: "iti_certificate_2014.pdf", size: "1.2 MB" },
      footerNote: "AI verified"
    },
    experienceLetter: {
      label: "Experience Letter",
      status: "optional",
      type: "single",
      description: "Upload experience or relieving letter from your previous employer.",
      metaLines: ["Adds credibility to work history."],
      file: null,
      footerNote: "Adds credibility to work history"
    },
    medicalFitness: {
      label: "Medical Fitness",
      status: "optional",
      type: "single",
      description: "Required for offshore and high-risk roles.",
      metaLines: ["Upload a valid medical fitness certificate."],
      file: null,
      footerNote: "Required for offshore jobs"
    }
  },
  customDocuments: []
};

export const mockMyJobs = [
  {
    id: 1,
    company: "LinkedIn",
    logo: "/assets/imgs/brands/brand-5.png",
    title: "React Native Web Developer",
    type: "Fulltime",
    time: "4 mins ago",
    location: "New York, US",
    price: "$500",
    priceUnit: "/Hour",
    tags: ["Adobe XD", "Figma"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 2,
    company: "Quora JSC",
    logo: "/assets/imgs/brands/brand-6.png",
    title: "Senior System Engineer",
    type: "Part time",
    time: "5 mins ago",
    location: "New York, US",
    price: "$800",
    priceUnit: "/Hour",
    tags: ["Adobe XD", "Figma"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 3,
    company: "Nintendo",
    logo: "/assets/imgs/brands/brand-7.png",
    title: "Products Manager",
    type: "Full time",
    time: "6 mins ago",
    location: "New York, US",
    price: "$250",
    priceUnit: "/Hour",
    tags: ["Adobe XD", "Figma"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 4,
    company: "Periscope",
    logo: "/assets/imgs/brands/brand-8.png",
    title: "Lead Quality Control QA",
    type: "Full time",
    time: "6 mins ago",
    location: "New York, US",
    price: "$250",
    priceUnit: "/Hour",
    tags: ["Adobe XD", "Figma"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  }
];

export const mockSavedJobs = [
  ...mockMyJobs,
  {
    id: 5,
    company: "LinkedIn",
    logo: "/assets/imgs/brands/brand-1.png",
    title: "UI / UX Designer fulltime",
    type: "Fulltime",
    time: "4 minutes ago",
    location: "New York, US",
    price: "$500",
    priceUnit: "/Hour",
    tags: ["Adobe XD", "Figma", "Photoshop"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 6,
    company: "Adobe Illustrator",
    logo: "/assets/imgs/brands/brand-2.png",
    title: "Full Stack Engineer",
    type: "Part time",
    time: "5 minutes ago",
    location: "New York, US",
    price: "$800",
    priceUnit: "/Hour",
    tags: ["React", "NodeJS"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 7,
    company: "Bing Search",
    logo: "/assets/imgs/brands/brand-3.png",
    title: "Java Software Engineer",
    type: "Full time",
    time: "6 minutes ago",
    location: "New York, US",
    price: "$250",
    priceUnit: "/Hour",
    tags: ["Python", "AWS", "Photoshop"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 8,
    company: "Dailymotion",
    logo: "/assets/imgs/brands/brand-4.png",
    title: "Frontend Developer",
    type: "Full time",
    time: "6 minutes ago",
    location: "New York, US",
    price: "$250",
    priceUnit: "/Hour",
    tags: ["Typescript", "Java"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 9,
    company: "LinkedIn",
    logo: "/assets/imgs/brands/brand-5.png",
    title: "React Native Web Developer",
    type: "Fulltime",
    time: "4 minutes ago",
    location: "New York, US",
    price: "$500",
    priceUnit: "/Hour",
    tags: ["Angular"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 10,
    company: "Quora JSC",
    logo: "/assets/imgs/brands/brand-6.png",
    title: "Senior System Engineer",
    type: "Part time",
    time: "5 minutes ago",
    location: "New York, US",
    price: "$800",
    priceUnit: "/Hour",
    tags: ["PHP", "Android"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 11,
    company: "Nintendo",
    logo: "/assets/imgs/brands/brand-7.png",
    title: "Products Manager",
    type: "Full time",
    time: "6 minutes ago",
    location: "New York, US",
    price: "$250",
    priceUnit: "/Hour",
    tags: ["ASP .Net", "Figma"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  },
  {
    id: 12,
    company: "Periscope",
    logo: "/assets/imgs/brands/brand-8.png",
    title: "Lead Quality Control QA",
    type: "Full time",
    time: "6 minutes ago",
    location: "New York, US",
    price: "$250",
    priceUnit: "/Hour",
    tags: ["iOS", "Laravel", "Golang"],
    description: "Verified profile details and role requirements are shown clearly so applicants can assess fit before applying."
  }
];

export const mockApplicationStatuses = [
  {
    id: 1,
    company: "LinkedIn",
    logo: "/assets/imgs/brands/brand-1.png",
    title: "UI / UX Designer Fulltime",
    type: "Fulltime",
    location: "New York, US",
    appliedOn: "02 Apr 2026",
    updatedOn: "08 Apr 2026",
    stage: "Profile Shortlisted",
    status: "Shortlisted",
    progress: 55,
    price: "$500",
    priceUnit: "/Hour",
    tags: ["Adobe XD", "Figma", "Photoshop"],
    description:
      "Your profile matched the role requirements. Recruiter has shortlisted your application.",
    recruiterNote:
      "Strong portfolio fit for this role. Please keep your design case study and resume updated.",
    nextActionTitle: "Submit updated portfolio PDF",
    nextActionDate: "Before 18 Apr 2026",
    nextActionType: "document",
    nextActionCta: {
      label: "Upload Portfolio",
      href: "/candidate-profile"
    }
  },
  {
    id: 2,
    company: "Adobe Illustrator",
    logo: "/assets/imgs/brands/brand-2.png",
    title: "Full Stack Engineer",
    type: "Part time",
    location: "New York, US",
    appliedOn: "29 Mar 2026",
    updatedOn: "10 Apr 2026",
    stage: "Interview Scheduled",
    status: "Interview",
    progress: 80,
    price: "$800",
    priceUnit: "/Hour",
    tags: ["React", "NodeJS"],
    description:
      "Technical interview round is scheduled. Check your email for date and video call link.",
    recruiterNote:
      "Please be available 10 minutes early. Keep your camera and audio setup ready.",
    nextActionTitle: "Attend technical interview",
    nextActionDate: "16 Apr 2026, 11:30 AM",
    nextActionType: "interview",
    nextActionCta: {
      label: "View Interview Details",
      href: "/candidate-profile/application-status"
    }
  },
  {
    id: 3,
    company: "Bing Search",
    logo: "/assets/imgs/brands/brand-3.png",
    title: "Java Software Engineer",
    type: "Full time",
    location: "New York, US",
    appliedOn: "25 Mar 2026",
    updatedOn: "30 Mar 2026",
    stage: "Application Under Review",
    status: "In Review",
    progress: 35,
    price: "$250",
    priceUnit: "/Hour",
    tags: ["Python", "AWS", "Photoshop"],
    description:
      "Hiring team is reviewing your profile and portfolio. Expected update within 3-5 business days.",
    recruiterNote:
      "Your backend profile is relevant. The team may request a quick screening call.",
    nextActionTitle: "Keep phone and email active",
    nextActionDate: "Expected update by 19 Apr 2026",
    nextActionType: "followup",
    nextActionCta: {
      label: "Update Contact Preferences",
      href: "/candidate-profile"
    }
  },
  {
    id: 4,
    company: "Dailymotion",
    logo: "/assets/imgs/brands/brand-4.png",
    title: "Frontend Developer",
    type: "Full time",
    location: "New York, US",
    appliedOn: "21 Mar 2026",
    updatedOn: "27 Mar 2026",
    stage: "Application Closed",
    status: "Rejected",
    progress: 100,
    price: "$250",
    priceUnit: "/Hour",
    tags: ["Typescript", "Java"],
    description:
      "Position has been closed for this hiring cycle. You can reapply when this role opens again.",
    recruiterNote:
      "The role is currently paused. You were close to the shortlist and can apply for similar openings.",
    nextActionTitle: "Explore similar active roles",
    nextActionDate: "Available now",
    nextActionType: "closed",
    nextActionCta: {
      label: "Find Similar Jobs",
      href: "/jobs-list"
    }
  },
  {
    id: 5,
    company: "Nintendo",
    logo: "/assets/imgs/brands/brand-7.png",
    title: "Products Manager",
    type: "Full time",
    location: "New York, US",
    appliedOn: "12 Apr 2026",
    updatedOn: "12 Apr 2026",
    stage: "Application Submitted",
    status: "Applied",
    progress: 20,
    price: "$250",
    priceUnit: "/Hour",
    tags: ["ASP .Net", "Figma"],
    description:
      "Application was submitted successfully. Recruiter has not reviewed your profile yet.",
    recruiterNote:
      "Initial screening queue received. Keep your latest resume and contact details updated.",
    nextActionTitle: "No action required right now",
    nextActionDate: "Waiting for recruiter review",
    nextActionType: "pending",
    nextActionCta: {
      label: "View Submitted Profile",
      href: "/candidate-profile"
    }
  }
];

