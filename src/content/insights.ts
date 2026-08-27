export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};
export const articles: Article[] = [
  {
    slug: "preparing-for-a-capital-raise",
    category: "Strategy",
    title: "How to Prepare for a Capital Raise Before Investor Outreach",
    description:
      "A practical framework for clarifying the raise, aligning management, organizing evidence, and preparing materials before investor outreach.",
    sections: [
      {
        heading: "Begin with the purpose, not the deck",
        paragraphs: [
          "A capital raise should start with a business decision, not a presentation. Define what the capital must make possible and why that outcome matters now. Growth, an acquisition, working capital, project financing, or a new product can each create a different story, evidence requirement, risk profile, and timeline.",
          "Write the use of funds in operating terms. Instead of saying capital will support growth, identify the people, capacity, inventory, systems, market entry, or transaction steps involved. Connect each use to an observable milestone. This creates a working plan for leadership and a clearer explanation for an outside reviewer.",
        ],
      },
      {
        heading: "Set an amount and timing range",
        paragraphs: [
          "The amount should follow from the plan. Build the estimate from uses, timing, contingencies, and the runway required to reach the next meaningful milestone. A single precise number can suggest certainty that does not exist, while an unexplained range can appear unprepared. Document the assumptions behind both.",
          "Timing requires the same discipline. Work backward from the business need, allowing for preparation, outreach, meetings, diligence, professional review, and decision processes. Financing timelines vary and cannot be guaranteed. The purpose of a planning calendar is to reveal dependencies early—not promise a closing date.",
        ],
      },
      {
        heading: "Make the business case understandable",
        paragraphs: [
          "An investor-facing case must explain the problem or opportunity, the customer, the solution, the market context, the business model, evidence of demand, competitive position, and the plan for creating value. These elements should connect logically. Large market claims do not compensate for unclear customer behavior or weak economics.",
          "Test the story with someone who does not live inside the business. Can they explain why customers choose the offering, how revenue is earned, what drives cost, what has been proven, what remains uncertain, and why capital changes the trajectory? Confusion at this stage is useful: it identifies work to complete before consequential conversations.",
        ],
      },
      {
        heading: "Build a credible financial story",
        paragraphs: [
          "Financial information should show what has happened, what management expects, and why. Historical results, current performance, forecasts, cash needs, and use of funds must reconcile across the model, deck, summary, and management discussion. Reviewers will notice inconsistent periods, definitions, totals, and assumptions.",
          "Forecasts are not promises. They are a structured expression of assumptions. Make the major drivers visible, explain sensitivities, and distinguish facts from estimates. Prepare to discuss customer concentration, margins, working-capital needs, seasonality, cash conversion, and the milestones capital is expected to support.",
        ],
      },
      {
        heading: "Align management before outreach",
        paragraphs: [
          "A raise can expose disagreements that ordinary operations allow a team to postpone. Leadership should agree on the purpose, amount, acceptable paths, decision rights, risk factors, and messages. Decide who will answer financial, commercial, operational, and technical questions and who owns follow-up.",
          "Run a management Q&A session. Ask the difficult questions, including why now, what happens if the raise is delayed, which assumptions matter most, what could go wrong, and what alternatives exist. Consistent answers are not about rehearsed perfection; they show that management understands the opportunity together.",
        ],
      },
      {
        heading: "Prepare a connected set of materials",
        paragraphs: [
          "An executive summary, presentation, financial framework, investor FAQ, and data-room index serve different stages of review but should express one consistent case. Begin with content architecture before visual polish. Decide what each document must help a reader understand and what evidence supports each claim.",
          "Legal offering documents and regulated communications require qualified professionals. Keep business-advisory materials within appropriate boundaries, avoid guarantees and unsupported superlatives, and coordinate legal review where the facts or distribution require it.",
        ],
      },
      {
        heading: "Organize the data room in stages",
        paragraphs: [
          "Do not wait for a request list to discover that documents are missing or contradictory. Create a staged data room covering corporate information, financials, commercial evidence, team, operations, and legal or compliance coordination. Assign an owner and status to every item.",
          "Use consistent file names, dates, version labels, and permissions. Share only what is appropriate at each stage. Sensitive records require agreed safeguards, and personal identification, bank data, or confidential non-public information should never be placed in an unsecured first-contact channel.",
        ],
      },
      {
        heading: "Check outreach readiness",
        paragraphs: [
          "Define the characteristics of a potentially suitable capital partner before building a list. Prepare the opening message, meeting roles, response process, tracker, and follow-up rhythm. Decide how feedback will be recorded and when the narrative or assumptions should be revisited.",
          "Common mistakes include beginning outreach to create urgency before the case is ready, letting several versions of the numbers circulate, overclaiming market size, hiding known risks, and failing to assign follow-up. Preparation cannot guarantee funding. It can make the opportunity easier to understand, the process easier to manage, and leadership better equipped for serious review.",
        ],
      },
      {
        heading: "Run a final readiness review",
        paragraphs: [
          "Before outreach, hold a working review with the people who own strategy, finance, operations, materials, and adviser coordination. Walk through the case from the perspective of someone seeing it for the first time. Confirm that the purpose, amount, timing, milestones, financial assumptions, and main risks are explained consistently. Open every document, test every link, and identify any statement that depends on evidence not yet organized.",
          "Create a short launch decision record. List the items that are complete, the gaps leadership accepts, the issues that must be resolved before a later stage, and the person authorized to decide when the process advances. Record the version of each core material and the date of the underlying information. This is not a guarantee that the market will respond. It is a practical control that keeps the team from entering outreach with different assumptions, outdated files, or no clear response when an important question arrives.",
        ],
      },
    ],
  },
  {
    slug: "what-investors-review",
    category: "Readiness",
    title: "What Capital Partners Commonly Review Before a Serious Conversation",
    description:
      "Understand the business, financial, leadership, risk, and information-quality questions that commonly shape capital review.",
    sections: [
      {
        heading: "Review begins with coherence",
        paragraphs: [
          "Capital partners differ by mandate, structure, stage, geography, return requirements, and decision process. No checklist predicts what every reviewer will decide. Still, serious conversations commonly test whether the opportunity is understandable, supported by credible information, and managed by people who recognize both potential and risk.",
          "The quality of preparation is evidence in itself. Clear definitions, reconciled numbers, current files, and direct answers suggest operating discipline. Conflicting claims, missing owners, and disorganized follow-up introduce uncertainty before the underlying opportunity has been fully considered.",
        ],
      },
      {
        heading: "Market and customer reality",
        paragraphs: [
          "Reviewers commonly ask who the customer is, which problem matters enough to change behavior, how buying decisions are made, and what alternatives exist. A market-size estimate is more useful when paired with a realistic entry point, customer profile, sales motion, and evidence that the company can reach and serve that market.",
          "Expect questions about customer concentration, retention, pipeline quality, contract terms, pricing, acquisition channels, and sales cycles. Early-stage opportunities may have limited history, so the quality of interviews, pilots, letters of intent, or other evidence becomes important. Label evidence accurately; interest is not the same as committed revenue.",
        ],
      },
      {
        heading: "Economics and financial drivers",
        paragraphs: [
          "A reviewer will usually want to understand how revenue is earned, what it costs to deliver, what drives gross margin, how much cash the model consumes, and what scale changes. Historical statements and management reporting should connect to the forecast. Definitions should stay consistent across documents.",
          "Forecasts invite questions about assumptions, not only totals. Prepare the logic behind volume, price, hiring, margin, capital expenditure, working capital, and timing. A useful model permits sensitivity discussion: what changes if sales take longer, cost is higher, or a milestone slips? Honest ranges are often more credible than false precision.",
        ],
      },
      {
        heading: "Evidence and traction",
        paragraphs: [
          "Traction means different things at different stages. It may include revenue, contracted demand, repeat purchase, usage, regulatory progress, technical validation, unit-level performance, partnerships, or operational milestones. The relevant question is what has been demonstrated and what remains to be demonstrated.",
          "Proof points should be traceable. Maintain the source, date, owner, and limitations of important claims. Avoid presenting a selective metric without context. A strong case can acknowledge an incomplete result and explain the plan to resolve it rather than overstate certainty.",
        ],
      },
      {
        heading: "Leadership and execution capability",
        paragraphs: [
          "Capital partners often evaluate whether leadership understands the plan, has relevant capability, makes decisions responsibly, and can communicate under scrutiny. Titles and biographies matter less than evidence of judgment, accountability, and the ability to attract the missing capabilities.",
          "Management alignment becomes visible quickly. Different answers about strategy, priorities, or use of funds create avoidable doubt. Clarify decision rights, ownership of key workstreams, hiring needs, governance expectations, and how the team will report progress after a raise.",
        ],
      },
      {
        heading: "Risk and response",
        paragraphs: [
          "Every opportunity has risk. Review may cover competition, customer concentration, regulation, intellectual property, supply, technology, execution, financing, governance, key-person dependency, and assumptions in the plan. Claiming that no material risk exists is rarely persuasive.",
          "Create a risk register that identifies the risk, potential effect, evidence, mitigation, owner, and next decision point. Some areas require legal, tax, accounting, or licensed advice. Northline can help organize business questions and coordination, but specialists must perform professional or regulated work.",
        ],
      },
      {
        heading: "Use of funds and milestones",
        paragraphs: [
          "Reviewers commonly connect the amount requested to what it buys, how long it lasts, and which milestones it should enable. A credible use-of-funds plan distinguishes direct program costs, operating needs, contingencies, and timing. It should also explain priorities if less or more capital becomes available.",
          "Milestones should be observable and relevant to the next stage of value creation or risk reduction. Avoid implying that spending automatically creates results. Explain the operating actions, dependencies, and management controls behind the plan.",
        ],
      },
      {
        heading: "Return logic without promises",
        paragraphs: [
          "A capital case may need to explain how value could be created and how the proposed path relates to a capital partner's objectives. That discussion should be grounded in the business model, milestones, economics, structure, risks, and possible scenarios—not a promised return.",
          "Do not use guaranteed outcomes, fixed claims without support, or language that could be treated as an offer or solicitation. Transaction-specific and regulated communications require appropriate legal and licensed professional involvement.",
        ],
      },
      {
        heading: "Information quality and question readiness",
        paragraphs: [
          "Good information is current, organized, consistent, attributable, and shared through an appropriate process. Establish a data-room index, file naming standard, access permissions, version control, and owners. Reconcile the deck, model, summary, and management reporting before distribution.",
          "Finally, prepare for questions that do not have comfortable answers. A direct response that identifies uncertainty, available evidence, and the next step is stronger than an improvised claim. Readiness does not remove uncertainty or guarantee financing. It allows the opportunity to be assessed on a clearer foundation and helps leadership learn from each serious conversation.",
        ],
      },
      {
        heading: "Structure, fit, and decision process",
        paragraphs: [
          "A serious review also considers whether the proposed capital path fits the opportunity and the reviewing party. The discussion may cover amount, instrument, governance, information rights, timing, future capital needs, and conditions that would have to be satisfied. These are not details to improvise in a first meeting. Leadership should know which topics require internal decisions and which require legal, tax, accounting, or licensed professional advice.",
          "Ask how the other party evaluates opportunities, who participates in the decision, what information is needed at each stage, and what could cause the process to stop. Then record the answers and compare them with the company's own priorities and boundaries. A well-known name or enthusiastic conversation does not establish fit. Clear decision criteria help management allocate time responsibly, avoid changing the case for every audience, and recognize when a process should advance, pause, or end.",
        ],
      },
    ],
  },
  {
    slug: "data-room-checklist",
    category: "Process",
    title: "Building an Organized Capital-Raise Data Room",
    description:
      "A staged framework for organizing capital-raise documents, permissions, versions, owners, and sensitive information.",
    sections: [
      {
        heading: "Treat the data room as a process",
        paragraphs: [
          "A capital-raise data room is not simply a folder of every document the organization has created. It is a controlled information environment that helps authorized reviewers understand the opportunity, test important claims, and follow an agreed diligence process.",
          "Build it before urgent requests arrive. Early organization exposes missing documents, inconsistent information, unresolved ownership, and sensitive-material questions while there is still time to address them. The exact scope depends on the opportunity, transaction, stage, and professional advice, so use this framework as a planning tool rather than a universal diligence list.",
        ],
      },
      {
        heading: "Start with an index and owners",
        paragraphs: [
          "Create a master index before collecting files. Organize it by category and include the document name, description, owner, status, relevant period, version, approval status, and sharing stage. A tracker outside the room can record open questions and requests without creating duplicate files.",
          "Assign one coordinator to protect structure and version control. Each content area should still have a responsible owner who can validate accuracy and answer questions. Establish a review cadence so overdue, outdated, or superseded material is visible.",
        ],
      },
      {
        heading: "Core corporate information",
        paragraphs: [
          "Corporate materials may include formation and governance documents, ownership or capitalization information, board or member approvals, organizational charts, material policies, and records relevant to authority and control. Legal counsel should advise what is required, current, and appropriate to share.",
          "Do not assume an old file is the operative version. Confirm effective dates, amendments, signatures, entity names, and consistency with the proposed raise. Keep sensitive personal details out unless specifically required through a protected process.",
        ],
      },
      {
        heading: "Financial information",
        paragraphs: [
          "Financial folders commonly include historical statements, current management accounts, budgets, forecasts, cash information, debt schedules, tax coordination materials, and the model supporting the raise. Structure by period and clearly distinguish audited, reviewed, management-prepared, and forecast information.",
          "Reconcile totals and definitions across the model, pitch materials, management reports, and source statements. Include a short assumptions guide for forecasts. Accounting and tax professionals should validate areas within their scope; an advisory narrative must not substitute for their work.",
        ],
      },
      {
        heading: "Commercial and customer evidence",
        paragraphs: [
          "Commercial information can include customer and revenue analyses, pipeline, retention, pricing, representative agreements, market research, product evidence, and sales performance. Redact or aggregate information when a full record is not appropriate at the current stage.",
          "Explain metric definitions and reporting periods. Separate signed contracts from proposals, active customers from prospects, and measured retention from estimates. Maintain evidence behind key claims so management can answer follow-up without searching across inboxes.",
        ],
      },
      {
        heading: "Team and operating information",
        paragraphs: [
          "Team materials may cover leadership biographies, responsibilities, organization structure, workforce plans, key-person dependencies, incentives, and hiring priorities. Operational information may include suppliers, systems, capacity, delivery processes, technology, security practices, key KPIs, and expansion plans.",
          "The goal is not to overwhelm a reviewer with operating detail. Select information that explains how the business delivers, where dependencies sit, how performance is monitored, and what the capital plan changes. Keep a deeper layer ready for appropriate diligence.",
        ],
      },
      {
        heading: "Legal, compliance, and risk coordination",
        paragraphs: [
          "Potentially relevant materials can include material contracts, intellectual-property records, permits, insurance, disputes, compliance information, data practices, and risk registers. These areas are context-specific and should be organized with qualified counsel and other specialists.",
          "Mark privileged, restricted, export-controlled, personal, or otherwise sensitive material before upload. Decide whether it should be withheld, summarized, redacted, or shared only at a later stage. The data-room coordinator should not make legal disclosure decisions alone.",
        ],
      },
      {
        heading: "Use naming, permissions, and versions deliberately",
        paragraphs: [
          "Adopt a consistent naming convention such as category, document name, period, and version date. Avoid names like final, final-two, or latest. Keep one approved current file in the active folder and move superseded versions to a restricted archive rather than deleting the record without an agreed retention policy.",
          "Grant access by stage and need. Use individual accounts, multi-factor authentication when available, download restrictions where appropriate, and an access log. Remove access promptly when a process ends. Never send an unrestricted public folder link to accelerate an early conversation.",
        ],
      },
      {
        heading: "Protect sensitive information",
        paragraphs: [
          "The initial inquiry stage rarely requires confidential financial records, personal identification, bank information, credentials, source code, or a full customer list. Begin with enough information to discuss fit and scope. Agree on confidentiality, platform, access, and permitted use before sharing more.",
          "If a file contains mixed sensitivity, create a reviewed redacted version rather than relying on the recipient to ignore unnecessary data. Verify redactions cannot be reversed and remove hidden tabs, comments, metadata, and formulas that expose unintended information.",
        ],
      },
      {
        heading: "Run a readiness review",
        paragraphs: [
          "Before access is granted, test the room as a reviewer. Does the index match the folders? Do links work? Are periods and entities clear? Can important numbers be reconciled? Are permissions correct? Are open items assigned? Can leadership explain each major document and assumption?",
          "An organized room does not guarantee funding or replace professional diligence. It reduces avoidable friction, protects information more deliberately, and gives leadership a current view of readiness. That discipline helps serious conversations focus on the opportunity and the decisions ahead.",
        ],
      },
      {
        heading: "Maintain the room as the process changes",
        paragraphs: [
          "A data room becomes outdated quickly if it is treated as a launch task. Set a regular review for financial periods, forecasts, pipeline reports, capitalization information, contracts, team changes, and open diligence items. When a new file replaces an old one, update the index, record the approval, notify the appropriate users, and move the superseded file to the controlled archive.",
          "Keep a request log that distinguishes new requests, clarifications, completed responses, and questions requiring specialist input. Record who asked, who owns the response, the approved source file, and when it was shared. This preserves context when several conversations or advisers are active. At the end of a process, revoke access, retain records according to an approved policy, and conduct a short review of what should be improved before the next stage or future raise.",
        ],
      },
    ],
  },
];
