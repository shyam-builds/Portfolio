export const PROFILE = {
  name: "Ghanshyam Singh",
  role: "Backend Developer",
  statement:
    "I build scalable backend systems and AI-powered applications using multi-agent workflows, Retrieval-Augmented Generation (RAG), and computer vision.",
  profileLead:
    "I'm a backend-focused software engineer who builds intelligent applications using FastAPI, Node.js, LangGraph, Retrieval-Augmented Generation (RAG), and computer vision. I enjoy designing scalable APIs, AI workflows, and production-ready software that solve real-world problems.",

  location: "Noida, India",
  email: "shyaam403@gmail.com",
  phone: "+91 9451907749",
  github: "https://github.com/shyam-builds",
  githubHandle: "shyam-builds",
  linkedin: "https://www.linkedin.com/in/ghanshyam-singh-a21020181",
  linkedinLabel: "linkedin.com/in/ghanshyam-singh-a21020181",
  /** Drop your PDF at public/resume.pdf (or swap this for a hosted URL). */
  resumeUrl: "/resume.pdf",
} as const;

export const META = [
  { label: "Based in", value: "Noida, India" },
  { label: "Focus", value: "Backend Development" },
  { label: "Also", value: "AI Applications • RAG • Computer Vision" },
  { label: "Status", value: "Open to Opportunities" },
] as const;

export type Project = {
  id: string;
  index: string;
  title: string;
  /** Short one-line engineering descriptor shown under the index/title row. */
  subtitle?: string;
  /** Technical bullet points rendered in the engineering card. */
  bullets?: string[];
  category: string;
  description: string;
  story: string;
  highlights: string[];
  technologies: string[];
  /** Set this to a real screenshot URL/import; concept preview is used when null. */
  image?: string | null;
  /** Preview component key — kept for data extensibility, not rendered in engineering cards. */
  preview?: "video" | "review" | "creators";
  github?: string | null;
  demo?: string | null;
};

