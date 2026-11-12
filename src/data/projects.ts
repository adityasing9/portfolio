export type ProjectFilterCategory =
  | 'All'
  | 'AI/ML'
  | 'Full Stack'
  | 'FinTech'
  | 'Blockchain'
  | 'Automation';

export type SkillCategoryName =
  | 'All'
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'AI and Machine Learning'
  | 'Blockchain'
  | 'Cloud and DevOps'
  | 'Development Tools';

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategoryName, 'All'>;
  context: string;
}

export interface ArchitectureModule {
  layer: string;
  component: string;
  responsibility: string;
}

export interface ProjectItem {
  id: string;
  indexNumber: string;
  name: string;
  title: string;
  description: string;
  categories: Exclude<ProjectFilterCategory, 'All'>[];
  bentoSpan: 'wide' | 'compact';
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  problemSolved: string;
  architectureSummary: string;
  keyCapabilities: string[];
  architectureModules: ArchitectureModule[];
  /**
   * Central project link configuration.
   * Leave null until public repository or live deployment URLs are published.
   */
  githubUrl: string | null;
  liveDemoUrl: string | null;
  hackathonContext?: string;
  codePreview: {
    filename: string;
    language: string;
    snippet: string;
  };
}

export interface HackathonExperienceItem {
  id: string;
  title: string;
  organizationOrEvent: string;
  role: string;
  period: string;
  projectBuilt?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ResearchInterestItem {
  index: string;
  domain: string;
  subtitle: string;
  summary: string;
  focusTopics: string[];
}

export const PERSONAL_CONFIG = {
  name: 'Aaditya Singh',
  professionalTitle:
    'AI/ML Engineer | Full-Stack Developer | Technology Enthusiast',
  heroHeadline: 'Building Intelligent Solutions for Real-World Problems.',
  heroSupportingText:
    'AI/ML Engineer in the making. Full-stack developer. Technology enthusiast.',
  location: 'India',
  cityRegion: 'Bengaluru, Karnataka, India',
  education: {
    degree:
      'Bachelor of Engineering in Artificial Intelligence and Machine Learning',
    institution: 'BMS Institute of Technology and Management (BMSIT), Bengaluru',
    expectedGraduation: '2028',
    location: 'Bengaluru, India',
    focusAreas: [
      'Artificial Intelligence & Machine Learning',
      'Retrieval-Augmented Generation & Vector Search',
      'Full-Stack Systems & Progressive Web Applications',
      'FinTech Security & Smart Contract Engineering',
    ],
  },
  aboutParagraphs: [
    'I am an Artificial Intelligence and Machine Learning engineering student passionate about building intelligent software, solving real-world problems, and exploring emerging technologies.',
    'My interests span Artificial Intelligence, Full-Stack Development, Automation, Cybersecurity, FinTech, and Blockchain.',
    'I enjoy transforming ideas into practical applications, experimenting with new technologies, and developing solutions that combine intelligent systems with efficient software architecture.',
    'I believe in learning by building, continuous experimentation, and creating technology that delivers real-world value.',
  ],
  aboutPillars: [
    {
      index: '01.',
      title: 'Intelligent AI Systems',
      description:
        'Architecting LLM applications, Retrieval-Augmented Generation (RAG) pipelines, semantic embedding workflows, and ChromaDB vector retrieval.',
    },
    {
      index: '02.',
      title: 'Full-Stack Engineering',
      description:
        'Designing end-to-end web applications and offline-capable PWAs with React, Next.js, FastAPI, Node.js, PostgreSQL, and MongoDB.',
    },
    {
      index: '03.',
      title: 'Security, FinTech & Web3',
      description:
        'Exploring intent-verified AI payment firewalls, local-first expense settlement engines, and Solidity smart contract protocols.',
    },
  ],
  links: {
    github: 'https://github.com/adityasing9',
    githubUsername: 'adityasing9',
    linkedinPlaceholder: 'https://www.linkedin.com/in/aaditya-singh-placeholder',
    emailPlaceholder: 'your.email@domain.com',
    phonePlaceholder: 'Configurable in src/data/projects.ts',
  },
};

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    context: 'AI/ML pipelines, FastAPI backends & RAG orchestration',
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    context: 'Full-stack web applications, async runtimes & PWAs',
  },
  {
    name: 'C',
    category: 'Programming',
    context: 'Systems programming fundamentals & memory management',
  },
  {
    name: 'C++',
    category: 'Programming',
    context: 'Data structures, algorithmic problem-solving & performance',
  },

  // Frontend
  {
    name: 'React.js',
    category: 'Frontend',
    context: 'Component-driven interfaces, state management & hooks',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    context: 'Full-stack React framework & modern routing architectures',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    context: 'Semantic document structure & web accessibility standards',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    context: 'Responsive layouts, grid systems & fluid animations',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    context: 'Design systems, dark-first styling & utility architecture',
  },
  {
    name: 'Vite',
    category: 'Frontend',
    context: 'Fast frontend bundling & modern module tooling',
  },
  {
    name: 'Progressive Web Applications',
    category: 'Frontend',
    context: 'Offline-first service workers, installable manifests & IndexedDB',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    context: 'Event-driven backend services & API orchestration',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    context: 'RESTful API routing, middleware & payment webhook handlers',
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    context: 'High-performance async Python services for AI & FinTech apps',
  },
  {
    name: 'Flask',
    category: 'Backend',
    context: 'Lightweight Python microservices & rapid API prototyping',
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    context: 'Structured resource contracts, validation & client-server sync',
  },
  {
    name: 'JWT Authentication',
    category: 'Backend',
    context: 'Stateless session security & role-based access control',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'Databases',
    context: 'Relational schema design & document metadata persistence',
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    context: 'ACID transactions for settlement ledgers & event attendance',
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    context: 'Document storage for agent state & commerce audit logs',
  },
  {
    name: 'Supabase',
    category: 'Databases',
    context: 'Managed Postgres, real-time subscriptions & backend services',
  },

  // AI and Machine Learning
  {
    name: 'Large Language Models',
    category: 'AI and Machine Learning',
    context: 'Prompt engineering, structured outputs & reasoning agents',
  },
  {
    name: 'Retrieval-Augmented Generation (RAG)',
    category: 'AI and Machine Learning',
    context: 'Document chunking, context grounding & citation synthesis',
  },
  {
    name: 'Embeddings',
    category: 'AI and Machine Learning',
    context: 'Dense vector representations for semantic similarity search',
  },
  {
    name: 'Vector Databases',
    category: 'AI and Machine Learning',
    context: 'High-dimensional indexing & nearest-neighbor retrieval',
  },
  {
    name: 'ChromaDB',
    category: 'AI and Machine Learning',
    context: 'Vector store integration for StudyAI document collections',
  },
  {
    name: 'OpenRouter API',
    category: 'AI and Machine Learning',
    context: 'Multi-model LLM routing & inference integration',
  },
  {
    name: 'AI-powered applications',
    category: 'AI and Machine Learning',
    context: 'End-to-end user-facing products powered by generative AI',
  },
  {
    name: 'AI workflow automation',
    category: 'AI and Machine Learning',
    context: 'Autonomous task execution with safety & intent verification',
  },

  // Blockchain
  {
    name: 'Solidity',
    category: 'Blockchain',
    context: 'EVM smart contract development & state machine logic',
  },
  {
    name: 'Hardhat',
    category: 'Blockchain',
    context: 'Local Ethereum compilation, testing & deployment workflows',
  },
  {
    name: 'Smart Contracts',
    category: 'Blockchain',
    context: 'On-chain sealed-bid auctions & trustless settlement rules',
  },
  {
    name: 'Web3',
    category: 'Blockchain',
    context: 'Decentralized application architecture & wallet interactions',
  },

  // Cloud and DevOps
  {
    name: 'Docker',
    category: 'Cloud and DevOps',
    context: 'Containerized application environments & reproducible builds',
  },
  {
    name: 'Vercel',
    category: 'Cloud and DevOps',
    context: 'Edge frontend deployment & continuous delivery pipelines',
  },
  {
    name: 'Render',
    category: 'Cloud and DevOps',
    context: 'Cloud hosting for Python FastAPI & Node.js backend services',
  },
  {
    name: 'Google Cloud',
    category: 'Cloud and DevOps',
    context: 'Cloud infrastructure & scalable application deployment',
  },

  // Development Tools
  {
    name: 'Git and GitHub',
    category: 'Development Tools',
    context: 'Version control, branching workflows & collaborative code review',
  },
  {
    name: 'Linux',
    category: 'Development Tools',
    context: 'Command-line environment, shell scripting & server operations',
  },
  {
    name: 'Ubuntu',
    category: 'Development Tools',
    context: 'Primary development OS & container base environment',
  },
  {
    name: 'Kali Linux',
    category: 'Development Tools',
    context: 'Security testing, network analysis & cybersecurity exploration',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'study-ai',
    indexNumber: '01',
    name: 'StudyAI',
    title: 'AI-Powered Document Learning Assistant',
    description:
      'A NotebookLM-inspired application that allows students to upload documents, interact with their content, generate summaries, and prepare exam questions using Retrieval-Augmented Generation.',
    categories: ['AI/ML', 'Full Stack', 'Automation'],
    bentoSpan: 'wide',
    imageUrl: '/src/assets/images/project_studyai_rag_1794436802603.jpg',
    imageAlt:
      'StudyAI Retrieval-Augmented Generation knowledge graph and ChromaDB vector architecture',
    technologies: [
      'React',
      'Vite',
      'Python',
      'FastAPI',
      'MySQL',
      'ChromaDB',
      'OpenRouter API',
    ],
    problemSolved:
      'Students working with dense academic PDFs and lecture notes needed a grounded way to query specific sections, synthesize study guides, and generate targeted exam questions without hallucinated answers.',
    architectureSummary:
      'Combines a React + Vite workspace with a Python FastAPI ingestion pipeline. Uploaded documents are parsed, chunked, embedded into ChromaDB collections for semantic retrieval, and paired with MySQL metadata and OpenRouter LLM synthesis.',
    keyCapabilities: [
      'Document ingestion, semantic chunking, and vector indexing in ChromaDB',
      'Context-grounded Q&A over uploaded study materials using Retrieval-Augmented Generation',
      'Automated chapter summarization and exam preparation question generation',
      'Structured relational tracking of user notebooks and document state in MySQL',
    ],
    architectureModules: [
      {
        layer: 'Frontend Workspace',
        component: 'React & Vite',
        responsibility:
          'Interactive document viewer, chat interface, summary cards, and exam question generator',
      },
      {
        layer: 'API & Ingestion Layer',
        component: 'Python & FastAPI',
        responsibility:
          'Document parsing, text chunking, embedding orchestration, and REST endpoints',
      },
      {
        layer: 'Vector & Relational Store',
        component: 'ChromaDB & MySQL',
        responsibility:
          'High-dimensional semantic similarity search paired with relational user/document metadata',
      },
      {
        layer: 'LLM Inference',
        component: 'OpenRouter API',
        responsibility:
          'Context-grounded response synthesis, summarization, and question generation',
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    codePreview: {
      filename: 'backend/services/rag_pipeline.py',
      language: 'python',
      snippet: `async def query_document_context(
    collection_id: str,
    question: str,
    top_k: int = 5
) -> dict:
    results = chroma_client.get_collection(collection_id).query(
        query_texts=[question],
        n_results=top_k
    )
    context_chunks = "\\n---\\n".join(results["documents"][0])
    return await generate_openrouter_response(question, context_chunks)`,
    },
  },
  {
    id: 'intentlock-commerce',
    indexNumber: '02',
    name: 'IntentLock Commerce',
    title: 'AI Personal Shopping Agent with Intelligent Payment Security Firewall',
    description:
      'An AI-powered shopping architecture designed to ensure that AI agents execute purchases according to explicit user intent and prevent unauthorized transactions.',
    categories: ['AI/ML', 'FinTech', 'Full Stack', 'Automation'],
    bentoSpan: 'compact',
    imageUrl: '/src/assets/images/project_intentlock_firewall_1794436803519.jpg',
    imageAlt:
      'IntentLock Commerce AI payment security firewall and transaction intent verification gate',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'LLM APIs',
      'PayPal Sandbox',
    ],
    hackathonContext: 'PayPal AI Hackathon Project',
    problemSolved:
      'As autonomous AI agents gain the ability to initiate checkouts, prompt injection or ambiguous instructions can trigger unintended purchases, budget overruns, or unauthorized merchant transactions.',
    architectureSummary:
      'Introduces a deterministic Payment Security Firewall between the LLM shopping agent and the PayPal Sandbox execution layer. Every proposed cart action is validated against explicit user intent constraints stored in MongoDB before transaction authorization.',
    keyCapabilities: [
      'Natural-language shopping intent capture with explicit budget, category, and merchant guardrails',
      'Pre-transaction Payment Security Firewall intercepting autonomous agent checkout calls',
      'End-to-end sandbox payment execution via PayPal Sandbox APIs',
      'Auditable intent-vs-action verification logs persisted in MongoDB',
    ],
    architectureModules: [
      {
        layer: 'Client Interface',
        component: 'React',
        responsibility:
          'Intent configuration console, live agent shopping feed, and firewall approval controls',
      },
      {
        layer: 'Agent & Firewall Core',
        component: 'Node.js, Express & LLM APIs',
        responsibility:
          'Product discovery reasoning paired with deterministic policy enforcement prior to checkout',
      },
      {
        layer: 'Audit & Policy Store',
        component: 'MongoDB',
        responsibility:
          'Stores explicit user intent policies, cart proposals, and security audit trails',
      },
      {
        layer: 'Payment Settlement',
        component: 'PayPal Sandbox',
        responsibility:
          'Executes verified orders only after passing IntentLock policy validation',
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    codePreview: {
      filename: 'server/firewall/intentValidator.js',
      language: 'javascript',
      snippet: `export function verifyTransactionIntent(intentPolicy, proposedOrder) {
  const withinBudget = proposedOrder.totalAmount <= intentPolicy.maxAmount;
  const allowedCategory = intentPolicy.allowedCategories.includes(
    proposedOrder.category
  );
  if (!withinBudget || !allowedCategory) {
    return { authorized: false, reason: 'Blocked by IntentLock Firewall' };
  }
  return { authorized: true, verificationGate: 'PASSED' };
}`,
    },
  },
  {
    id: 'settlehub',
    indexNumber: '03',
    name: 'SettleHub',
    title: 'Local-First Expense Management and Settlement PWA',
    description:
      'An expense management application designed to simplify shared transactions, expense tracking, and settlements with offline-first functionality.',
    categories: ['FinTech', 'Full Stack'],
    bentoSpan: 'compact',
    imageUrl: '/src/assets/images/project_settlehub_pwa_1794436803690.jpg',
    imageAlt:
      'SettleHub local-first expense settlement graph and IndexedDB sync architecture',
    technologies: ['PWA', 'IndexedDB', 'FastAPI', 'PostgreSQL'],
    problemSolved:
      'Group expense trackers often fail when connectivity drops during travel or events, leading to unrecorded split transactions and complicated multi-party debt chains.',
    architectureSummary:
      'Built as an installable Progressive Web Application using IndexedDB as the primary local store for zero-latency offline expense entry, synchronizing with a Python FastAPI and PostgreSQL backend when network connectivity is available.',
    keyCapabilities: [
      'Offline-first expense creation and balance calculation stored locally in IndexedDB',
      'Installable Progressive Web Application (PWA) for mobile and desktop devices',
      'Background synchronization with a FastAPI REST backend and PostgreSQL ledger',
      'Clear multi-user split tracking and simplified settlement workflows',
    ],
    architectureModules: [
      {
        layer: 'Offline-First Client',
        component: 'PWA & IndexedDB',
        responsibility:
          'Instant local reads/writes, service worker caching, and queued mutation log',
      },
      {
        layer: 'Sync & Ledger API',
        component: 'FastAPI',
        responsibility:
          'Reconciles offline client transaction batches and calculates group balances',
      },
      {
        layer: 'Relational Ledger',
        component: 'PostgreSQL',
        responsibility:
          'Durable ACID storage for shared expenses, participants, and settlement states',
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    codePreview: {
      filename: 'client/db/offlineSync.js',
      language: 'javascript',
      snippet: `export async function recordExpenseOffline(db, expenseEntry) {
  const tx = db.transaction(['expenses', 'outbox'], 'readwrite');
  await tx.objectStore('expenses').put(expenseEntry);
  await tx.objectStore('outbox').put({
    id: expenseEntry.id,
    payload: expenseEntry,
    synced: false,
  });
  await tx.done;
}`,
    },
  },
  {
    id: 'hackpass',
    indexNumber: '04',
    name: 'HackPass',
    title: 'QR-Based College Event Attendance Management',
    description:
      'A progressive web application for managing college event registrations and attendance using QR codes.',
    categories: ['Full Stack', 'Automation'],
    bentoSpan: 'wide',
    imageUrl: '/src/assets/images/project_prism_compiler_1794435572368.jpg',
    imageAlt: 'HackPass QR-based college event registration and attendance workflow',
    technologies: ['React', 'PWA', 'Supabase', 'PostgreSQL'],
    problemSolved:
      'Manual spreadsheet check-ins at college hackathons and technical events created long entry queues, duplicate check-ins, and delayed attendance reporting.',
    architectureSummary:
      'A mobile-ready React Progressive Web Application backed by Supabase and PostgreSQL that issues unique participant QR passes and enables instant camera-based check-in verification for event organizers.',
    keyCapabilities: [
      'Streamlined participant registration and unique QR pass generation',
      'Fast mobile PWA scanner workflow for event check-in desks',
      'Real-time attendance state updates backed by Supabase and PostgreSQL',
      'Automated duplicate-scan prevention and live participant roster views',
    ],
    architectureModules: [
      {
        layer: 'Organizer & Attendee PWA',
        component: 'React & PWA',
        responsibility:
          'Pass display, QR scanning interface, and responsive mobile event dashboard',
      },
      {
        layer: 'Realtime Backend & Auth',
        component: 'Supabase',
        responsibility:
          'Instant check-in verification queries and real-time attendance updates',
      },
      {
        layer: 'Attendance Database',
        component: 'PostgreSQL',
        responsibility:
          'Relational schema for events, registered attendees, and timestamped check-in logs',
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    codePreview: {
      filename: 'src/services/attendanceCheckIn.js',
      language: 'javascript',
      snippet: `export async function verifyAndMarkAttendance(supabase, passToken, eventId) {
  const { data, error } = await supabase
    .from('registrations')
    .update({ checked_in: true, checked_in_at: new Date().toISOString() })
    .eq('pass_token', passToken)
    .eq('event_id', eventId)
    .select()
    .single();
  return { record: data, error };
}`,
    },
  },
  {
    id: 'decrypto',
    indexNumber: '05',
    name: 'Decrypto',
    title: 'Blockchain-Based Auction Application',
    description:
      'A blockchain project exploring NFT auctions and sealed-bid auction mechanisms.',
    categories: ['Blockchain', 'FinTech'],
    bentoSpan: 'wide',
    imageUrl: '/src/assets/images/project_decrypto_blockchain_1794436804789.jpg',
    imageAlt:
      'Decrypto blockchain sealed-bid auction smart contract and cryptographic vault architecture',
    technologies: ['Solidity', 'Hardhat', 'Smart Contracts'],
    problemSolved:
      'Transparent public mempools on standard blockchain auctions expose bid amounts ahead of settlement, enabling front-running and reactive sniping during high-value NFT auctions.',
    architectureSummary:
      'Engineered in Solidity and tested with Hardhat, Decrypto implements a commit-reveal sealed-bid auction lifecycle where bidders submit cryptographic hashes during the bidding phase and reveal values during settlement.',
    keyCapabilities: [
      'Commit-reveal sealed-bid auction mechanism preventing bid front-running',
      'On-chain NFT escrow and automated highest-bidder settlement logic in Solidity',
      'Deterministic smart contract testing and local network simulation via Hardhat',
      'Trustless refund handling for non-winning revealed bids',
    ],
    architectureModules: [
      {
        layer: 'On-Chain Auction Logic',
        component: 'Solidity Smart Contracts',
        responsibility:
          'Manages commitment hashes, reveal windows, bid verification, and asset transfer',
      },
      {
        layer: 'Development & Test Suite',
        component: 'Hardhat',
        responsibility:
          'Local EVM node simulation, contract compilation, and lifecycle assertion tests',
      },
    ],
    githubUrl: null,
    liveDemoUrl: null,
    codePreview: {
      filename: 'contracts/SealedBidAuction.sol',
      language: 'solidity',
      snippet: `function commitBid(bytes32 blindedBid) external payable onlyBefore(biddingEnd) {
    commits[msg.sender].push(Commit({
        blindedBid: blindedBid,
        deposit: msg.value,
        revealed: false
    }));
    emit BidCommitted(msg.sender, msg.value);
}`,
    },
  },
];

export const HACKATHONS_AND_EXPERIENCE: HackathonExperienceItem[] = [
  {
    id: 'paypal-ai-hackathon',
    title: 'PayPal AI Hackathon — AI Agent Commerce & Security Architecture',
    organizationOrEvent: 'PayPal AI Hackathon',
    role: 'AI/ML & Full-Stack Builder',
    period: 'Hackathon Project',
    projectBuilt: 'IntentLock Commerce',
    description:
      'Designed and built IntentLock Commerce, an AI personal shopping agent paired with an intelligent payment security firewall that validates autonomous LLM checkout requests against explicit user intent before executing transactions via PayPal Sandbox.',
    highlights: [
      'Engineered an intent-verification layer separating LLM reasoning from payment execution.',
      'Integrated React, Node.js, Express, MongoDB, LLM APIs, and PayPal Sandbox into a cohesive end-to-end prototype.',
      'Focused on preventing unauthorized agentic transactions and enforcing user-defined spending rules.',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'LLM APIs',
      'PayPal Sandbox',
    ],
  },
  {
    id: 'applied-ai-fullstack-projects',
    title: 'Applied AI/ML & Full-Stack Product Engineering',
    organizationOrEvent: 'Independent & Collaborative Engineering Builds',
    role: 'AI/ML & Full-Stack Developer',
    period: 'Ongoing · BMSIT Bengaluru',
    description:
      'Building practical software systems across Retrieval-Augmented Generation (StudyAI), offline-first progressive web applications (SettleHub, HackPass), and decentralized smart contracts (Decrypto).',
    highlights: [
      'Built end-to-end RAG pipelines combining Python, FastAPI, ChromaDB vector search, and OpenRouter LLM APIs.',
      'Developed offline-capable Progressive Web Applications using React, IndexedDB, Supabase, and PostgreSQL.',
      'Explored Solidity smart contract development and sealed-bid auction mechanisms with Hardhat.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'ChromaDB',
      'PostgreSQL',
      'Supabase',
      'Solidity',
    ],
  },
];

export const RESEARCH_AND_INTERESTS: ResearchInterestItem[] = [
  {
    index: '01',
    domain: 'Retrieval-Augmented Generation & Agentic AI',
    subtitle: 'Grounded reasoning over private document corpora',
    summary:
      'Exploring dense vector embeddings, ChromaDB indexing strategies, and multi-model orchestration via OpenRouter to build AI assistants that cite verifiable sources.',
    focusTopics: [
      'Large Language Models',
      'RAG Pipelines',
      'ChromaDB & Vector Search',
      'AI Workflow Automation',
    ],
  },
  {
    index: '02',
    domain: 'Cybersecurity & AI Intent Firewalls',
    subtitle: 'Safe execution boundaries for autonomous software agents',
    summary:
      'Investigating security architectures that constrain autonomous AI actions—ensuring financial and system operations strictly match explicit human authorization.',
    focusTopics: [
      'Agentic Payment Guardrails',
      'JWT & API Security',
      'Kali Linux & Security Testing',
      'Cryptographic Verification',
    ],
  },
  {
    index: '03',
    domain: 'Local-First Systems & FinTech Infrastructure',
    subtitle: 'Resilient software that works seamlessly offline and online',
    summary:
      'Designing Progressive Web Applications backed by IndexedDB and relational PostgreSQL/FastAPI backends for reliable expense tracking, settlements, and event operations.',
    focusTopics: [
      'IndexedDB & Service Workers',
      'FastAPI & PostgreSQL',
      'Settlement Algorithms',
      'Progressive Web Apps',
    ],
  },
  {
    index: '04',
    domain: 'Blockchain & Smart Contract Mechanisms',
    subtitle: 'Trustless auction protocols and decentralized state',
    summary:
      'Experimenting with Solidity and Hardhat to implement sealed-bid auction contracts and verifiable on-chain logic.',
    focusTopics: [
      'Solidity Smart Contracts',
      'Sealed-Bid Auctions',
      'Hardhat Testing',
      'Web3 Architecture',
    ],
  },
];
