import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Route,
  Target,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  headline: string;
  short: string;
  outcome: string;
  icon: LucideIcon;
  deliverables: string[];
  suitable: string[];
};

export const services: Service[] = [
  {
    slug: "capital-strategy",
    title: "Capital Strategy",
    headline: "Start the raise with a clear capital strategy.",
    short:
      "Define what you are raising, why it matters, which capital paths may fit, and what must be true before outreach begins.",
    outcome:
      "A decision-ready raise strategy with clear objectives, assumptions, priorities, and owners.",
    icon: Target,
    deliverables: [
      "Raise objective and decision criteria",
      "Use-of-funds framework",
      "Amount, range, and timing assumptions",
      "Capital-path evaluation",
      "Readiness gaps and action plan",
      "Roadmap with owners, milestones, and dependencies",
    ],
    suitable: [
      "You have a defined opportunity but need to shape the raise.",
      "The amount, timing, or capital path is not yet clear.",
      "Leadership needs shared decision criteria before preparing materials.",
    ],
  },
  {
    slug: "investor-readiness",
    title: "Investor Readiness",
    headline: "Prepare for the questions behind the pitch.",
    short:
      "Strengthen the information, proof points, internal alignment, and answers serious conversations require.",
    outcome: "A more credible, organized opportunity that is ready for informed scrutiny.",
    icon: ClipboardCheck,
    deliverables: [
      "Business model and strategic-case review",
      "Financial and operating information checklist",
      "Proof-point identification",
      "Risk and objection preparation",
      "Management Q&A preparation",
      "Data-room plan and tracker",
    ],
    suitable: [
      "Your opportunity is taking shape but the supporting information is fragmented.",
      "Management needs to align around the business case and key questions.",
      "You want to resolve gaps before outreach creates pressure.",
    ],
  },
  {
    slug: "investor-materials",
    title: "Investor Materials",
    headline: "Communicate the opportunity with clarity and consistency.",
    short: "Turn the business case into clear, consistent materials that support serious review.",
    outcome:
      "An investor-facing narrative and materials framework grounded in the facts of the opportunity.",
    icon: FileText,
    deliverables: [
      "Core investment narrative",
      "Executive summary or teaser",
      "Pitch-deck content and story flow",
      "Financial presentation framework",
      "Key messages and investor FAQ",
      "Data-room index",
    ],
    suitable: [
      "Your existing deck does not clearly explain the opportunity.",
      "Different materials tell different versions of the story.",
      "You need an organized content foundation before design or outreach.",
    ],
  },
  {
    slug: "raise-process-support",
    title: "Raise Process Support",
    headline: "Run the raise as a disciplined process.",
    short:
      "Bring discipline to targeting, outreach preparation, conversations, follow-up, and decision tracking.",
    outcome:
      "A managed process with clearer priorities, consistent follow-through, and useful feedback loops.",
    icon: Route,
    deliverables: [
      "Capital-partner profile and targeting criteria",
      "Outreach preparation and sequencing",
      "Process tracker",
      "Meeting and follow-up discipline",
      "Feedback and narrative refinement",
      "Weekly process review",
    ],
    suitable: [
      "You are preparing to enter the market or have begun conversations.",
      "Follow-up, ownership, or feedback is becoming difficult to manage.",
      "You need process discipline without claims of guaranteed introductions.",
    ],
  },
  {
    slug: "transaction-coordination",
    title: "Transaction Coordination",
    headline: "Keep diligence organized as the process advances.",
    short:
      "Coordinate information, workstreams, decisions, and professional advisers as diligence advances.",
    outcome:
      "A more controlled diligence and closing-readiness process with visible owners and dependencies.",
    icon: BriefcaseBusiness,
    deliverables: [
      "Diligence tracker",
      "Information and document organization",
      "Questions, decisions, and owners log",
      "Coordination with legal, accounting, tax, and specialists",
      "Timeline management",
      "Closing-readiness coordination",
    ],
    suitable: [
      "You are entering diligence or responding to detailed requests.",
      "Multiple advisers and workstreams need coordination.",
      "Leadership needs a single view of open items and decisions.",
    ],
  },
  {
    slug: "post-raise-planning",
    title: "Post-Raise Planning",
    headline: "Make the capital support the strategy.",
    short:
      "Translate the raise case into operating priorities, reporting discipline, and accountable execution.",
    outcome:
      "A practical plan for deploying capital and communicating progress after a successful close.",
    icon: BarChart3,
    deliverables: [
      "Use-of-funds operating plan",
      "First-100-day priorities",
      "KPI framework",
      "Governance and reporting cadence",
      "Investor communication rhythm",
      "Risk and decision checkpoints",
    ],
    suitable: [
      "You want the operating plan to match the commitments made during the raise.",
      "Leadership needs clear post-close priorities and reporting.",
      "Stakeholders need a disciplined communication cadence.",
    ],
  },
];

