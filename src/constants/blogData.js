export const BLOG_POSTS = [
  {
    id: "blog-001",
    slug: "how-to-pass-a-trade-skill-test",
    category: "Hiring Tips",
    title: "How to Pass a Trade Skill Test in the First Attempt",
    excerpt:
      "Practical preparation steps, document checklist, and interview tips to improve your shortlist chances.",
    author: "Ritika Menon",
    date: "18 Apr 2026",
    readTime: "7 min read",
    image: "/assets/imgs/page/homepage1/img-news1.png",
    authorImage: "/assets/imgs/page/homepage1/user1.png",
    content: [
      "Skill rounds are now part of most hiring pipelines for technical and field roles. A strong score depends on preparation, safety awareness, and clear communication.",
      "Start by revising tool handling basics, measurement standards, and role-specific quality checks. Practice with real-world scenarios instead of only theory.",
      "Before interview day, keep your ID proof, certifications, and experience records ready. Recruiters prioritize profiles with complete and verifiable documents.",
      "During the assessment, explain your process while performing tasks. Structured steps and safety compliance often matter as much as speed."
    ]
  },
  {
    id: "blog-002",
    slug: "common-reasons-job-applications-get-rejected",
    category: "Application Guide",
    title: "Common Reasons Job Applications Get Rejected and How to Fix Them",
    excerpt:
      "Learn the top mistakes in applications and improve your profile visibility with quick corrections.",
    author: "Arjun Das",
    date: "14 Apr 2026",
    readTime: "6 min read",
    image: "/assets/imgs/page/homepage1/img-news2.png",
    authorImage: "/assets/imgs/page/homepage1/user2.png",
    content: [
      "Incomplete profiles, outdated resumes, and missing certifications are the most frequent rejection triggers.",
      "Use clear job titles, updated contact details, and role-specific keywords. Add measurable work achievements where possible.",
      "If the employer asks screening questions, answer each one with practical details. Generic answers reduce selection probability.",
      "Review every application before submission and ensure your profile reflects your current availability and preferred location."
    ]
  },
  {
    id: "blog-003",
    slug: "how-employers-screen-candidates-faster",
    category: "Employer Insights",
    title: "How Employers Screen Candidates Faster Using Structured Job Questions",
    excerpt:
      "A practical format for screening questions that helps hiring teams shortlist stronger candidates quickly.",
    author: "Nisha Saini",
    date: "10 Apr 2026",
    readTime: "8 min read",
    image: "/assets/imgs/page/homepage1/img-news3.png",
    authorImage: "/assets/imgs/page/homepage1/user3.png",
    content: [
      "Structured screening questions reduce mismatches early in the hiring process and improve interview quality.",
      "Focus on availability, certification validity, location flexibility, and role-critical tool familiarity.",
      "Keep questions short, objective, and easy to answer on mobile devices. Long forms reduce completion rate.",
      "Use a scorecard model so each response can be compared consistently across applicants."
    ]
  },
  {
    id: "blog-004",
    slug: "resume-checklist-for-industrial-jobs",
    category: "Resume",
    title: "Resume Checklist for Industrial and Technical Job Roles",
    excerpt:
      "A one-page checklist to make your CV recruiter-ready before applying to your next opportunity.",
    author: "Shubham Kulkarni",
    date: "06 Apr 2026",
    readTime: "5 min read",
    image: "/assets/imgs/page/homepage1/img-news1.png",
    authorImage: "/assets/imgs/page/homepage1/user1.png",
    content: [
      "Keep your resume concise, role-focused, and supported by verifiable details.",
      "Highlight certifications, equipment handled, compliance knowledge, and safety training first.",
      "Mention your experience in years, location flexibility, and notice period clearly.",
      "Avoid generic objective statements and replace them with practical achievements."
    ]
  },
  {
    id: "blog-005",
    slug: "interview-questions-for-site-supervisors",
    category: "Interview",
    title: "Interview Questions Employers Ask for Site Supervisor Positions",
    excerpt:
      "Most asked supervisor-level interview questions with sample response frameworks.",
    author: "Sana Rehman",
    date: "02 Apr 2026",
    readTime: "9 min read",
    image: "/assets/imgs/page/homepage1/img-news2.png",
    authorImage: "/assets/imgs/page/homepage1/user2.png",
    content: [
      "Site leadership interviews test planning ability, safety discipline, and team coordination.",
      "Prepare examples that prove escalation handling, shift planning, and daily reporting quality.",
      "Use STAR format responses with measurable outcomes for stronger interview impact.",
      "Clarify your communication process with client teams and on-ground execution staff."
    ]
  },
  {
    id: "blog-006",
    slug: "improving-candidate-response-rate",
    category: "Recruitment",
    title: "Improving Candidate Response Rate with Better Job Descriptions",
    excerpt:
      "Simple updates to job posts that improve response quality and application completion.",
    author: "Rohit Batra",
    date: "28 Mar 2026",
    readTime: "6 min read",
    image: "/assets/imgs/page/homepage1/img-news3.png",
    authorImage: "/assets/imgs/page/homepage1/user3.png",
    content: [
      "Candidates respond better when compensation range, location, and shift details are transparent.",
      "Mention mandatory qualifications in the first section of the job description.",
      "List screening questions directly in the application form to reduce low-fit applications.",
      "Set clear timelines for review and interview rounds to improve trust and response speed."
    ]
  }
];

export const getBlogPostBySlug = (slug) => BLOG_POSTS.find((post) => post.slug === slug);