export const PROJECTS: Project[] = [
  {
    id: "nayay-ai",
    index: "01",
    title: "NAYAY AI",
    subtitle: "AI-Powered Multi-Agent Legal Research Platform",
    bullets: [
      "Built an AI-powered multi-agent legal research platform that transforms natural language legal queries into structured, source-grounded legal guidance using LangGraph orchestration and LLM-powered reasoning.",
      "Developed a hybrid legal research pipeline integrating Indian Kanoon, Tavily Search, and Indian legal frameworks (BNS, BNSS, BSA) with citation-backed responses, judgment analysis, and context-aware conversations.",
      "Engineered a secure FastAPI backend with JWT authentication, conversation history, planner-based agent workflows, graceful AI fallback mechanisms, and a RAG-ready architecture for scalable legal intelligence.",
    ],
    category: "Generative AI / Multi-Agent",
    description:
      "An AI-powered multi-agent legal research platform that transforms natural language legal queries into structured, source-grounded legal guidance.",
    story:
      "Built using LangGraph orchestration with a hybrid pipeline integrating Indian legal databases, citation-backed responses, and a secure FastAPI backend.",
    highlights: [
      "LangGraph multi-agent orchestration with planner-based workflows",
      "Hybrid retrieval pipeline with Indian Kanoon and Tavily Search",
      "JWT-authenticated FastAPI backend with RAG-ready architecture",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Google Gemini",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: null,
    github: "https://github.com/shyam-builds/NyayAI",
    demo: null,
  },
  {
    id: "ecovision-ai",
    index: "02",
    title: "ECOVISION AI",
    subtitle: "AI-Powered Waste Detection & Environmental Assessment",
    bullets: [
      "Developed an end-to-end AI-powered waste detection platform using YOLOv8, FastAPI, and React to automate waste identification and environmental assessment.",
      "Designed a modular computer vision pipeline with image preprocessing, object detection, annotation generation, environmental scoring, and scalable REST APIs.",
      "Implemented a complete YOLOv8 training, evaluation, analytics, and ONNX deployment workflow following clean backend architecture.",
    ],
    category: "Computer Vision / AI",
    description:
      "An end-to-end AI-powered waste detection platform using YOLOv8 to automate waste identification and environmental assessment.",
    story:
      "Modular computer vision pipeline with image preprocessing, object detection, annotation generation, environmental scoring, and scalable REST APIs.",
    highlights: [
      "YOLOv8 object detection with ONNX deployment",
      "Modular computer vision pipeline with environmental scoring",
      "Complete training, evaluation, and analytics workflow",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "YOLOv8",
      "OpenCV",
      "SQLite",
      "Tailwind CSS",
      "ONNX",
    ],
    image: null,
    github: "https://github.com/shyam-builds/EcoVision",
    demo: null,
  },
  {
    id: "source-one",
    index: "03",
    title: "SOURCE ONE",
    subtitle: "AI-Powered Knowledge Workspace for Video Intelligence",
    bullets: [
      "Built an AI-powered knowledge workspace that transforms videos into searchable knowledge using Retrieval-Augmented Generation (RAG).",
      "Developed an end-to-end pipeline for transcription, semantic chunking, vector embeddings, Qdrant indexing, and LLM-powered contextual responses.",
      "Engineered scalable FastAPI services with Redis caching, JWT authentication, and a responsive React dashboard.",
    ],
    category: "Generative AI / RAG",
    description:
      "An AI-powered knowledge workspace that transforms videos into searchable knowledge using Retrieval-Augmented Generation.",
    story:
      "End-to-end pipeline for transcription, semantic chunking, vector embeddings, Qdrant indexing, and LLM-powered contextual responses.",
    highlights: [
      "RAG pipeline with Qdrant vector indexing and Deepgram transcription",
      "Semantic chunking with Mistral AI-powered contextual responses",
      "FastAPI backend with Redis caching and JWT authentication",
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Qdrant",
      "Mistral AI",
      "Deepgram",
      "RAG",
    ],
    image: null,
    preview: "video",
    github: "https://github.com/shyam-builds/SourceOne",
    demo: null,
  },
  {
    id: "ai-creator-platform",
    index: "04",
    title: "CREATOR PLATFORM",
    subtitle: "AI-Powered Content Creation & Management Platform",
    bullets: [
      "Built a full-stack AI content platform for generating and managing AI-assisted content using reusable templates and rich text editing.",
      "Developed secure authentication, media handling, and scalable content management workflows.",
      "Integrated Google Gemini API, Convex, Clerk, and ImageKit for AI-powered content generation and asset management.",
    ],
    category: "Generative AI / Full Stack",
    description:
      "A full-stack content creation platform combining AI-generated drafts with manual editing and structured content management.",
    story:
      "Combines AI-assisted generation with human editorial control for long-form content creation, editing, and management.",
    highlights: [
      "Google Gemini API integration for AI-assisted content generation",
      "Convex real-time backend with Clerk authentication",
      "ImageKit media handling and CMS-style authoring workflows",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Google Gemini",
      "ImageKit",
    ],
    image: null,
    preview: "creators",
    github: "https://github.com/shyam-builds/Creator",
    demo: null,
  },
];

export const CAPABILITIES: {
  group: string;
  items: { name: string; note: string }[];
}[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", note: "AI systems & scripting" },
      { name: "TypeScript", note: "Type-safe interfaces" },
      { name: "JavaScript", note: "Interfaces and services" },
      { name: "Java", note: "Object-oriented systems" },
      { name: "SQL", note: "Relational querying" },
      { name: "HTML / CSS", note: "Semantic markup & styling" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "FastAPI", note: "Python API framework" },
      { name: "Node.js", note: "Server-side JavaScript" },
      { name: "Express.js", note: "API routing" },
      { name: "REST APIs", note: "Service interfaces" },
      { name: "JWT Authentication", note: "Stateless auth" },
      { name: "API Design", note: "System architecture" },
    ],
  },
  {
    group: "AI Applications",
    items: [
      { name: "LangGraph", note: "Multi-agent orchestration" },
      { name: "LangChain", note: "LLM application framework" },
      { name: "RAG", note: "Retrieval-augmented generation" },
      { name: "LLM Integration", note: "Model-backed features" },
      { name: "YOLOv8", note: "Object detection" },
      { name: "Computer Vision", note: "Image & video pipelines" },
    ],
  },
  {
    group: "Databases & Tools",
    items: [
      { name: "PostgreSQL", note: "Relational storage" },
      { name: "MongoDB", note: "Document storage" },
      { name: "Redis", note: "Caching & queues" },
      { name: "SQLite", note: "Embedded storage" },
      { name: "Qdrant", note: "Vector database" },
      { name: "Docker", note: "Containerized environments" },
      { name: "Git", note: "Version control" },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    school: "Dr. Virendra Swaroop Institute of Computer Studies",
    years: "2024–2026",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "United University",
    years: "2021–2024",
  },
] as const;

export const CERTIFICATIONS: {
  index: string;
  title: string;
  meta?: string;
  url?: string;
}[] = [
  { index: "01", title: "Elements of AI", meta: "AI fundamentals" },
  { index: "02", title: "Generative AI Essentials", meta: "Generative AI foundations" },
  { index: "03", title: "Python Programming", meta: "Programming foundations" },
];

export const SECTIONS = [
  { id: "profile", marker: "01", label: "Profile", nav: "About" },
  { id: "work", marker: "02", label: "Selected Work", nav: "Work" },
  { id: "capabilities", marker: "03", label: "Capabilities", nav: "Stack" },
  { id: "background", marker: "04", label: "Background" },
  { id: "contact", marker: "05", label: "Contact", nav: "Contact" },
] as const;