export const processSteps = [
  {
    title: "Diagnose",
    text: "Clarify the opportunity, purpose of the raise, current stage, constraints, and definition of a strong outcome.",
  },
  {
    title: "Prepare",
    text: "Resolve readiness gaps, organize information, align management, and establish an accountable work plan.",
  },
  {
    title: "Position",
    text: "Shape a credible narrative, supporting materials, and a clear explanation of the capital case.",
  },
  {
    title: "Pursue",
    text: "Prepare targeting criteria, manage conversations and follow-up, and learn from market feedback.",
  },
  {
    title: "Advance",
    text: "Coordinate diligence, specialist workstreams, decisions, and post-raise planning as the process develops.",
  },
];

export const faqs = [
  [
    "Who does Nevio work with?",
    "Nevio supports individual founders, entrepreneurs, project sponsors, and companies that need a more structured approach to preparing for and managing a capital raise.",
  ],
  [
    "When should we begin preparing?",
    "Earlier is better. A strong raise begins before outreach, with a defined purpose, credible information, clear materials, and internal alignment.",
  ],
  [
    "Does Nevio guarantee funding?",
    "No. Outcomes depend on the opportunity, market conditions, investor requirements, diligence, and other factors. Nevio provides strategy and process support and does not promise a financing result.",
  ],
  [
    "Can Nevio create our pitch deck?",
    "Nevio can help shape the investment narrative, structure the content, and coordinate supporting materials. Legal offering documents must be prepared or reviewed by qualified legal professionals.",
  ],
  [
    "Do we need financial projections?",
    "Most serious capital conversations require a credible financial view and clearly explained assumptions. The required depth depends on the opportunity and stage.",
  ],
  [
    "What should we bring to the first conversation?",
    "A concise overview, the purpose and approximate amount of the raise, current stage, expected timing, and any existing materials are enough to begin.",
  ],
  [
    "How are sensitive materials handled?",
    "Initial conversations should focus on fit and scope. Sensitive or non-public information should only be shared through an agreed process with appropriate safeguards.",
  ],
  [
    "Does Nevio provide legal, tax, or investment advice?",
    "No. Nevio coordinates with the appropriate legal, accounting, tax, and licensed professionals when specialized or regulated work is required.",
  ],
  [
    "How long does a raise take?",
    "Timing varies based on readiness, opportunity, market conditions, diligence, decision processes, and many other factors. The initial scope should establish realistic milestones rather than promise a date.",
  ],
  [
    "How do we start?",
    "Submit the confidential inquiry form with a short overview. Nevio will review it and respond regarding potential fit and next steps.",
  ],
] as const;

export const readinessItems = [
  "Purpose and use of funds",
  "Raise amount, timing, and milestones",
  "Business and market case",
  "Financial and operating information",
  "Investor narrative and materials",
  "Management alignment and Q&A",
  "Data-room organization",
  "Outreach, tracking, and follow-up process",
  "Legal, accounting, tax, and regulated-activity coordination",
];
