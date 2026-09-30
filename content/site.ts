import type { Experience, JournalEntry, Project, Site } from "./types";

/**
 * Content, lifted from Portfolio V1 (real facts only — no code reused).
 *
 * STILL PLACEHOLDER in one respect: every project lacks a measured outcome and
 * a written "what broke". PLAN.md §6 requires both, and they cannot be
 * inferred from V1 because V1 never recorded them. They are marked TODO and
 * need Jayesh's own words. Do not invent numbers.
 *
 * Reframed for a fresher-level full stack + AI portfolio: the emphasis is on
 * what was built, what was decided, and what was learned — not on scale.
 */

export const site: Site = {
  name: "Jayesh Shrivastava",
  role: "Full stack engineer",
  positioning:
    "I build across the stack — interfaces, APIs, and the data and infrastructure underneath.",
  lead: "I work mostly in AI-backed applications: retrieval and chat systems on the backend, and the interfaces that make them usable. My focus is shipping things end to end and understanding why they break.",
  location: "India",
  availability: "Open to full stack and AI engineering roles",
  summary:
    "Systems thinking over tooling lists. This site is the reasoning, the tradeoffs, and what broke.",
  email: "jayeshshrivastava815@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/wishmaster815" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shrivastava-jayesh/" },
    { label: "LeetCode", href: "https://leetcode.com/u/jayeshshrivastava815/" },
    {
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/jayeshshrivzfj5/",
    },
  ],
  stats: [
    { label: "Internships", value: "3" },
    { label: "Projects shipped", value: "6+" },
  ],
  education: [
    {
      degree: "TODO — degree, e.g. B.Tech in Computer Science",
      institution: "TODO — university or college",
      period: "TODO — graduation year",
      detail: "TODO — specialisation, honours, or relevant coursework. Optional.",
    },
  ],
  practice: [
    {
      platform: "LeetCode",
      href: "https://leetcode.com/u/jayeshshrivastava815/",
      detail:
        "TODO — problem count or current rating. A real number is checkable by anyone who opens the link.",
    },
    {
      platform: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/jayeshshrivzfj5/",
      detail: "TODO — problems solved, or a badge worth mentioning.",
    },
  ],
  stack: [
    {
      id: "interface",
      name: "Interface",
      owns: "What the user touches, and how fast it responds.",
      built:
        "Built the animated, responsive portfolio and the BingeBuddy and BrainWave front ends.",
      tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      depth: 1,
    },
    {
      id: "api",
      name: "API",
      owns: "Contracts, validation, auth, and the error paths.",
      built:
        "FastAPI services behind DocuMind, ConversoAI and Birju.AI, including the retrieval and chat endpoints.",
      tools: ["Python", "FastAPI", "LangChain", "Express", "REST"],
      depth: 2,
    },
    {
      id: "data",
      name: "Data",
      owns: "Schemas, queries, embeddings, and what happens when they are wrong.",
      built:
        "Vector stores and embeddings for document Q&A, and Supabase schemas and auth across projects.",
      tools: ["Supabase", "MongoDB", "Firebase", "Hugging Face"],
      depth: 3,
    },
    {
      id: "systems",
      name: "Systems",
      owns: "Deploys, model choice, and cost per request.",
      built:
        "Deployment on Vercel, and a shift to Groq-hosted inference to keep per-request cost workable.",
      tools: ["Vercel", "Groq", "Git", "GitHub Actions"],
      depth: 4,
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "documind",
    name: "DocuMind",
    summary:
      "Upload a PDF, ask questions about it, get answers grounded in the document.",
    problem:
      "Long documents are unusable when you need one specific fact from them. Search finds keywords, not meaning, and re-reading a 60-page report to find one paragraph is slow enough that people give up.",
    keyDecision: {
      title: "Chunking strategy, and accepting retrieval noise",
      context:
        "Answer quality collapsed on long PDFs: single large chunks lost the surrounding context the answer needed, while very small chunks retrieved fragments with no meaning on their own.",
      options: [
        "One chunk per document, relying on the model to read it all",
        "Fixed-size chunks with overlap, retrieved by embedding similarity",
        "Smaller chunks plus a reranking pass to recover precision",
      ],
      chosen:
        "Fixed-size overlapping chunks retrieved by embedding similarity, which kept the implementation understandable while fixing the worst failures.",
      tradeoff:
        "Retrieval still returns loosely related passages often enough to need a rerank step. I traded accuracy for a system I could actually debug, and the remaining errors are the most obvious thing left to improve.",
    },
    whatBroke:
      "TODO — Jayesh: what actually failed during this build? Chunks that cut a sentence in half mid-answer is a real one, but write what happened, not what could happen.",
    outcomes: [
      {
        metric: "TODO",
        detail: "TODO — a real number: documents tested, answer accuracy, or response time. Leave blank rather than guess.",
      },
    ],
    stack: ["Python", "FastAPI", "LangChain", "Groq", "Hugging Face", "Next.js"],
    links: [
      { label: "Source", href: "https://github.com/wishmaster815/DocuMind-AI" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "birju-ai",
    name: "Birju.AI",
    summary:
      "An AI career and learning assistant that generates personalised roadmaps, stage-wise quizzes, and counselling reports.",
    problem:
      "Career guidance for students is either generic advice or a paid counsellor, and most learners abandon unstructured learning plans within weeks because nothing tells them what to do next.",
    keyDecision: {
      title: "Generating a staged plan instead of a single answer",
      context:
        "A chat interface answers the question you happen to ask. Learners need the opposite: a sequence, where each stage depends on the last and the next step is always defined.",
      options: [
        "A chatbot that answers whatever is asked",
        "A one-shot generated roadmap with no follow-up",
        "A staged plan where each stage produces the quizzes and unlocks the next",
      ],
      chosen:
        "A staged roadmap, so the assistant has a spine to reason against rather than answering each prompt in isolation.",
      tradeoff:
        "The plan is only as good as the assessment that generated it, and a weak self-assessment produces a confidently wrong roadmap. Making the stages explicit made that failure visible instead of hiding it behind a chat log.",
    },
    whatBroke:
      "TODO — Jayesh: what went wrong here? Roadmaps drifting from the learner's actual level is a strong candidate.",
    outcomes: [
      {
        metric: "TODO",
        detail: "TODO — users, quizzes generated, or completion rate. Real numbers only.",
      },
    ],
    stack: ["Next.js", "LangChain", "Python", "OpenAI", "REST"],
    links: [
      { label: "Frontend", href: "https://github.com/wishmaster815/Birju-Frontend-2" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "converso-ai",
    name: "ConversoAI",
    summary:
      "A chatbot product for instant, context-aware responses and automated conversations.",
    problem:
      "Static FAQ bots give the same answer regardless of what the visitor actually asked, so they deflect simple questions badly and fail the moment a real conversation starts.",
    keyDecision: {
      title: "Keeping conversation state server-side",
      context:
        "Multi-turn answers were inconsistent: the model answered as if each message were the first one, because history was not being carried with the request.",
      options: [
        "Stateless requests, treating every message independently",
        "Client-side history only, rebuilt on each page load",
        "Server-side session state keyed per conversation",
      ],
      chosen:
        "Server-side session state per conversation, so history survives reloads and stays consistent across devices.",
      tradeoff:
        "Session state adds a storage dependency and an expiry decision. I traded a stateless, trivially scalable service for answers that actually remembered the conversation.",
    },
    whatBroke:
      "TODO — Jayesh: what failed here? Context windows overflowing on long conversations is worth describing if it happened.",
    outcomes: [
      {
        metric: "TODO",
        detail: "TODO — a real number. Users, response time, or messages handled.",
      },
    ],
    stack: ["React", "Node.js", "Express", "LangChain", "Supabase"],
    links: [
      { label: "Source", href: "https://github.com/wishmaster815/ConversoAI_SaaS" },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "bingebuddy",
    name: "BingeBuddy",
    summary:
      "A recommendation tool that finds a film or series from your mood, genre, or favourites.",
    problem:
      "Recommendation lists optimise for what already has many ratings, so they keep returning the same popular titles. Choosing by mood is how people actually decide, and no mainstream catalogue search supports that.",
    keyDecision: {
      title: "Content-based vectors over a ratings database",
      context:
        "Collaborative filtering needs a large user-rating history that a small project does not have, so there was no interaction data to learn from.",
      options: [
        "Collaborative filtering on user ratings",
        "Popularity ranking by genre",
        "Cosine similarity over vectorised metadata and synopsis text",
      ],
      chosen:
        "Cosine similarity over vectorised item metadata, which works from a cold start with no user history at all.",
      tradeoff:
        "Recommendations stay inside the neighbourhood of what was picked, so genuine serendipity is rare. I accepted a narrow, explainable result set over a broad one that could not be justified.",
    },
    whatBroke:
      "TODO — Jayesh: what went wrong? Sparse metadata producing near-identical vectors is a real failure mode worth writing up.",
    outcomes: [
      {
        metric: "TODO",
        detail: "TODO — catalogue size, or how often the top result was actually watched.",
      },
    ],
    stack: ["Python", "cosine similarity", "Pandas"],
    links: [
      {
        label: "Source",
        href: "https://github.com/wishmaster815/movie-recommendation-using-cosine-similarity",
      },
    ],
    featured: false,
    year: "2024",
  },
  {
    slug: "brainwave",
    name: "BrainWave",
    summary: "An open AI chat application built as a front-end exercise.",
    problem:
      "Mostly a way to build a real streaming chat interface end to end, including partial responses and the state management that goes with them.",
    keyDecision: {
      title: "TODO — Jayesh: name the one decision here worth defending.",
      context: "TODO",
      options: ["TODO", "TODO"],
      chosen: "TODO",
      tradeoff: "TODO",
    },
    whatBroke: "TODO",
    outcomes: [{ metric: "TODO", detail: "TODO — or delete this entry." }],
    stack: ["React", "JavaScript"],
    links: [
      { label: "Source", href: "https://github.com/wishmaster815/BrainWave-ReactJs" },
    ],
    featured: false,
    year: "2024",
  },
];

export const experience: Experience[] = [
  {
    role: "AI/ML Engineer Intern",
    org: "CrystalTech Solutions",
    period: "TODO — dates",
    detail:
      "Built and optimised ML models across data preprocessing, training, and deployment for real-world applications.",
  },
  {
    role: "Project Intern",
    org: "Smart City India Pvt. Ltd.",
    period: "TODO — dates",
    detail:
      "Contributed to ITMS and road-safety systems, working on smart traffic management and urban infrastructure tooling.",
  },
  {
    role: "Freelance UI/UX Designer",
    org: "Independent",
    period: "TODO — dates",
    detail:
      "Designed interfaces for web and mobile clients, focused on usability and visual clarity rather than decoration.",
  },
];

export const journal: JournalEntry[] = [
  {
    slug: "genai-systems",
    title: "Going deeper on generative AI systems",
    kind: "learning",
    date: "2026",
    state:
      "Building on the retrieval work in DocuMind and Birju.AI, focusing on evaluation and cost rather than new frameworks.",
    body: "",
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export const extraProjects = projects.filter((p) => !p.featured);
